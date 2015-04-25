using KaiSpy.Models;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.UI.WebControls;
using WebGrease.Css.Extensions;

namespace KaiSpy.Controllers
{
    public class ValuesController : ApiController
    {
        private DealsDBContext db = new DealsDBContext();

        // GET api/values
        //public IEnumerable<Deal> Get()
        //{
        //    var deals = db.Deals.Include("Category").Select(d => new Deal
        //    {
        //        Id = d.Id,
        //        Day = d.Day,
        //        Lat = d.Lat,
        //        Long = d.Long,
        //        Address = d.Address,
        //        BusinessName = d.BusinessName,
        //        Categories = d.Categories.Select(c => new Category { Name = c.Name }).ToList(),
        //        Description = d.Description,
        //        PhoneNumber = d.PhoneNumber
        //    });

        //    return deals;
        //}

        /// <summary>
        /// I worked out there was nothing wrong with entity framework - rather this was a serialization problem. To get around it I made 4 DTOs (Data Transfer objects).
        /// This allowed me to control the information that was being serialized. ie the base dto does not have the property that caused the infinite reference problem.
        /// </summary>

        // GET api/values
        public IEnumerable<DealDTOWithCategoriesDTO> Get()
        {
            return db.Deals.Include(p => p.Categories).Select(d => new DealDTOWithCategoriesDTO
            {
                Id = d.Id,
                Day = d.Day,
                Lat = d.Lat,
                Long = d.Long,
                Address = d.Address,
                BusinessName = d.BusinessName,
                Categories = d.Categories.Select(c => new CategoryDTO() { Name = c.Name, Id = c.Id }).ToList(),
                Description = d.Description,
                PhoneNumber = d.PhoneNumber
            });
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
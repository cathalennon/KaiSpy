using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using KaiSpy.Models;
using WebGrease.Css.Extensions;

namespace KaiSpy.Controllers
{
    public class CategoriesController : ApiController
    {
        private DealsDBContext db = new DealsDBContext();
        // GET api/categories
        public IEnumerable<CategoryDTO> Get()
        {
            return db.Categories.Include(x => x.Deals).Select(c => new CategoryDTO
            {
                Id = c.Id,
                Name = c.Name,
                Deals = c.Deals.Select( d=> new DealDTO() { BusinessName = d.BusinessName, Id = d.Id, Address = d.Address, Lat = d.Lat, Long = d.Long, Day = d.Day}).ToList()
            });
        }

        // GET api/categories/5
        public Category Get(string id)
        {
            return db.Categories.Where(c => c.Name == id).FirstOrDefault();
        }
    }
}
using System;
using System.Collections.Generic;
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
        DealsDBContext db = new DealsDBContext();
        // GET api/categories
        public IEnumerable<Category> Get()
        {
            return db.Categories.ToList();
        }

        // GET api/categories/5
        public Category Get(string id)
        {
           return db.Categories.Where(c => c.Name == id).FirstOrDefault();
        }

        // POST api/categories
        public void Post([FromBody]string value)
        {
        }

        // PUT api/categories/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}

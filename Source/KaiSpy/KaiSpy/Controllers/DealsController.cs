using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.InteropServices;
using System.Web.Http;
using KaiSpy.Models;
using Newtonsoft.Json;

namespace KaiSpy.Controllers
{
    
    public class DealsController : ApiController
    {
        private DealsDBContext _context = new DealsDBContext();
        
        
        // GET: api/Deals
        public List<Deal> Get()
        {
            return _context.Deals.ToList();
        }

        // GET: api/Deals/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Deals
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Deals/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Deals/5
        public void Delete(int id)
        {
        }
    }
}

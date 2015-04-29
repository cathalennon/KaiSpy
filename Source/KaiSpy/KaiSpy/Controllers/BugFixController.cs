using System.Web.Http;
using KaiSpy.Controllers.Clients;

namespace KaiSpy.Controllers
{
    public class BugFixController : ApiController
    {
        // GET: api/BugFix
        public void Get()
        {
                YelpClient x = new YelpClient();
        
            x.GetAllJson("the-residence-wellington-2");
        
        }

        // GET: api/BugFix/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/BugFix
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/BugFix/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/BugFix/5
        public void Delete(int id)
        {
        }
    }
}

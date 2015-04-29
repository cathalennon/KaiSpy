using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;
using KaiSpy.Models;

namespace KaiSpy.Controllers
{

    public class DealsController : ApiController
    {
        private DealsDBContext context = new DealsDBContext();

        // GET: api/Deals
        public IEnumerable<DealDTO> Get()
        {
            return context.Deals.Include(p => p.Categories).Select(d => new DealDTO
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
    }
}

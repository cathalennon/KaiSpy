using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;
using KaiSpy.Models;


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
                Deals = c.Deals.Select( d=> new DealDTO { BusinessName = d.BusinessName, Id = d.Id, Address = d.Address, Lat = d.Lat, Long = d.Long, Day = d.Day}).ToList()
            });
        }

        // GET api/categories/5
        public CategoryDTO Get(string id)
        {
            var temp =  db.Categories.First(c => c.Name == id);
            return new CategoryDTO
            {
                Id = temp.Id,
                Name = temp.Name,
                Deals = temp.Deals.Select( d=> new DealDTO() { BusinessName = d.BusinessName, Id = d.Id, Address = d.Address, Lat = d.Lat, Long = d.Long, Day = d.Day}).ToList()
            };
        }
    }
}
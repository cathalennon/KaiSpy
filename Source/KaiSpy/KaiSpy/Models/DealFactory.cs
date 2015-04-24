using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebGrease.Css.Extensions;

namespace KaiSpy.Models
{
    public class DealFactory
    {
        private readonly DealsDBContext _context;

        public DealFactory(DealsDBContext context)
        {
            _context = context;
        }

        public Deal CreateDeal(string day, double lat, double longitude, IEnumerable<string> categories, string description, string name, string address, long number)
        {
            var deal = new Deal
            { 
                Day = day,
                Lat = lat, 
                Long = longitude,
                Address =  address,
                BusinessName = name,
                Description = description,
                PhoneNumber = number,
                Categories = new List<Category>()
            };

            foreach (var categoryName in categories)
            {
                var category = _context.Categories.FirstOrDefault(x => x.Name == categoryName);
                if (category == null)
                {
                    category = new Category {Name = categoryName};
                }
            deal.Categories.Add(category);
            }

            return deal;
        }
    }
}
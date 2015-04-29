using System.Collections.Generic;
using System.Linq;


namespace KaiSpy.Models
{
    public class DealFactory
    {
        private readonly DealsDBContext _context;

        public DealFactory(DealsDBContext context)
        {
            _context = context;
        }

        public Deal CreateDeal(string day, double latitude, double longitude, IEnumerable<string> categories, string description, string name, string address, long phonenumber)
        {
            var deal = new Deal
            {
                Day = day,
                Lat = latitude,
                Long = longitude,
                Address = address,
                BusinessName = name,
                Description = description,
                PhoneNumber = phonenumber,
                Categories = new List<Category>()
            };


            //Loop through categories in database, where input name is equal to name in categories database, add category to Deal object. 
            //If there is no category match create new category and add to Deal.

            foreach (var categoryName in categories)
            {
                var category = _context.Categories.FirstOrDefault(c => c.Name == categoryName);
                if (category == null)
                {
                    category = new Category { Name = categoryName };
                }
                deal.Categories.Add(category);
            }

            return deal;
        }
    }
}
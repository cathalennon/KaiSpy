using System; // BA remove redundant using statements. Resharper Ctrl E+C will do this for you
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebGrease.Css.Extensions;

namespace KaiSpy.Models // BA does a factor belong in the Models folder? Should it be under "Services" or something instead?
{
    public class DealFactory
    {
        private readonly DealsDBContext _context;

        public DealFactory(DealsDBContext context)
        {
            _context = context;
        }

        // BA is day a string? Or is is an enum?
        // BA lat should be latitude, if for no other reason than to be consistent with longitude
        // BA what is the final parameter? Should be called PhoneNumber. Shouldn't be a long "04 123 4567" is not the same as 41234567
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

            // BA comment explaining what this bit of code does, and more importantly WHY it does it. Possibly that information would be better conveyed as a comment at the class level?
            foreach (var categoryName in categories)
            {
                var category = _context.Categories.FirstOrDefault(x => x.Name == categoryName);
                if (category == null)
                {
                    category = new Category {Name = categoryName};
                }
            deal.Categories.Add(category); // BA code formatting - this should be one tab to the right. Resharper Ctrl E+C again
            }

            return deal;
        }
    }
}
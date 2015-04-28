using System.Collections.Generic;
using System.Threading;
using KaiSpy.Models;

namespace KaiSpy.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<KaiSpy.Models.DealsDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(DealsDBContext context)
        {
            context.Categories.AddOrUpdate(
                c => c.Name,
                new Category { Name = "Mexican" },
                new Category { Name = "Pub" },
                new Category { Name = "Bar" },
                new Category { Name = "Italian" },
                new Category { Name = "Pizza" },
                new Category { Name = "Craft Beer" },
                new Category { Name = "General" },
                new Category { Name = "Asian" },
                new Category { Name = "Vietnamese" },
                new Category { Name = "Seafood" }
                );

            context.SaveChanges();

            var dealFactory = new DealFactory(context);

            context.Deals.AddOrUpdate(
                d => d.Description,
                    dealFactory.CreateDeal("Monday", -41.2926425985115, 174.779055962348, new[] { "Pub", "Bar" },
                        "2 for 1 Mains on Monday!", "The Residence", 
                        "120 Courtenay Place, Te Aro, Wellington 6011", 048016076),
                    dealFactory.CreateDeal("Tuesday", -41.292495, 174.779209, new[] { "Italian", "Bar", "Pizza" },
                        "2 for 1 Pizzas on Tuesdays!", "Electric Avenue",
                        "132 Courtenay Place, Te Aro, Wellington 6011", 048033900),
                    dealFactory.CreateDeal("Wednesday", -41.296244, 174.779137, new[] { "Mexican", "Pub", "Bar" },
                        "Wing Wednesday: All-you-can-eat Buffalo Wings + baja fries for $25 per person (1 drink purchase $4+ required each), 5.30-9.30pm", "Tequila Joe's", 
                        "43 Vivian St, Te Aro, Wellington 6011", 048025637),
                    dealFactory.CreateDeal("Thursday", -41.290697, 174.775018, new[] { "Craft Beer", "Pub", "Bar" },
                        "$10 Lunches every Thursday!", "Little Beer Quarter",
                        "6 Edward St, Te Aro, Wellington 6011", 048033304),
                    dealFactory.CreateDeal("Friday", -41.288724, 174.769659, new[] { "General" },
                        "2 for 1 Margherita Pizzas after 3pm!", "Hunter Lounge",
                        "Third Floor, Student Union Building, Vic Uni, 1 Kelburn Parade, Kelburn, Wellington 6012", 04 - 463 - 4712),
                    dealFactory.CreateDeal("Saturday", -41.293834, 174.783567, new[] { "General" },
                        "Wagyu wonder burger and a tap beer for $20 from 10am-6pm", "Tasting Room",
                        "2 Courtenay Place, Te Aro 6011", 043841159),
                    dealFactory.CreateDeal("Sunday", -41.295165, 174.774776, new[] { "General" },
                        "2 for 1 Mains (Fish of the Day, Rump Steak or Vegetarian option)", "Cuba St Bistro",
                        "203 - 205 Cuba Street, CBD, Wellington 6011", 048903939),
                    dealFactory.CreateDeal("Monday", -41.293697, 174.781163, new[] { "Asian" },
                        "2 for 1 on all dishes, very popular every week!", "Chow Tory",
                        "45 Tory St, Te Aro, Wellington 6141", 043828585),
                    dealFactory.CreateDeal("Tuesday", -41.292988, 174.782200, new[] {"Vietnamese", "Asian"},
                        "2 for 1 On all main dishes", "Rockyard", 
                        "18 Allen St, Te Aro, Wellington 6011", 043813930),
                    dealFactory.CreateDeal("Wednesday", -41.290675, 174.774796, new[] {"General"},
                        "$7 steak night – organic scotch fillet steak with chimichurri, red wine jus or French butter for $7 from 6pm onwards. (Bookings welcome)", "Meow",
                        "7 Edward St, Te Aro, Wellington 6011", 043858883),
                    dealFactory.CreateDeal("Thursday", -41.290160, 174.789613, new[] {"Seafood", "General"},
                        "2 for 1 dinners from 5pm-late", "The Boat Cafe",
                        "165 Oriental Terrace, Oriental Bay, Wellington 6011", 049393935),
                    dealFactory.CreateDeal("Friday", -41.319986, 174.775429, new[] {"General", "Pub"},
                        "$9 sandwiches with free house-cut chips + lemon mayo at lunch. I can vouch for the deliciousness (try the haloumi sandwich!)", "Goose Shack",
                        "465 Adelaide Rd, Berhampore, Wellington", 6023043897171),
                    dealFactory.CreateDeal("Saturday", -41.284607, 174.776385, new[] {"Mexican", "Bar"},
                        "All Fajitas for $28 (chicken, beef or prawn & squid)", "Arizona",
                        "171-175 Featherston St, Wellington, 6011", 044957867),
                    dealFactory.CreateDeal("Sunday", -41.296501, 174.774548, new[] {"General", "Pub"},
                        "Southern Cross: Sunday Roast with all the trimmings + chocolate brownie $19.50. Second Sunday of every month there is a free salsa class", "Southern Cross",
                        "39 Abel Smith Street, Te Aro, Wellington", 043849085)
            );
        }
    }
}

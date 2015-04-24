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
                new Category { Name = "General" }
                );

            context.SaveChanges();

            var dealFactory = new DealFactory(context);

            context.Deals.AddOrUpdate(
                d => d.BusinessName,
                    dealFactory.CreateDeal("Monday", -41.292683, 174.779503, new[] { "Pub", "Bar" },
                        "2 for 1 Mains on Monday!", "The Residence", "120 Courtenay Place, Te Aro, Wellington 6011",
                        04 - 801 - 6076),
                    dealFactory.CreateDeal("Tuesday", -41.292495, 174.779209, new[] { "Italian", "Bar", "Pizza" },
                        "2 for 1 Pizzas on Tuesdays!", "Electric Avenue",
                        "132 Courtenay Place, Te Aro, Wellington 6011", 04 - 803 - 3900),
                    dealFactory.CreateDeal("Wednesday", -41.296244, 174.779137, new[] { "Mexican", "Pub", "Bar" },
                        "Wing Wednesday: All-you-can-eat Buffalo Wings + baja fries for $25 per person (1 drink purchase $4+ required each), 5.30-9.30pm",
                        "Tequila Joe's", "43 Vivian St, Te Aro, Wellington 6011", 04 - 802 - 5637),
                    dealFactory.CreateDeal("Thursday", -41.290697, 174.775018, new[] { "Craft Beer", "Pub", "Bar" },
                        "$10 Lunches every Thursday!", "Little Beer Quarter", "6 Edward St, Te Aro, Wellington 6011",
                        04 - 803 - 3304),
                    dealFactory.CreateDeal("Friday", -41.288724, 174.769659, new[] { "General" },
                        "2 for 1 Margherita Pizzas after 3pm!", "Hunter Lounge",
                        "Third Floor, Student Union Building, Vic Uni, 1 Kelburn Parade, Kelburn, Wellington 6012",
                        04 - 463 - 4712),
                    dealFactory.CreateDeal("Saturday", -41.293834, 174.783567, new[] { "General" },
                        "Wagyu wonder burger and a tap beer for $20 from 10am-6pm", "Tasting Room",
                        "2 Courtenay Place, Te Aro 6011", 04 - 384 - 1159)
                );
        }
    }
}

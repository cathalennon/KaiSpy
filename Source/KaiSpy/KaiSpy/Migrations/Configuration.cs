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

        protected override void Seed(KaiSpy.Models.DealsDBContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            context.Deals.AddOrUpdate(
              p => p.Id,
              new Deal { BusinessName = "Andrew Peters" },
              new Deal { BusinessName = "Brice Lambson" }
            );
            
        }
    }
}

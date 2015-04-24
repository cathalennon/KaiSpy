using KaiSpy.Models;
using NUnit.Framework;

namespace KaiSpy.Tests.Models
{
    [TestFixture]
    class MigrationTests
    {
        [Test]
        public void why_are_we_getting_duplicates()
        {
            // Arrange
            var context = new DealsDBContext();
            var dealFactory = new DealFactory(context);

            // Act
            var deal1 = dealFactory.CreateDeal("Tuesday", -41.292495, 174.779209, new[] {"Bar", "Pizza"},
                "2 for 1 Pizzas on Tuesdays!", "Electric Avenue", "132 Courtenay Place, Te Aro, Wellington 6011", 48033900);
            context.Deals.Add(deal1);
            context.SaveChanges();

            var deal2 = dealFactory.CreateDeal("Monday", -41.292495, 174.779209, new[] {"Bar", "Pizza" },
                "2 for 1 Pizzas on Tuesdays!", "Electric Avenue", "132 Courtenay Place, Te Aro, Wellington 6011", 48033900);
            context.Deals.Add(deal2);
            context.SaveChanges();
            // Assert
            Assert.That(true, Is.False);
        }   
    }
}

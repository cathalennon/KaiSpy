using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KaiSpy.Controllers.Clients;
using NUnit.Framework;

namespace KaiSpy.Tests.Controllers.Clients
{
    [TestFixture]
    public class YelpClient_Tests
    {
        [Test]
        public void YelpClient_investigation()
        {
            // Arrange

            // Act
            var client = new YelpClient();
            var x = client.GetAllJson("the-residence-wellington-2");

            // Assert

        }
    }
}

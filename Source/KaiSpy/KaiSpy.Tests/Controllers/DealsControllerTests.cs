using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KaiSpy.Controllers;
using KaiSpy.Models;
using NUnit.Framework;

namespace KaiSpy.Tests.Controllers
{
    class DealsControllerTests
    {
        [Test]
        public void Check_Database_Is_Not_Empty()
        {
            // Arrange
            DealsController dc = new DealsController();
            // Act
            // Assert
            Assert.IsNotEmpty(dc.Get());
        }

        [Test]
        public void Check_Get_Is_Returning_Correct_Number_Of_Deals()
        {
            // Arrange
            DealsController dc = new DealsController();
            DealsDBContext context = new DealsDBContext();
            // Act
            var databaseLength = context.Deals.Count();
            var getReturnLength = dc.Get().Count;
            // Assert
            Assert.IsTrue(databaseLength == getReturnLength);
        }
    }
}

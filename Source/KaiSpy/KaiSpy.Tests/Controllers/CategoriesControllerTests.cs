using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Security.Cryptography.X509Certificates;
using KaiSpy.Controllers;
using KaiSpy.Models;
using NUnit.Framework;

namespace KaiSpy.Tests.Controllers
{
    public class CategoriesControllerTests
    {
        [Test]
        public void Check_Database_Is_Not_Empty()
        {
            // Arrange
            CategoriesController dc = new CategoriesController();
            // Act
            var dbcategories = dc.Get();
            // Assert
            Assert.IsNotEmpty(dbcategories);
        }

       [Test]
        public void Check_Get_Is_Returning_Correct_Number_Of_Deals()
        {
            // Arrange
            CategoriesController cc = new CategoriesController();
            DealsDBContext context = new DealsDBContext();
            // Act
            var databaseLength = context.Deals.Count();
            var getReturnLength = cc.Get().Count();
            // Assert
            Assert.IsTrue(databaseLength == getReturnLength);
        }

        [Test]
        public void Check_Keyword_Category_Return()
        {
            // Arrange
            CategoriesController cc = new CategoriesController();
            DealsDBContext context = new DealsDBContext();
            // Act
            var testerkeyword = "Pizza";
            var x = cc.Get(testerkeyword);
            // Assert
            Assert.IsTrue(x.Name == testerkeyword);

        }


    }
    }



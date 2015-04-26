using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using KaiSpy; // BA unused using
using KaiSpy.Controllers;

namespace KaiSpy.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void Index() // BA this is not a very meaningful name for a test - The_home_controller_returns_a_view_with_the_expected_title would be a better description of what it's doing
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Index() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual("Home Page", result.ViewBag.Title);
        }
    }
}

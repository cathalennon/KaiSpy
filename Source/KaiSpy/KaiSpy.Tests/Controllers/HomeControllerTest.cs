using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using KaiSpy;
using KaiSpy.Controllers;

namespace KaiSpy.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {

        [TestMethod]
        public void Home_Controller_index_method_returns_expected_title()
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

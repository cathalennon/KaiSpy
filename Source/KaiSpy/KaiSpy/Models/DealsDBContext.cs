using System.Data.Entity;
using System.Linq;

namespace KaiSpy.Models
{

    public class DealsDBContext : DbContext
    {
        // Your context has been configured to use a 'DealsDBContext' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'KaiSpy.Models.DealsDBContext' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'DealsDBContext' 
        // connection string in the application configuration file.
        public DealsDBContext()
            : base("name=DefaultConnection")
        {
        }
        public virtual DbSet<Deal> Deals { get; set; }
        public virtual DbSet<Category> Categories { get; set; } 
    }
}
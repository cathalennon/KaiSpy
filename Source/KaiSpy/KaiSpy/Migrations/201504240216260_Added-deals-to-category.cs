using System.Data.Entity.Migrations;

namespace KaiSpy.Migrations
{
    public partial class Addeddealstocategory : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Categories", "Deal_Id", "dbo.Deals");
            DropIndex("dbo.Categories", new[] { "Deal_Id" });
            CreateTable(
                "dbo.DealCategories",
                c => new
                    {
                        Deal_Id = c.Int(nullable: false),
                        Category_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Deal_Id, t.Category_Id })
                .ForeignKey("dbo.Deals", t => t.Deal_Id, cascadeDelete: true)
                .ForeignKey("dbo.Categories", t => t.Category_Id, cascadeDelete: true)
                .Index(t => t.Deal_Id)
                .Index(t => t.Category_Id);
            
            DropColumn("dbo.Categories", "Deal_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Categories", "Deal_Id", c => c.Int());
            DropForeignKey("dbo.DealCategories", "Category_Id", "dbo.Categories");
            DropForeignKey("dbo.DealCategories", "Deal_Id", "dbo.Deals");
            DropIndex("dbo.DealCategories", new[] { "Category_Id" });
            DropIndex("dbo.DealCategories", new[] { "Deal_Id" });
            DropTable("dbo.DealCategories");
            CreateIndex("dbo.Categories", "Deal_Id");
            AddForeignKey("dbo.Categories", "Deal_Id", "dbo.Deals", "Id");
        }
    }
}

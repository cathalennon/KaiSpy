namespace KaiSpy.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class init : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Deal_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Deals", t => t.Deal_Id)
                .Index(t => t.Deal_Id);
            
            CreateTable(
                "dbo.Deals",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Day = c.String(),
                        Lat = c.Double(nullable: false),
                        Long = c.Double(nullable: false),
                        Description = c.String(),
                        BusinessName = c.String(),
                        Address = c.String(),
                        PhoneNumber = c.Long(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Categories", "Deal_Id", "dbo.Deals");
            DropIndex("dbo.Categories", new[] { "Deal_Id" });
            DropTable("dbo.Deals");
            DropTable("dbo.Categories");
        }
    }
}

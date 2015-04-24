using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KaiSpy.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual List<Deal> Deals { get; set; }
    }
}
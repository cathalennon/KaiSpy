using System;
using System.Collections.Generic;
using System.Linq;
using System.Web; // BA unused usings

namespace KaiSpy.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual List<Deal> Deals { get; set; }
    }
}
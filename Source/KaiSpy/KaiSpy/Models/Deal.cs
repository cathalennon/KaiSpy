using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace KaiSpy.Models
{
    public class Deal
    {
        public int Id { get; set; }
        public string Day { get; set; }
        public double Lat { get; set; }
        public double Long { get; set; }
        public virtual List<Category> Categories { get; set; }
        public string Description { get; set; }
        public string BusinessName { get; set; }
        public string Address { get; set; }
        public long PhoneNumber { get; set; }
    }
}
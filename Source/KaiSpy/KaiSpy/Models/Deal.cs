using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace KaiSpy.Models
{
    public class Deal
    {
        [Key]
        public int Id { get; set; }
        public string Day { get; set; }
        public double Lat { get; set; }
        public double Long { get; set; }
        public virtual ICollection<Category> Categories { get; set; }
        public string Description { get; set; }
        public string BusinessName { get; set; }
        public string Address { get; set; }
        public long PhoneNumber { get; set; }
    }
}
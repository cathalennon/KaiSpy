﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

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
        public int RatingCount { get; set; }
        public string Rating_img { get; set; }
        public string YelpBusinessId { get; set; }
        public int Rating { get; set; }
        public bool IsClosed { get; set; }



    }
}
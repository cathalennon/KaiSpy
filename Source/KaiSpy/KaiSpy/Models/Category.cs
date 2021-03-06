﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace KaiSpy.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Deal> Deals { get; set; }
    }
}
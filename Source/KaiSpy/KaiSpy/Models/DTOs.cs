using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace KaiSpy.Models
{
    public class DealDTO
    {
        public int Id { get; set; }

        public string Day { get; set; }

        public double Lat { get; set; }

        public double Long { get; set; }

        public string Description { get; set; }

        public string BusinessName { get; set; }

        public string Address { get; set; }

        public long PhoneNumber { get; set; }
    }

    public class DealDTOWithCategoriesDTO
    {
        public int Id { get; set; }

        public string Day { get; set; }

        public double Lat { get; set; }

        public double Long { get; set; }

        public string Description { get; set; }

        public string BusinessName { get; set; }

        public string Address { get; set; }

        public long PhoneNumber { get; set; }

        public List<CategoryDTO> Categories { get; set; }
    }

    public class CategoryDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }

    public class CategoryDTOWithDealDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public List<DealDTO> Deals { get; set; }
    }
}
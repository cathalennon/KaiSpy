using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace KaiSpy.Models
{
    //[JsonObject(IsReference = true)]
    public class Deal
    {
        [Key]
        public int Id { get; set; }

        [DataMember]
        public string Day { get; set; }

        [DataMember]
        public double Lat { get; set; }

        [DataMember]
        public double Long { get; set; }

        /// <summary>
        /// Use to exclude from serialization
        /// </summary>
        //[JsonIgnore]
        //[IgnoreDataMember]
        //[DataMember]
        public virtual ICollection<Category> Categories { get; set; }

        [DataMember]
        public string Description { get; set; }

        [DataMember]
        public string BusinessName { get; set; }

        [DataMember]
        public string Address { get; set; }

        [DataMember]
        public long PhoneNumber { get; set; }
    }
}
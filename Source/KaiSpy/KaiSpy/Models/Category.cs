using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace KaiSpy.Models
{
    //To set up inclusion of references
    //[JsonObject(IsReference = true)]
    public class Category
    {
        //[Key]
        public int Id { get; set; }

        //[DataMember]
        public string Name { get; set; }

        //to ignore serializing the data member
        //[JsonIgnore]
        //[IgnoreDataMember]
        //to include in serializing
        //[DataMember]
        public virtual ICollection<Deal> Deals { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MarcoAddresses.Models
{
    public class AddressDetail : Address
    {
        public int StateId { get; set; }
        public int CountryId { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MarcoAddresses.Models
{
    public class AddressSummary : Address
    {
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Continent { get; set; }
        public string Customer { get; set; }
    }
}
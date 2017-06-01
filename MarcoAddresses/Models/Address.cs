using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MarcoAddresses.Models
{
    public enum AddressType
    {
        None,
        Account,
        Mailing,
        Legal
    }

    public class Address
    {
        public int? Id { get; set; }
        public string Type { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public int CityId { get; set; }

        public int CustomerId { get; set; }
        public int Zip { get; set; }

        public AddressType GetAddressType()
        {
            switch (this.Type)
            {
                case "A": return AddressType.Account;
                case "M": return AddressType.Mailing;
                case "L": return AddressType.Legal;
                default:  return AddressType.None;
            }
        }
    }
}
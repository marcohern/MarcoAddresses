// <copyright file="Address.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace MarcoAddresses.Models
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;

    /// <summary>
    /// Address Type
    /// </summary>
    public enum AddressType
    {
        /// <summary>
        /// Wildcard for no address
        /// </summary>
        None,

        /// <summary>
        /// Account Address
        /// </summary>
        Account,

        /// <summary>
        /// Mailing Address
        /// </summary>
        Mailing,

        /// <summary>
        /// Legal Aaddress
        /// </summary>
        Legal
    }

    /// <summary>
    /// Address Record
    /// </summary>
    public class Address
    {
        /// <summary>
        /// Address Identifier
        /// </summary>
        public int? Id { get; set; }

        /// <summary>
        /// Address Type. "M": Mailing Address, "A":Account Aaddress, "L": Legal Address
        /// </summary>
        public string Type { get; set; }

        /// <summary>
        /// Addres Line 1
        /// </summary>
        public string Address1 { get; set; }

        /// <summary>
        /// Address Line 2
        /// </summary>
        public string Address2 { get; set; }

        /// <summary>
        /// City Id
        /// </summary>
        public int CityId { get; set; }

        /// <summary>
        /// Customer Id
        /// </summary>
        public int CustomerId { get; set; }

        /// <summary>
        /// ZipCode
        /// </summary>
        public int Zip { get; set; }

        /// <summary>
        /// Returns tghe Address Type in Enumeration form
        /// </summary>
        /// <returns>Address Type Enumeration</returns>
        public AddressType GetAddressType()
        {
            switch (this.Type)
            {
                case "A": return AddressType.Account;
                case "M": return AddressType.Mailing;
                case "L": return AddressType.Legal;
                default: return AddressType.None;
            }
        }
    }
}
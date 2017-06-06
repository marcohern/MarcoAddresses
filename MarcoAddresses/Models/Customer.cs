// <copyright file="Customer.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace MarcoAddresses.Models
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;

    /// <summary>
    /// Represents a Customer Record
    /// </summary>
    public class Customer
    {
        /// <summary>
        /// Gets or sets Customer Identifier
        /// </summary>
        public int? Id { get; set; }

        /// <summary>
        /// Gets or sets Customer Name
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets Email Address
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets addreses belonging to the customer
        /// </summary>
        public IEnumerable<AddressSummary> Addresses { get; set; }
    }
}
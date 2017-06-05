// <copyright file="AddressDetail.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace MarcoAddresses.Models
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;

    /// <summary>
    /// Address Detail. Contains additional fields for the detail screen
    /// </summary>
    public class AddressDetail : Address
    {
        /// <summary>
        /// Gets or sets State Id
        /// </summary>
        public int StateId { get; set; }

        /// <summary>
        /// Gets or sets Customer Id
        /// </summary>
        public int CountryId { get; set; }
    }
}
﻿// <copyright file="Option.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace MarcoAddresses.Models
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;

    /// <summary>
    /// Option for Dropdown List
    /// </summary>
    public class Option
    {
        /// <summary>
        /// Id or Value of the option
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Name or display textg of the option
        /// </summary>
        public string Name { get; set; }
    }
}
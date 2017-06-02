// <copyright file="CustomerOptionsController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace MarcoAddresses.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using System.Net.Http;
    using System.Web.Http;
    using MarcoAddresses.Data;
    using MarcoAddresses.Models;
    using Microsoft.Practices.EnterpriseLibrary.Data;

    /// <summary>
    /// Customer Options Controller
    /// </summary>
    public class CustomerOptionsController : ApiController
    {
        /// <summary>
        /// Returns a list of Customers to populate a drop down.
        /// </summary>
        /// <returns>List of Customers</returns>
        public IEnumerable<Option> Get()
        {
            Database db = DataAccess.GetDatabase();
            IEnumerable<Option> customers = db.ExecuteSprocAccessor<Option>("QueryCustomerOptions");
            return customers;
        }
    }
}

// <copyright file="CountryOptionsController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace MarcoAddresses.Controllers
{
    using MarcoAddresses.Data;
    using MarcoAddresses.Models;
    using Microsoft.Practices.EnterpriseLibrary.Data;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using System.Net.Http;
    using System.Web.Http;

    /// <summary>
    /// Country Options Controller
    /// </summary>
    public class CountryOptionsController : ApiController
    {
        /// <summary>
        /// Gets a list of Countries to populate a drop down
        /// </summary>
        /// <returns>List of Countries</returns>
        public IEnumerable<Option> Get()
        {
            Database db = DataAccess.GetDatabase();
            IEnumerable<Option> countries = db.ExecuteSprocAccessor<Option>("QueryCountryOptions");
            return countries;
        }
    }
}

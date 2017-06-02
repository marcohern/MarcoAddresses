// <copyright file="CityOptionsController.cs" company="PlaceholderCompany">
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
    /// City Options Manager
    /// </summary>
    public class CityOptionsController : ApiController
    {
        /// <summary>
        /// Return a list of cities to populate a drop down
        /// </summary>
        /// <param name="id">State Id</param>
        /// <returns>List of cities for the given state</returns>
        public IEnumerable<Option> Get(int id)
        {
            Database db = DataAccess.GetDatabase();
            IEnumerable<Option> cities = db.ExecuteSprocAccessor<Option>("QueryCityOptions", new object[] { id });
            return cities;
        }
    }
}

// <copyright file="StateOptionsController.cs" company="PlaceholderCompany">
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
    /// State Options Controller
    /// </summary>
    public class StateOptionsController : ApiController
    {
        /// <summary>
        /// Get a list of States to populate a drop down
        /// </summary>
        /// <param name="id">Country Id</param>
        /// <returns>States for a given Country</returns>
        public IEnumerable<Option> Get(int id)
        {
            Database db = DataAccess.GetDatabase();
            IEnumerable<Option> states = db.ExecuteSprocAccessor<Option>("QueryStateOptions", new object[] { id });
            return states;
        }
    }
}

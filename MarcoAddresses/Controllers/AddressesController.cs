//-----------------------------------------------------------------------
// <copyright file="AddressesController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

namespace MarcoAddresses.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Data.Common;
    using System.Data.SqlClient;
    using System.Linq;
    using System.Net;
    using System.Net.Http;
    using System.Web.Http;
    using MarcoAddresses.Data;
    using MarcoAddresses.Exceptions;
    using MarcoAddresses.Models;
    using Microsoft.Practices.EnterpriseLibrary.Data;

    /// <summary>
    /// Manages addresses
    /// </summary>
    public class AddressesController : ApiController
    {
        /// <summary>
        /// Returns a list of addresses
        /// </summary>
        /// <returns>Address List</returns>
        public IEnumerable<AddressSummary> Get()
        {
            Database db = DataAccess.GetDatabase();
            IEnumerable<AddressSummary> addresses = db.ExecuteSprocAccessor<AddressSummary>("QueryAddress");
            return addresses;
        }

        /// <summary>
        /// Returns a single address record
        /// </summary>
        /// <param name="id">Address Id</param>
        /// <returns>Address object</returns>
        public AddressDetail Get(int id)
        {
            Database db = DataAccess.GetDatabase();
            AddressDetail address = db.ExecuteSprocAccessor<AddressDetail>("GetAddress", new object[] { id }).FirstOrDefault();
            if (address == null)
            {
                throw new NotFoundException("Address not found");
            }

            return address;
        }

        /// <summary>
        /// Creates a new Address
        /// </summary>
        /// <param name="value">Address Object to create</param>
        /// <returns>Created Aaddress Object</returns>
        public Address Post([FromBody]Address value)
        {
            Database db = DataAccess.GetDatabase();
            Address saved = db.ExecuteSprocAccessor<Address>(
                "CreateAddress",
                new object[] { value.Type, value.Address1, value.Address2, value.CityId, value.Zip, value.CustomerId }).First();
            return saved;
        }

        /// <summary>
        /// Updates an existing Address
        /// </summary>
        /// <param name="id">Address Id</param>
        /// <param name="value">Address Object</param>
        /// <returns>Updated Address Object</returns>
        public Address Put(int id, [FromBody]Address value)
        {
            Database db = DataAccess.GetDatabase();
            Address saved = db.ExecuteSprocAccessor<Address>(
                "UpdateAddress",
                new object[] { id, value.Type, value.Address1, value.Address2, value.CityId, value.Zip, value.CustomerId }).First();
            return saved;
        }

        /// <summary>
        /// Deletes an existing Address
        /// </summary>
        /// <param name="id">Address Id</param>
        /// <returns>Deleted Address Object</returns>
        public Address Delete(int id)
        {
            Database db = DataAccess.GetDatabase();
            Address deleted = db.ExecuteSprocAccessor<Address>("DeleteAddress", new object[] { id }).FirstOrDefault();
            return deleted;
        }
    }
}

// <copyright file="CustomersController.cs" company="PlaceholderCompany">
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
    using Data;
    using Exceptions;
    using Microsoft.Practices.EnterpriseLibrary.Data;
    using Models;

    /// <summary>
    /// Manage Customer records
    /// </summary>
    public class CustomersController : ApiController
    {
        /// <summary>
        /// Returns a list of customers
        /// </summary>
        /// <returns>List of Customers</returns>
        public IEnumerable<Customer> Get()
        {
            Database db = DataAccess.GetDatabase();
            IEnumerable<Customer> customers = db.ExecuteSprocAccessor<Customer>("QueryCustomers");
            return customers;
        }

        /// <summary>
        /// Returns the record of the given customer id
        /// </summary>
        /// <param name="id">Customer Id</param>
        /// <returns>Customer record</returns>
        public Customer Get(int id)
        {
            Database db = DataAccess.GetDatabase();
            Customer customer = db.ExecuteSprocAccessor<Customer>("GetCustomer", new object[] { id }).FirstOrDefault();

            IEnumerable<AddressSummary> addresses = db.ExecuteSprocAccessor<AddressSummary>("QueryAddress", new object[] { id });
            customer.Addresses = addresses;
            if (customer == null)
            {
                throw new NotFoundException("Customer not found");
            }
            return customer;
        }

        /// <summary>
        /// Create a New Customer
        /// </summary>
        /// <param name="value">Customer data</param>
        /// <returns>Created Customer record</returns>
        public Customer Post([FromBody]Customer value)
        {
            Database db = DataAccess.GetDatabase();
            Customer customer = db.ExecuteSprocAccessor<Customer>("CreateCustomer", new object[] { value.Name, value.Email }).FirstOrDefault();
            return customer;
        }

        /// <summary>
        /// Update an existing Customer
        /// </summary>
        /// <param name="id">Customer Id</param>
        /// <param name="value">Customer data</param>
        /// <returns>Updated Customer Record</returns>
        public Customer Put(int id, [FromBody]Customer value)
        {
            Database db = DataAccess.GetDatabase();
            Customer customer = db.ExecuteSprocAccessor<Customer>("UpdateCustomer", new object[] { id, value.Name, value.Email }).FirstOrDefault();
            return customer;
        }

        /// <summary>
        /// Deletes an existing customer
        /// </summary>
        /// <param name="id">Customer Id</param>
        /// <returns>Deleted Customer Record</returns>
        public Customer Delete(int id)
        {
            Database db = DataAccess.GetDatabase();
            Customer customer = db.ExecuteSprocAccessor<Customer>("DeleteCustomer", new object[] { id }).FirstOrDefault();
            return customer;
        }
    }
}

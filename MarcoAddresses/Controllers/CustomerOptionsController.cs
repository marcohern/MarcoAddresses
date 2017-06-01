using MarcoAddresses.Data;
using MarcoAddresses.Models;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MarcoAddresses.Controllers
{
    public class CustomerOptionsController : ApiController
    {
        // GET: api/CustomerOptions
        public IEnumerable<Option> Get()
        {
            Database db = DataAccess.GetDatabase();
            IEnumerable<Option> customers = db.ExecuteSprocAccessor<Option>("QueryCustomerOptions");
            return customers;
        }
    }
}

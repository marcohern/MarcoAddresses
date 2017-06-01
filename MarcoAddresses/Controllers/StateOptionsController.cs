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
    public class StateOptionsController : ApiController
    {
        // GET: api/StateOptions
        public IEnumerable<Option> Get(int id)
        {
            Database db = DataAccess.GetDatabase();
            IEnumerable<Option> states = db.ExecuteSprocAccessor<Option>("QueryStateOptions", new object[] { id });
            return states;
        }
    }
}

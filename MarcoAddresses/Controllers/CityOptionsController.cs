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
    public class CityOptionsController : ApiController
    {

        // GET: api/CityOptions/5
        public IEnumerable<Option> Get(int id)
        {
            Database db = DataAccess.GetDatabase();
            IEnumerable<Option> cities = db.ExecuteSprocAccessor<Option>("QueryCityOptions", new object[] { id });
            return cities;
        }
    }
}

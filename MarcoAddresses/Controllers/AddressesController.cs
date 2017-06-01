using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.SqlClient;
using System.Data;
using MarcoAddresses.Models;
using MarcoAddresses.Data;
using System.Data.Common;
using Exceptions;

namespace MarcoAddresses.Controllers
{
    public class AddressesController : ApiController
    {
        // GET: api/Addresses
        public IEnumerable<AddressSummary> Get()
        {
            Database db = DataAccess.GetDatabase();
            IEnumerable<AddressSummary> addresses = db.ExecuteSprocAccessor<AddressSummary>("QueryAddress");
            return addresses;
        }

        // GET: api/Addresses/5
        public AddressDetail Get(int id)
        {
            Database db = DataAccess.GetDatabase();
            AddressDetail address = db.ExecuteSprocAccessor<AddressDetail>("GetAddress",new object[] { id }).FirstOrDefault();
            if (address == null) throw new NotFoundException("Address not found");
            return address;
        }

        // POST: api/Addresses
        public Address Post([FromBody]Address value)
        {
            Database db = DataAccess.GetDatabase();
            Address saved = db.ExecuteSprocAccessor<Address>("CreateAddress", new object[] {
                value.Type, value.Address1, value.Address2, value.CityId, value.Zip
            }).First();
            return saved;
        }

        // PUT: api/Addresses/5
        public Address Put(int id, [FromBody]Address value)
        {
            Database db = DataAccess.GetDatabase();
            Address saved = db.ExecuteSprocAccessor<Address>("UpdateAddress", new object[] {
                id, value.Type, value.Address1, value.Address2, value.CityId, value.Zip
            }).First();
            return saved;
        }

        // DELETE: api/Addresses/5
        public Address Delete(int id)
        {
            Database db = DataAccess.GetDatabase();
            Address deleted = db.ExecuteSprocAccessor<Address>("DeleteAddress", new object[] { id }).FirstOrDefault();
            return deleted;
        }
    }
}

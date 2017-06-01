using Microsoft.Practices.EnterpriseLibrary.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MarcoAddresses.Data
{
    public class DataAccess
    {
        private static DatabaseProviderFactory factory = null;

        private static DatabaseProviderFactory GetFactory()
        {
            if (factory == null)
            {
                factory = new DatabaseProviderFactory();
            }
            return factory;
        }

        public static Database GetDatabase()
        {
            var f = GetFactory();
            return f.Create("DefaultConnection");
        }
    }
}
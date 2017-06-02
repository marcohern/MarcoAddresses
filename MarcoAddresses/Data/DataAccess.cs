// <copyright file="DataAccess.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>
namespace MarcoAddresses.Data
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using Microsoft.Practices.EnterpriseLibrary.Data;

    /// <summary>
    /// Data access facade
    /// </summary>
    public class DataAccess
    {
        /// <summary>
        /// Factory Singleton
        /// </summary>
        private static DatabaseProviderFactory factory = null;

        /// <summary>
        /// Returns a Database accessor
        /// </summary>
        /// <returns>Database Accesor</returns>
        public static Database GetDatabase()
        {
            var f = GetFactory();
            return f.Create("DefaultConnection");
        }

        /// <summary>
        /// Returns the only Factory Instance
        /// </summary>
        /// <returns>Database Provider Factory</returns>
        private static DatabaseProviderFactory GetFactory()
        {
            if (factory == null)
            {
                factory = new DatabaseProviderFactory();
            }

            return factory;
        }
    }
}
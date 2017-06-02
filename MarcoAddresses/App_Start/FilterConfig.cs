// <copyright file="FilterConfig.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace MarcoAddresses
{
    using System.Web;
    using System.Web.Mvc;
    using MarcoAddresses.Filters;

    /// <summary>
    /// Configure Web Filters
    /// </summary>
    public class FilterConfig
    {
        /// <summary>
        /// Register Filters Globally
        /// </summary>
        /// <param name="filters">Filter Collection</param>
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}

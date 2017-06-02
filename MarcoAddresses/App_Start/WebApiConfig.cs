// <copyright file="WebApiConfig.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace MarcoAddresses
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net.Http;
    using System.Web.Http;
    using MarcoAddresses.Filters;
    using Microsoft.Owin.Security.OAuth;
    using Newtonsoft.Json.Serialization;

    /// <summary>
    /// Configures Web API
    /// </summary>
    public static class WebApiConfig
    {
        /// <summary>
        /// Registers All Web API Settings
        /// </summary>
        /// <param name="config">Web API Confioguration Registry</param>
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));
            config.Filters.Add(new MarcoAddressesExceptionHandlerAttribute());

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional });
        }
    }
}

// <copyright file="HomeController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace MarcoAddresses.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using System.Web.Mvc;

    /// <summary>
    /// Home Controller
    /// </summary>
    public class HomeController : Controller
    {
        /// <summary>
        /// Displays the Home Page
        /// </summary>
        /// <returns>Home Page</returns>
        public ActionResult Index()
        {
            this.ViewBag.Title = "Home Page";

            return this.View("Angular2");
        }
    }
}

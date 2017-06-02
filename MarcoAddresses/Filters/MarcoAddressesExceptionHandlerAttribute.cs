// <copyright file="MarcoAddressesExceptionHandlerAttribute.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace MarcoAddresses.Filters
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net.Http;
    using System.Web;
    using System.Web.Http.Filters;
    using MarcoAddresses.Exceptions;

    /// <summary>
    /// Custom Exception Handler for Web API
    /// </summary>
    public class MarcoAddressesExceptionHandlerAttribute : ExceptionFilterAttribute
    {
        /// <summary>
        /// OnException Event
        /// </summary>
        /// <param name="actionExecutedContext">Context</param>
        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            if (actionExecutedContext.Exception is MarcoAddressesException)
            {
                MarcoAddressesException ex = (MarcoAddressesException)actionExecutedContext.Exception;
                actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(ex.HttpCode,
                    new Error { Message = ex.Message, Type = ex.GetType().ToString(), StackTrace = ex.StackTrace.Split(new string[] { "\r\n" }, StringSplitOptions.RemoveEmptyEntries), InnerException = ex.InnerException });
            }

            base.OnException(actionExecutedContext);
        }
    }
}
using MarcoAddresses.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http.Filters;

namespace MarcoAddresses.Filters
{
    class Error
    {
        public string Message { get; set; }
        public string Type { get; set; }
        public string[] StackTrace { get; set; }
        public Exception InnerException { get; set; }
    }

    public class MarcoAddressesExceptionHandlerAttribute : ExceptionFilterAttribute
    {


        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            if (actionExecutedContext.Exception is MarcoAddressesException)
            {
                MarcoAddressesException ex = (MarcoAddressesException)actionExecutedContext.Exception;
                actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(ex.HttpCode, new Error{
                    Message = ex.Message,
                    Type = ex.GetType().ToString(),
                    StackTrace = ex.StackTrace.Split(new string[] { "\r\n" }, StringSplitOptions.RemoveEmptyEntries),
                    InnerException = ex.InnerException
                });
            }
            base.OnException(actionExecutedContext);
        }
    }
}
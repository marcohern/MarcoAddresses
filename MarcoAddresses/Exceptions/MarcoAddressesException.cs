using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Runtime.Serialization;
using System.Web;

namespace MarcoAddresses.Exceptions
{
    public class MarcoAddressesException : Exception
    {
        public HttpStatusCode HttpCode { get; protected set; }

        protected virtual void SetHttpCode()
        {
            this.HttpCode = HttpStatusCode.BadRequest;
        }
        public MarcoAddressesException()
        {
            SetHttpCode();
        }

        public MarcoAddressesException(string message) : base(message)
        {
            SetHttpCode();
        }

        public MarcoAddressesException(string message, Exception innerException) : base(message, innerException)
        {
            SetHttpCode();
        }

        protected MarcoAddressesException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
            SetHttpCode();
        }
    }
}
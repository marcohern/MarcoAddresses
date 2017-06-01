using MarcoAddresses.Exceptions;
using System;
using System.Net;
using System.Runtime.Serialization;

namespace Exceptions
{
    [Serializable]
    public class NotFoundException : MarcoAddressesException
    {
        protected override void SetHttpCode()
        {
            this.HttpCode = HttpStatusCode.NotFound;
        }

        public NotFoundException()
        {
            SetHttpCode();
        }

        public NotFoundException(string message) : base(message)
        {
            SetHttpCode();
        }

        public NotFoundException(string message, Exception innerException) : base(message, innerException)
        {
            SetHttpCode();
        }

        protected NotFoundException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
            SetHttpCode();
        }
    }
}
// <copyright file="NotFoundException.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace MarcoAddresses.Exceptions
{
    using System;
    using System.Net;
    using System.Runtime.Serialization;

    /// <summary>
    /// Thrown when a resource is not found. ie: Search for a user with an Id that does not exist.
    /// </summary>
    [Serializable]
    public class NotFoundException : MarcoAddressesException
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NotFoundException"/> class.
        /// </summary>
        public NotFoundException()
        {
            this.HttpCode = HttpStatusCode.NotFound;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="NotFoundException"/> class.
        /// </summary>
        /// <param name="message">Exception Message</param>
        public NotFoundException(string message)
            : base(message)
        {
            this.HttpCode = HttpStatusCode.NotFound;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="NotFoundException"/> class.
        /// </summary>
        /// <param name="message">Exception Message</param>
        /// <param name="innerException">Inner Exception</param>
        public NotFoundException(string message, Exception innerException)
            : base(message, innerException)
        {
            this.HttpCode = HttpStatusCode.NotFound;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="NotFoundException"/> class.
        /// </summary>
        /// <param name="info">Serialization Info</param>
        /// <param name="context">Streaming Context</param>
        protected NotFoundException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            this.HttpCode = HttpStatusCode.NotFound;
        }

        /// <summary>
        /// Set NotFound HTTP Status Code
        /// </summary>
        protected override void SetHttpCode()
        {
            this.HttpCode = HttpStatusCode.NotFound;
        }
    }
}
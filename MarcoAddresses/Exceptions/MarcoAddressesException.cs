// <copyright file="MarcoAddressesException.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace MarcoAddresses.Exceptions
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using System.Runtime.Serialization;
    using System.Security.Permissions;
    using System.Web;

    /// <summary>
    /// General Application Exception. All Exceptions thrown by this app directly, should inherit from this Exception class.
    /// </summary>
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2240:ImplementISerializableCorrectly", Justification = "Not sure how to implement GetObjectData method propperly.")]
    [Serializable]
    public class MarcoAddressesException : Exception
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="MarcoAddressesException"/> class.
        /// </summary>
        public MarcoAddressesException()
        {
            this.HttpCode = HttpStatusCode.BadRequest;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="MarcoAddressesException"/> class.
        /// </summary>
        /// <param name="message">Exception Message</param>
        public MarcoAddressesException(string message)
            : base(message)
        {
            this.HttpCode = HttpStatusCode.BadRequest;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="MarcoAddressesException"/> class.
        /// </summary>
        /// <param name="message">Exception Message</param>
        /// <param name="innerException">Inner Exception</param>
        public MarcoAddressesException(string message, Exception innerException)
            : base(message, innerException)
        {
            this.HttpCode = HttpStatusCode.BadRequest;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="MarcoAddressesException"/> class.
        /// </summary>
        /// <param name="info">Serialization Info</param>
        /// <param name="context">Streaming Context</param>
        protected MarcoAddressesException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            this.HttpCode = HttpStatusCode.BadRequest;
        }

        /// <summary>
        /// Gets or sets http Error or Status Code
        /// </summary>
        public HttpStatusCode HttpCode { get; protected set; }

        /// <summary>
        /// Set the Status Code for this Exception
        /// </summary>
        protected virtual void SetHttpCode()
        {
            this.HttpCode = HttpStatusCode.BadRequest;
        }
    }
}
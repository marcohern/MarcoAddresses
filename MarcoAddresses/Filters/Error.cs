namespace MarcoAddresses.Filters
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;

    /// <summary>
    /// Represents an outputted error
    /// </summary>
    public class Error
    {
        /// <summary>
        /// Gets or sets Error Message
        /// </summary>
        public string Message { get; set; }

        /// <summary>
        /// Gets or sets Error Type
        /// </summary>
        public string Type { get; set; }

        /// <summary>
        /// Gets or sets StackTrace
        /// </summary>
        public string[] StackTrace { get; set; }

        /// <summary>
        /// Gets or sets Inner Exception
        /// </summary>
        public Exception InnerException { get; set; }
    }
}
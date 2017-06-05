namespace MarcoAddresses.Models
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;

    /// <summary>
    /// Address Summary. Used to display a listing of addresses in the address list.
    /// </summary>
    public class AddressSummary : Address
    {
        /// <summary>
        /// Gets or sets Name of the City
        /// </summary>
        public string City { get; set; }

        /// <summary>
        /// Gets or sets State Id
        /// </summary>
        public int StateId { get; set; }
        /// <summary>
        /// Gets or sets Name of the State
        /// </summary>
        public string State { get; set; }

        /// <summary>
        /// Gets or sets Country Id
        /// </summary>
        public int CountryId { get; set; }

        /// <summary>
        /// Gets or sets Name of the Country
        /// </summary>
        public string Country { get; set; }
        /// <summary>
        /// Gets or sets Name of the continent
        /// </summary>
        public string Continent { get; set; }
        /// <summary>
        /// Gets or sets name of the customer
        /// </summary>
        public string Customer { get; set; }
    }
}
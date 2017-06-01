using MarcoAddresses.Filters;
using System.Web;
using System.Web.Mvc;

namespace MarcoAddresses
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}

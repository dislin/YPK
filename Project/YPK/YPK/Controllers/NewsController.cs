using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace YPK.Controllers
{
    public class NewsController : Controller
    {
        //
        // GET: /News/

        public ActionResult NewsListing()
        {
            return View();
        }

        public ActionResult NewsDetails()
        {
            return View();
        }
    }
}

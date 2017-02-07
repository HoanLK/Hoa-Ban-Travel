using CMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace CMS.Controllers
{
    public class HomeController : Controller
    {
        private HoaBanTravelEntities db = new HoaBanTravelEntities();
        [Route]
        public ActionResult Index()
        {
            return View();
        }

        [Route("du-lich-trong-nuoc")]
        public ActionResult TrongNuoc()
        {
            return View();
        }

        [Route("du-lich-nuoc-ngoai")]
        public ActionResult NuocNgoai()
        {
            return View();
        }

        [Route("dich-vu-du-lich")]
        public ActionResult DichVuDuLich()
        {
            return View();
        }

        [Route("lien-he")]
        public ActionResult LienHe()
        {
            return View();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HoaBanTravel.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Dulichtrongnuoc()
        {
            ViewBag.Message = "Trang du lịch trong nước";

            return View();
        }
        public ActionResult Dulichnuocngoai()
        {
            ViewBag.Message = "Trang du lịch nước ngoài";

            return View();
        }
        public ActionResult Dichvudulich()
        {
            ViewBag.Message = "Trang dịch vụ du lịch";

            return View();
        }
        public ActionResult Dulichmienbac()
        {
            ViewBag.Message = "Trang du lịch miền bắc";

            return View();
        }
        public ActionResult Chitiettour()
        {
            ViewBag.Message = "Trang chi tiết tour";

            return View();
        }
    }
}
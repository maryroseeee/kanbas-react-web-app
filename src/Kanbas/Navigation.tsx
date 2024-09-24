import { Link } from "react-router-dom";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import {GoGear} from "react-icons/go";
import {useLocation} from "react-router";
export default function KanbasNavigation() {
    const { pathname } = useLocation();
    return (
        <div id="wd-kanbas-navigation" style={{ width: 110 }}
             className="list-group rounded-0 position-fixed bottom-0 top-0 \
             d-none d-md-block bg-black z-2">

        <a id="wd-neu-link" target="_blank"
                   href="https://www.northeastern.edu/"
                   className="list-group-item bg-black border-0 text-center">
                    <img src="/images/NEU.png" width="75px" /></a>

            <Link to="/Kanbas/Account" id="wd-account-link"
                  className={`list-group-item text-center border-0
      ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
                Account
            </Link>

            <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
                  className={`list-group-item text-center border-0 text-danger
                  ${pathname.includes("/Kanbas/Dashboard") ? "active bg-white" : "bg-black"}`}>
                <AiOutlineDashboard className="fs-1" />
                Dashboard
            </Link>

                <Link to="/Kanbas/Calendar" id="wd-calendar-link"
                      className={`list-group-item text-center border-0 text-danger
                  ${pathname.includes("Calendar") ? "active bg-white" : "bg-black"}`}>
                    <IoCalendarOutline className="fs-1 text-danger" />
                    Calendar </Link>

                <Link to="/Kanbas/Inbox" id="wd-inbox-link"
                      className={`list-group-item text-center border-0 d-flex flex-column 
                  align-items-center text-danger
                  ${pathname.includes("Inbox") ? "active bg-white" : "bg-black"}`}>
                <FaInbox className="fs-1 text-danger" />
                    Inbox </Link>



            <Link to="/Labs" id="wd-labs-link"
                  className={`list-group-item text-center border-0 d-flex flex-column 
                  align-items-center text-danger
      ${pathname.includes("Labs") ? "active bg-white" : "bg-black "}`}>
                <GoGear className="fs-1" />
                Labs
            </Link>

        </div>
    );}

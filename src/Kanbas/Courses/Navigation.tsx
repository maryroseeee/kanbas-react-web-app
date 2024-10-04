import { Link } from "react-router-dom";
import {FaRegCircleUser} from "react-icons/fa6";
import {useLocation} from "react-router";
export default function CoursesNavigation() {
        const { pathname } = useLocation();
        return (
            <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0 pe-2">
                    <Link to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
                          className={`list-group-item text-danger border border-0
                          ${pathname.includes("Home") ? "list-group-item active" : " "}`}>
                            Home
                    </Link>

                    <Link to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
                          className={`list-group-item text-danger border border-0
                          ${pathname.includes("Modules") ? "list-group-item active" : " "}`}>
                            Modules
                    </Link>

                    <Link to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
                          className={`list-group-item text-danger border border-0
                          ${pathname.includes("Piazza") ? "list-group-item active" : " "}`}>
                            Piazza
                    </Link>

                    <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
                          className={`list-group-item text-danger border border-0
                          ${pathname.includes("Zoom") ? "list-group-item active" : " "}`}>
                            Zoom
                    </Link>

                    <Link to="/Kanbas/Courses/1234/Assignments" id="wd-course-assignments-link"
                          className={`list-group-item text-danger border border-0
                          ${pathname.includes("Assignments") ? "list-group-item active" : " "}`}>
                            Assignments
                    </Link>

                    <Link to="/Kanbas/Courses/1234/Quizzes" id="wd-course-quizzes-link"
                          className={`list-group-item text-danger border border-0
                          ${pathname.includes("Quizzes") ? "list-group-item active" : " "}`}>
                            Quizzes
                    </Link>

                    <Link to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
                          className={`list-group-item text-danger border border-0
                          ${pathname.includes("People") ? "list-group-item active" : " "}`}>
                            People
                    </Link>

            </div>
        );}

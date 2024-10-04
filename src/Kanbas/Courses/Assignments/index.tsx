import {BsGripVertical} from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentPrefixButtons from "./AssignmentPrefixButtons";
import {IoEllipsisVertical} from "react-icons/io5";

export default function Assignments() {
    return (
        <div>
            <br/><AssignmentControls /><br/>
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment-list list-group-item p-0 mb-5 fs-5 border-custom">
                    <div className="wd-title p-3 ps-2 bg-secondary ">
                        <BsGripVertical className="me-2 fs-3"/>
                        Upcoming Assignments
                        <AssignmentControlButtons/>
                    </div>
                    <ul className="wd-assignment-list-item list-group rounded-0">
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1
                        completed-assignment-list-item">
                            <AssignmentPrefixButtons/>
                            <a className="wd-assignment-link link-dark link-underline-opacity-0"
                               href="#/Kanbas/Courses/1234/Assignments/123">
                                A1
                            </a>
                            <LessonControlButtons/> <br/>
                            <ul className="ms-4 text-wrap txt-caption ">
                                <span className="text-danger"> Multiple Modules </span>
                                | <span className="fw-bold"> Closed | Due </span>
                                Sep 24 at 11:59pm | 100/100 pts
                            </ul>
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1
                        completed-assignment-list-item">
                            <AssignmentPrefixButtons/>
                            <a className="wd-assignment-link link-dark link-underline-opacity-0"
                               href="#/Kanbas/Courses/1234/Assignments/123">
                                A2
                            </a>
                            <LessonControlButtons/>
                            <ul className="ms-4 text-wrap txt-caption">
                                <span className="text-danger"> Multiple Modules </span>
                                | <span className="fw-bold"> Due </span>
                                 Oct 8 at 11:59pm | -/100 pts
                            </ul>
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <AssignmentPrefixButtons/>
                            <a className="wd-assignment-link link-dark link-underline-opacity-0"
                               href="#/Kanbas/Courses/1234/Assignments/123">
                                A3
                            </a>
                            <IoEllipsisVertical className="fs-4 float-end" />
                            <ul className="ms-4 text-wrap txt-caption">
                                <span className="text-danger"> Multiple Modules </span>
                                | <span className="fw-bold"> Not Available Until </span>
                                Oct 9 at 11:59pm  |
                                <span className="fw-bold"> Due </span>
                                Oct 22 at 11:59pm | -/100 pts
                        </ul>
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <AssignmentPrefixButtons/>
                            <a className="wd-assignment-link link-dark link-underline-opacity-0"
                               href="#/Kanbas/Courses/1234/Assignments/123">
                                A4
                            </a>
                            <IoEllipsisVertical className="fs-4 float-end" />
                            <ul className="ms-4 text-wrap txt-caption">
                                <span className="text-danger"> Multiple Modules </span>
                                | <span className="fw-bold"> Not Available Until </span>
                                Oct 13 at 11:59pm  |
                                <span className="fw-bold"> Due </span>
                                Nov 5 at 11:59pm | -/100 pts
                            </ul>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>


    );
}

// k/courses/assignments/index.tsx
import { useParams } from "react-router";
import * as db from "../../Database";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentPrefixButtons from "./AssignmentPrefixButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import React from "react";
import { Link } from "react-router-dom";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;

    return (
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> Upcoming Assignments <AssignmentControlButtons />
            </div>

            <ul id="wd-assignments" className="list-group rounded-0">
                {assignments
                    .filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any) => (
                        <li className="wd-module list-group-item p-0 fs-5 border-gray" key={assignment._id}>
                            <div className="wd-assignment-list-item p-3 ps-2 wd-lesson">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div className="d-flex align-items-center">
                                        <AssignmentPrefixButtons />

                                        <Link
                                            to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                            className="text-decoration-none text-black"
                                        >
                                            <span className="ms-2 text-start">{assignment.title}</span>
                                        </Link>
                                    </div>
                                    <LessonControlButtons />
                                </div>

                                <ul className="ms-4 text-wrap txt-caption list-unstyled">
                                    <li>
                                        <span className="text-danger">{assignment.modules}</span> |{" "}
                                        <span className="fw-bold">Available:</span> {assignment.available} |{" "}
                                        <span className="fw-bold">Due:</span> {assignment.due} |{" "}
                                        <span className="fw-bold">{assignment.points} pts</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    ))}
            </ul>
        </li>
    );
}

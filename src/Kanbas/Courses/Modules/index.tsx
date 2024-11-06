import { useParams } from "react-router";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import React, { useState } from "react";
import ModulesControls from "./ModulesControls";
import { addModule, editModule, updateModule, deleteModule }
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();


    return (
        <ul id="wd-modules" className="list-group rounded-0">
            {currentUser.role === "FACULTY" && (
                <ModulesControls
                    moduleName={moduleName}
                    setModuleName={setModuleName}
                    addModule={() => {
                        dispatch(addModule({ name: moduleName, course: cid }));
                        setModuleName("");
                    }}
                />
            )}
            {modules
                .filter((module: any) => module.course === cid)
                .map((module: any) => (
                    <li key={module._id} className="wd-module list-group-item p-0 mb-2 fs-5 mt-4 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary ">
                            <BsGripVertical className="me-2 fs-3" />
                            {!module.editing && module.name}
                            {module.editing && currentUser.role === "FACULTY" && (
                                <input
                                    className="form-control w-50 d-inline-block"
                                    onChange={(e) =>
                                        dispatch(updateModule({ ...module, name: e.target.value }))
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            dispatch(updateModule({ ...module, editing: false }));
                                        }
                                    }}
                                    defaultValue={module.name}
                                />
                            )}
                            {currentUser.role === "FACULTY" && (
                                <ModuleControlButtons
                                    moduleId={module._id}
                                    deleteModule={(moduleId) => {
                                        dispatch(deleteModule(moduleId));
                                    }}
                                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                                />
                            )}
                        </div>
                        {module.lessons && (
                            <ul className="wd-lessons list-group rounded-0">
                                {module.lessons.map((lesson: any) => (
                                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                                        <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                                        {currentUser.role === "FACULTY" && <LessonControlButtons />}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
        </ul>
    );
}
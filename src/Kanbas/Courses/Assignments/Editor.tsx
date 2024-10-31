import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IoCalendarOutline} from "react-icons/io5";
import {useNavigate, useParams} from "react-router";
import { assignments } from "../../Database";
import {useDispatch} from "react-redux";
import {updateAssignment} from "./reducer";


export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = assignments.find((assignment) => assignment._id === aid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Initialize state with assignment values
    const [title, setTitle] = useState(assignment?.title || "");
    const [description, setDescription] = useState(assignment?.description || "");
    const [points, setPoints] = useState(assignment?.points || 0);
    const [due, setdue] = useState(assignment?.due || "");
    const [available, setavailable] = useState(assignment?.available || "");

    const handleSave = () => {
        dispatch(updateAssignment({
            _id: aid,
            title,
            description,
            points,
            due,
            available,
            course: cid
        }));

        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };



    return (
        <div className="container mt-4" id="wd-assignments-editor">
            <h2>Edit Assignment</h2>

            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input type="text" id="wd-name" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">Description</label>
                <textarea id="wd-description" className="form-control" rows={6} value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="mb-3">
                <label htmlFor="wd-points" className="form-label">Points</label>
                <input type="number" id="wd-points" className="form-control" value={points} onChange={(e) => setPoints(Number(e.target.value))} />
            </div>

            <div className="mb-3">
                <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                <input type="date" id="wd-due-date" className="form-control" value={due} onChange={(e) => setdue(e.target.value)} />
            </div>

            <div className="mb-3">
                <label htmlFor="wd-available-from" className="form-label">Available From</label>
                <input type="date" id="wd-available-from" className="form-control" value={available} onChange={(e) => setavailable(e.target.value)} />
            </div>

            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-secondary me-2" onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}>Cancel</button>
                <button className="btn btn-danger" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}
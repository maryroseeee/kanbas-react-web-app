import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SlMagnifier} from "react-icons/sl";
import {IoCalendarOutline} from "react-icons/io5";

export default function AssignmentEditor() {
    return (
        <div className="container mt-4" id="wd-assignments-editor">
            <h2>Edit Assignment</h2>

            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input type="text" id="wd-name" className="form-control" value="A2"/>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">Description</label>
                <textarea id="wd-description" className="form-control" rows={6}>
                    The assignment is available online Links to an external site.

                    Submit a link to the landing page of your Web application running on Netlify.

                    The landing page should include the following:

                    Your full name and section
                    Links to each of the lab assignments
                    Link to the Kanbas application
                    Links to all relevant source code repositories
                    The Kanbas application should include a link to navigate back to the landing page.
                </textarea>
            </div>

            <div className="mb-3">
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label id="wd-points" className="form-label">Points</label>
                        <input type="number" id="wd-points" className="form-control" value={100}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label id="wd-group" className="form-label">Assignment Group</label>
                        <select className="form-select">
                            <option value="ASSIGNMENTS">Assignments</option>
                            <option value="QUIZZES">Quizzes</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label id="wd-display-grade-as" className="form-label">Display Grade as</label>
                    <select className="form-select">
                        <option value="PERCENTAGE">Percentage</option>
                        <option value="LETTER">Letter</option>
                    </select>
                </div>
            </div>


            <div className="mb-3 border rounded p-3">
                <div className="col-md-6 mb-3">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                    <select className="form-select" id="wd-submission-type">
                        <option value="ONLINE">Online</option>
                        <option value="INPERSON">In Perso</option>
                    </select>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="wd-online-submission" className="form-label">Online Entry Options</label>
                        <div className="form-check" id="wd-online-submission">
                            <input className="form-check-input" type="radio" id="wd-text-entry"/>
                            <label className="form-check-label">
                                Text Entry
                            </label>
                        </div>
                        <div className="form-check" id="wd-online-submission">
                            <input className="form-check-input" type="radio" id="wd-online-submission"/>
                            <label className="form-check-label" id="wd-website-url">
                                Website URL
                            </label>
                        </div>
                        <div className="form-check" id="wd-online-submission">
                            <input className="form-check-input" type="radio" id="wd-online-submission"/>
                            <label className="form-check-label" id="wd-media-recordings">
                                Media Recordings
                            </label>
                        </div>
                        <div className="form-check" id="wd-online-submission">
                            <input className="form-check-input" type="radio" id="wd-online-submission"/>
                            <label className="form-check-label" id="wd-student-annotations">
                                Student Annotations
                            </label>
                        </div>
                        <div className="form-check" id="wd-online-submission">
                            <input className="form-check-input" type="radio" id="wd-online-submission"/>
                            <label className="form-check-label" id="wd-file-upload">
                                File Upload
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-5 border rounded p-3">

                <div className="col-md-6">
                    <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
                    <select id="wd-assign-to" className="form-control">
                        <option value="EVERYONE">Everyone</option>
                        <option value="GROUPS">Groups</option>
                    </select>
                </div>

                <div className="row mb-3 mt-3">
                    <div className="col-md-6">
                        <label htmlFor="wd-due-date" className="form-label">Due</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <IoCalendarOutline className="fs-4" />
                            </span>
                            <input type="date" id="wd-due-date" className="form-control" value="2024-05-13" />
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="wd-available-from" className="form-label">Available From</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <IoCalendarOutline className="fs-4" />
                            </span>
                            <input type="date" id="wd-available-from" className="form-control" value="2024-05-06" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="wd-available-until" className="form-label">Until</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <IoCalendarOutline className="fs-4" />
                            </span>
                            <input type="date" id="wd-available-until" className="form-control" value="2024-05-30" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-secondary me-2">Cancel</button>
                <button className="btn btn-danger">Save</button>
            </div>
        </div>
    );
}

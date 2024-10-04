import {Link} from "react-router-dom";
import React from "react";
import {IoCalendarOutline} from "react-icons/io5";

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <input id="wd-username" value="alice" placeholder="username" className="form-control mb-2"/>
            <input id="wd-password" value="123" placeholder="password"
                   type="password" className="form-control mb-2"/>
            <input id="wd-firstname" value="Alice" placeholder="First Name" className="form-control mb-2"/>
            <input id="wd-lastname" value="Wonderland" placeholder="Last Name" className="form-control mb-2"/>
            <div className="input-group">
                        <span className="input-group-text mb-2">
                            <IoCalendarOutline className="fs-4 "/>
                        </span>
                <input id="wd-dob" value="2000-01-01" placeholder="mm/dd/yyyy" className="form-control mb-2"/>
            </div>
            <input id="wd-email" value="alice@wonderland" type="email" className="form-control mb-2"/>
            <select id="wd-role" className="form-select mb-2">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>

            <button className="btn btn-danger">Sign out</button>
        </div>

    );
}

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

            <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of your project.
      </textarea><br />

            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">Assignments</option>
                            <option value="QUIZZES">Quizzes</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="LETTER">Letter</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="ONLINE">Online</option>
                            <option value="INPERSON">In Person</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-online-submission">Online Entry Options</label>
                    </td>
                    <td>
                        <select id="wd-online-submission">
                            <option id="wd-text-entry">Text Entry</option>
                            <option value="wd-website-url">Website URL</option>
                            <option selected value="wd-media-recordings">
                                Media Recordings</option>
                            <option value="wd-student-annotation">Student Annotations</option>
                            <option value="wd-file-upload">File Upload</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign To</label>
                    </td>
                    <td>
                        <select id="wd-assign-to">
                            <option value="EVERYONE">Everyone</option>
                            <option value="GROUPS">Groups</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due </label>
                    </td>
                    <td>
                        <input type="date"
                               id="wd-due-date"
                               value="05-13-24"/>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from">Available From</label>
                    </td>
                    <td>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <input type="date" id="wd-available-from" value="2024-05-06" />
                            <label htmlFor="wd-available-until">Until</label>
                            <input type="date" id="wd-available-until" value="2024-05-30" />
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

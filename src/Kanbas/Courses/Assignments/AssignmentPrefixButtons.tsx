import {BsGripVertical, BsPlus} from "react-icons/bs";
import {MdOutlineAssignment} from "react-icons/md";

export default function AssignmentPrefixButtons() {
    return (
        <div>
            <BsGripVertical className="float-start fs-3"/>
            <MdOutlineAssignment className="float-start btn-assignment me-2 fs-3"/>
        </div>
    );
}
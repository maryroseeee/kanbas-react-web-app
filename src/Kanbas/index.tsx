import Dashboard from "./Dashboard";
import {Navigate, Route, Routes} from "react-router";
import Courses from "./Courses";
import "./styles.css";
import KanbasNavigation from "./Navigation";
import {useEffect, useState} from "react";
import * as client from "./Courses/client";
import store from "./store";
import {Provider} from "react-redux";

export default function Kanbas() {

    const [courses, setCourses] = useState<any[]>([]);

    const fetchCourses = async () => {
        const courses = await client.fetchAllCourses();
        setCourses(courses);
    };
    useEffect(() => {
        fetchCourses();
    }, []);


    const [course, setCourse] = useState<any>({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "reactjs.png",
        description: "New Description"
    });

    const addNewCourse = async() => {
        const newCourse = await client.createCourse(course);
        setCourses([...courses, newCourse]);
    };

    const deleteCourse = async(_id: string) =>{
        await client.deleteCourse(_id);
        const newCourses = courses.filter(course => course._id !== _id);
        setCourses(newCourses);
    };

    const updateCourse = async() => {
        await client.updateCourse(course);
        setCourses(courses.map((c) => {
            if (c._id === course._id) {
                return course;
            } else {
                return c;
            }
        }));
    };

    return (<Provider store={store}>
        <div id="wd-kanbas" className="h-100">
            <div className="d-flex h-100">
                <div className="d-none d-md-block bg-black wd-width-110px h-100">
                    <KanbasNavigation/>
                </div>
                <div className="flex-fill p-4">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard"/>}/>
                        <Route path="Account" element={<h1>Account</h1>}/>
                        <Route path="Dashboard"
                               element={<Dashboard courses={courses} course={course} setCourse={setCourse}
                                                   addNewCourse={addNewCourse} deleteCourse={deleteCourse}
                                                   updateCourse={updateCourse}/>}/>
                        <Route path="Courses/:cid/*" element={<Courses courses={courses}/>}/>
                        <Route path="Calendar" element={<h1>Calendar</h1>}/>
                        <Route path="Inbox" element={<h1>Inbox</h1>}/>
                    </Routes>
                </div>
            </div>
        </div>
    </Provider>);
}
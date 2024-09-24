import { Link } from "react-router-dom";
import "./styles.css";

const courses = [
    { id: "1234", title: "CS1234 React JS", description: "Full Stack software developer", image: "/images/reactjs.jpg" },
    { id: "2345", title: "CS2345 Algorithms", description: "Algorithms and Data Structure", image: "/images/algorithms.jpg" },
    { id: "3456", title: "CS3456 Computer Systems", description: "Introduction to Computer Systems", image: "/images/systems.jpg" },
    { id: "4567", title: "CS4567 OOD", description: "Object Oriented Design", image: "/images/ood.jpg" },
    { id: "5678", title: "CS5678 Web Development", description: "Fundamentals of Web Development", image: "/images/webdev.jpg" },
    { id: "6789", title: "CS6789 Machine Learning", description: "Introduction to Machine Learning", image: "/images/ml.jpg" },
    { id: "7890", title: "CS7890 Software Engineering", description: "Software Engineering Concepts", image: "/images/se.jpg" },
];


export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map(course => (
                        <div key={course.id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                      to={`/Kanbas/Courses/1234/Home`}>
                                    <img src={course.image} width="100%" height={160}/>
                                    <div className="card-body" style={{ height: "160px" }}>
                                        <h5 className="wd-dashboard-course-title card-title">{course.title}</h5>
                                        <p className="wd-dashboard-course-text card-text">{course.description}</p>
                                        <button className="btn btn-primary">Go</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
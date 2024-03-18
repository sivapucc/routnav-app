import { Card } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import datas from "../Data/Data";
import { useState } from "react";
function Displaycourses({ course }) {
  return (
    <div className="disp">
      {course.map((ele, idx) => (
        <Card style={{ width: "18rem" }} className="cards" key={idx}>
          <Card.Img variant="top" src={ele.imgurl} />
          <Card.Body>
            <Card.Text>{ele.title}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

function Courses() {
  const [course, setCourse] = useState(datas);
  const handleEve = (e) => {
    console.log(e.target.text);
    if (e.target.text === "FULL STACK DEVELOPMENT") {
      const filterCourse = datas.filter((ele) => ele.stream === "full-stack");
      setCourse(filterCourse);
    } else if (e.target.text === "DATA SCIENCE") {
      const filterCourse = datas.filter((ele) => ele.stream === "data-science");
      setCourse(filterCourse);
    } else if (e.target.text === "CYBER SECURITY") {
      const filterCourse = datas.filter(
        (ele) => ele.stream === "cyber-security"
      );
      setCourse(filterCourse);
    } else if (e.target.text === "DEVOPS") {
      const filterCourse = datas.filter((ele) => ele.stream === "devops");
      setCourse(filterCourse);
    } else {
      setCourse(datas);
    }
  };
  return (
    <div className="display-container">
      <header>
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="#" onClick={handleEve}>
              ALL
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={handleEve}>
              FULL STACK DEVELOPMENT
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={handleEve}>
              DATA SCIENCE
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" onClick={handleEve}>
              CYBER SECURITY
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4" onClick={handleEve}>
              DEVOPS
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      <main>
        <Displaycourses course={course} />
      </main>
    </div>
  );
}
export default Courses;

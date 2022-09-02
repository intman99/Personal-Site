import React from "react";
import KeeperFoto from "../images/KeeperAppTest.jpg";
import ToDoList from "../images/ToDoList.jpg";
import Website from "../images/fotoDavid.JPG";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectsCards() {
  return (
    <div className="project_container">
      <Container>
        <Row>
          <Col>
            <div className="project">
              <div>
                <a href="https://google.com">
                  <img
                    className="project_image hover_project"
                    src={KeeperFoto}
                    alt="Keeper App"
                  />
                </a>
              </div>
              <div className="project_text"></div>
              <strong>Keeper App</strong>
              <br />
              Using React, HTML, CSS, Javascript
            </div>
          </Col>
          <Col>
            <div className="project">
              <div>
                <img
                  className="project_image hover_project"
                  src={Website}
                  alt="This Website"
                />
              </div>
              <div className="project_text"></div>
              <strong>Website</strong>
              <br />
              Using React, HTML, CSS, Bootstrap, Javascript
            </div>
          </Col>
          <Col>
            <div className="project">
              <div>
                <a href="https://still-sierra-29819.herokuapp.com/">
                  <img
                    className="project_image hover_project"
                    src={ToDoList}
                    alt="ToDo List Project"
                  />
                </a>
              </div>
              <div className="project_text"></div>
              <strong>ToDo List</strong>
              <br />
              Using HTML, CSS, Javascript, Bootstrap, NodeJs, Express
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectsCards;

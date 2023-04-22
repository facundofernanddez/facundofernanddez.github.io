import { Link } from "react-router-dom";

export const Projects = () => {
  const projects = [
    {
      title: "ToDo List",
      image: "todolist",
      overview: "Simple ToDo List made with React.js.",
      tech: "Javascript, React.js, HTML, CSS",
      finished: true,
      code: "https://github.com/facundofernanddez/react-app-tareas",
      deploy: "https://facundofernanddez.github.io/react-app-tareas/",
    },
    {
      title: "API REST JAVA",
      image: "javaapi",
      overview: "API REST Back-End project || Users Management (CRUD)",
      tech: "Java, Spring, MySQL, Postman",
      finished: true,
      code: "https://github.com/facundofernanddez/Java-API",
      deploy: "https://github.com/facundofernanddez/Java-API",
    },
    {
      title: "CRUD App",
      image: "usermanagement",
      overview:
        "RESTful app || CRUD User management || Login-Register and check email functionality. Code front: https://github.com/facundofernanddez/react-java-crud-app",
      tech: "JavaScript, React.js, Java, Spring Framework, Spring Security, MySQL",
      finished: false,
      code: "https://github.com/facundofernanddez/react-java-crud-app-backend",
      deploy: "",
    },
    {
      title: "Movies App",
      image: "moviesapp",
      overview:
        "Movie app made with React.js provided by the Alkemy Challenge. With consumption of The Movie DB API and functionalities such as consulting, searching and saving to favorites.",
      tech: "JavaScript, React.js, Bootstrap",
      finished: false,
      code: "https://github.com/facundofernanddez/alkemi-challenge-react",
      deploy: "",
    },
    {
      title: "Chocho's Burgers",
      image: "chochos-burger",
      overview:
        "E-Commerce || Login-Register and check email functionality || Consumption Back-End API Rest JAVA || Code front: https://github.com/facundofernanddez/e-commerce-front",
      tech: " React.js/Redux Toolkit, Bootstrap, JAVA, Spring Boot, MySQL, Postman",
      finished: false,
      code: "https://github.com/facundofernanddez/e-commerce-back",
      deploy: "",
    },
  ];

  return (
    <>
      <div className="row">
        {projects.map((oneProject, index) => {
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-2"
              key={index}
            >
              <div className="card">
                <img
                  src={require("../images/" + oneProject.image + ".png")}
                  className="card-img-top w-100 p-1 rounded shadow"
                  alt="..."
                  style={{ width: "18rem", height: "18rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{oneProject.title}</h5>
                  <p className="card-text text-secondary">
                    {oneProject.overview} <br /> <strong>Tech: </strong>
                    {oneProject.tech}
                  </p>
                  <Link
                    to={oneProject.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-outline-dark fw-bolder m-1">
                      Code
                    </button>
                  </Link>
                  <button
                    className={`btn btn-outline-info fw-bolder m-1 ${
                      !oneProject.finished ? "disabled" : ""
                    }`}
                  >
                    <Link
                      to={oneProject.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deploy
                    </Link>
                  </button>
                  <br />
                  <br />
                  <small
                    className={`badge bg-${
                      oneProject.finished ? "success" : "warning"
                    }`}
                  >
                    {oneProject.finished ? "Finished" : "In progress"}
                  </small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

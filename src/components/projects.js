export const Projects = () => {
  const projects = [
    {
      title: "ToDo List",
      image: "todolist",
      overview: "Simple ToDo List made with ReactJS.",
      tech: "ReactJS, HTML, CSS",
      finished: true,
    },
    {
      title: "my project 2",
      image: "calculadora",
      overview: "description of project 2",
      tech: "",
      finished: false,
    },
    {
      title: "my project 2",
      image: "contador-clics",
      overview: "description of project 2",
      tech: "",
      finished: false,
    },
    // {
    //   title: "my project 2",
    //   // image: "",
    //   overview: "description of project 2",
    //   tech: "",
    //   finished: false,
    // },
    // {
    //   title: "my project 2",
    //   // image: "",
    //   overview: "description of project 2",
    //   tech: "",
    //   finished: false,
    // },
  ];

  return (
    <>
      <div className="row">
        {projects.map((oneProject, index) => {
          return (
            <div className="col-sm-6 col-md-4" key={index}>
              <div className="card">
                <img
                  src={require("../images/" + oneProject.image + ".png")}
                  className="card-img-top w-100 w-md75"
                  alt="..."
                  style={{ width: "18rem", height: "18rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{oneProject.title}</h5>
                  <p className="card-text text-secondary">
                    {oneProject.overview} <br /> <strong>Tech: </strong>
                    {oneProject.tech}
                  </p>
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

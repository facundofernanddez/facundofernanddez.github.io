import calculadora from "../images/calculadora.png";

export const Projects = () => {
  const projects = [
    {
      title: "my project 1",
      image: "https://i.ytimg.com/vi/Q7bbdJpiLRs/maxresdefault.jpg",
      overview: "description of project 1",
    },
    {
      title: "my project 2",
      image:
        "https://www.lasirena.la/__export/1529782056181/sites/debate/img/2018/02/09/gatos_crop1513745237964_crop1516831635779_crop1518189988779.jpg_242310155.jpg",
      overview: "description of project 2",
    },
    {
      title: "my project 2",
      image:
        "https://www.bunko.pet/__export/1619479458417/sites/debate/img/2021/04/26/curiosidades_de_los_gatos_crop1619478790261.jpg_1532751094.jpg",
      overview: "description of project 2",
    },
    {
      title: "my project 2",
      image:
        "https://3.bp.blogspot.com/-WoMyw3HPzyE/V1em-csdnBI/AAAAAAAAAuQ/sNe05qdDa7wyaloRJmfWTjj8Sg9UEVd5ACKgB/s1600/cat-1046544_1920.jpg",
      overview: "description of project 2",
    },
    {
      title: "my project 2",
      image: "https://i.ytimg.com/vi/Hlz7ass3gRk/maxresdefault.jpg",
      overview: "description of project 2",
    },
  ];

  return (
    <>
      <div className="row">
        {projects.map((oneProject, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="card">
                <img src={oneProject.image} className="card-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{oneProject.title}</h5>
                  <p className="card-text">{oneProject.overview}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

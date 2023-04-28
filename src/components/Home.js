import profile from "../images/profile.jpg";

export const Home = () => {
  return (
    <div className="card">
      <div className="row align-items-center">
        <div className="col-md-4">
          <img src={profile} className="card-img rounded" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title text-center rounded shadow p-2">
              I'm Facundo 👋🏽 <br />
              <p className="text-secondary">Full-Stack Developer</p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

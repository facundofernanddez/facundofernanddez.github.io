import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="card">
      <div className="row">
        <div className="col-4">
          <img
            src="https://res.cloudinary.com/jerrick/image/upload/c_scale,q_auto/5e4b8a9e183ebe001d061014.jpg"
            className="card-img"
            alt="..."
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">
              I'm Facundo Fernandez 👋🏽 <br />
              <br /> Full-Stack Developer
            </h5>
            <p className="card-text">⚠ Portfolio under construction ⚠</p>
          </div>
        </div>
      </div>
    </div>
  );
};

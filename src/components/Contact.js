export const Contact = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-title">Mis redes sociales</div>
          </div>
        </div>
        <div className="col-6">
          <form className="card">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
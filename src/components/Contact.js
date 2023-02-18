import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Modal } from "react-bootstrap";

export const Contact = () => {
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoadingButton, setIsLoadingButton] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", name: "", subject: "", body: "" },
  });

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleClickLoadingButton = () => {
    setIsLoadingButton(true);
  };

  const sendEmail = (data, e) => {
    emailjs
      .sendForm(
        "service_4wfoi9b",
        "template_qrqfy1t",
        e.target,
        "la0ABiBfzqc5IgF-R"
      )
      .then(
        (response) => {
          setMessage(
            "Thank you, I've received your message and I'll be contacting you soon! 😁"
          );
          reset();
          setIsLoadingButton(false);
          setShowModal(true);
        },
        (error) => {
          setMessage(
            "An unexpected error has occurred 😱, please try again in a few minutes"
          );
          reset();
          setIsLoadingButton(false);
          setShowModal(true);
        }
      );
  };

  return (
    <>
      <form className="card p-2 p-md-5" onSubmit={handleSubmit(sendEmail)}>
        <h1 className="card-title">Contact me!</h1>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              name="email"
              value={watch("email")}
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter a valid email",
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            <span className="text-danger" role="alert">
              {errors?.email?.message}
            </span>
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              name="name"
              value={watch("name")}
              {...register("name", {
                required: {
                  value: true,
                  message: "Please enter a valid name",
                },
              })}
            />
            <span className="text-danger" role="alert">
              {errors?.name?.message}
            </span>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Subject"
            name="subject"
            value={watch("subject")}
            {...register("subject", {
              required: {
                value: true,
                message: "Please enter a valid subject",
              },
            })}
          />
          <span className="text-danger" role="alert">
            {errors?.subject?.message}
          </span>
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="body"
            rows="10"
            placeholder="Message"
            name="body"
            value={watch("body")}
            {...register("body", {
              required: {
                value: true,
                message: "Please enter a valid message",
              },
            })}
          ></textarea>
          <span className="text-danger" role="alert">
            {errors?.body?.message}
          </span>
        </div>
        <button
          className={`btn btn-primary ${isLoadingButton ? "disabled" : ""}`}
          type="submit"
          onClick={!isLoadingButton ? handleClickLoadingButton : null}
        >
          {isLoadingButton ? "Loading..." : "Send Message"}
        </button>

        {/* MODAL */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>

          <Modal.Body closeButton>
            <p>{message}</p>
          </Modal.Body>
        </Modal>
      </form>
    </>
  );
};

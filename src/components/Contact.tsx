import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";

const Contact = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const validateForm = () => {
    const errors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!form.current?.user_name.value) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!form.current?.user_email.value) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.current?.user_email.value)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!form.current?.message.value) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true); // Start loading

    if (form.current) {
      emailjs
        .sendForm(
          "service_mrs2gmr",
          "template_6skq7dq",
          form.current,
          "2vAafyWokU5vCYmE9"
        )
        .then(
          (result) => {
            setSnackbarMessage("Message sent successfully!");
            setSnackbarSeverity("success");
            setSnackbarOpen(true);
            setIsLoading(false); // Stop loading
          },
          (error) => {
            setSnackbarMessage("Failed to send message. Please try again.");
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
            setIsLoading(false); // Stop loading
          }
        );
    }
  };

  const clickHandler = () => {
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 500);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-cont">
        <div data-aos="fade-up" className="contc-child1">
          <h1>Get in touch</h1>
          <h3>Turn your Ideas into Digital Reality </h3>
          <h4>
            Got a question? or need assistance with development? Or do you just
            want to say hello? Feel free to reach out.
          </h4>
          <hr />
        </div>
        <div className="contc-child2">
          <div data-aos="fade-right" className="contc-info-cont">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">
              <p className="contc-info">
                Lideta Subcity, Addis Ababa, Ethiopia.
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="contc-info-cont phone-cont">
            <i className="fa-solid fa-phone-volume"></i>
            <div>
              <p className="contc-info phone">+251 902250378</p>
              <p className="contc-info phone">+251 913645440</p>
            </div>
          </div>
          <div data-aos="fade-right" className="contc-info-cont email-cont">
            <i className="fa-regular fa-envelope"></i>
            <div className="email">
              <p className="contc-info">dagmfre@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contc-child3">
          <div>
            <Box
              ref={form}
              onSubmit={sendEmail}
              className="box"
              component="form"
              sx={{
                color: "blue",
                "& .MuiInputBase-root": {
                  color: "#a6afcc",
                  borderBottom: "2px solid #8892B0",
                  backgroundColor: "rgb(40 58 78 / 24%)",
                  "&:hover": {
                    "&::before": {
                      borderBottom: "1px solid white !important",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d7dae4",
                      borderWidth: "1px",
                    },
                    "& .MuiInputBase-root": {
                      backgroundColor: "rgb(40 58 78 / 24%)",
                    },
                  },
                },
                "& .MuiFormLabel-root": {
                  color: "#8892B0",
                },
                "& .Mui-focused": {
                  color: "#a6afcc",
                  borderBottom: "0px solid",
                },
                "& .Mui-focused.MuiFormLabel-root": {
                  color: "#8892B0 !important",
                },
                "& .MuiInput-root:after": {
                  borderBottomColor: "#90CAF9",
                },
                "& .MuiOutlinedInput-root": {
                  color: "#a6afcc",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#8892B0",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="textfield-cont">
                <TextField
                  data-aos="fade-right"
                  id="filled-basic"
                  variant="filled"
                  label="Your Name"
                  type="text"
                  name="user_name"
                  error={!!formErrors.name}
                  helperText={formErrors.name}
                />
                <TextField
                  data-aos="fade-right"
                  id="filled-basic"
                  label="Your Email"
                  variant="filled"
                  type="email"
                  name="user_email"
                  error={!!formErrors.email}
                  helperText={formErrors.email}
                />
              </div>
              <TextField
                data-aos="fade-right"
                className="textarea"
                id="outlined-multiline-flexible"
                label="Your Message"
                multiline
                rows={3}
                name="message"
                defaultValue="Hi, we need a developer to design and develop a site with payment gateways. How soon can u hop on a call to discuss the project details?"
                error={!!formErrors.message}
                helperText={formErrors.message}
              />
              <button
                type="submit"
                data-aos="fade-right"
                className="getin-cont2"
                disabled={isLoading} // Disable button while sending
              >
                <div
                  onClick={clickHandler}
                  className={`getin-front getin-front2`}
                >
                  {isLoading ? (
                    <CircularProgress size={24} sx={{ color: "white" }} /> // Show spinner
                  ) : (
                    <>
                      <p
                        className={`${isButtonClicked ? "left-right" : ""}`}
                      >
                        Send Message
                      </p>
                      <img
                        className={`${isButtonClicked ? "left-right" : ""}`}
                        src="arrow.png"
                        alt=""
                      />
                    </>
                  )}
                </div>
                <div className="getin-back2"></div>
              </button>
            </Box>
          </div>
          <div data-aos="fade-up" className="gmap-cont">
            <h3>My location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7881.119769507889!2d38.7312243687866!3d9.012581608815749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1698219230097!5m2!1sen!2set"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="gmap"
            ></iframe>{" "}
          </div>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;

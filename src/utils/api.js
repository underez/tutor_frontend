import axios from "axios";

const sendConfirmationEmail = async (email) => {
  try {
    await axios.post("https://tutor-backend-uyeb.onrender.com/api/send-email", {
      email,
    });
    console.log("Confirmation email sent successfully!");
  } catch (error) {
    console.error("Error sending confirmation email:", error);
  }
};

export { sendConfirmationEmail };

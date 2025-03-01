import Footer from "../Footer/footer";
import { useState } from "react";
import axios from "axios";

export default function Message() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMsg, setResponseMsg] = useState(null); // Store response message

  function handleClick(e) {
    e.preventDefault(); 

    const data = {
      email,
      message,
    };

    //  POST request 
    axios
      .post(`${process.env.REACT_APP_API_URL}`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log("Message Sent:", response.data);
        setResponseMsg("Got your Message! I will reach out to you soon via email 🙌");
        // Clear  after sending
    setEmail("");
    setMessage("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setResponseMsg("Failed to send message. Please try again.");
      });

    
  }

  return (
    <>
      <div className="outer-message">
        <div className="send-message">
          <form>
            <h1>Send me a message personally</h1>

            <input
              type="email"
              placeholder="Your Email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="How can I help?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button onClick={handleClick} disabled={!email || !message}>
              Send
            </button>
          </form>

          {/* Display response message */}
          {responseMsg && <p className="response-message">{responseMsg}</p>}
        </div>

        <h2>or</h2>
      </div>

      <Footer />
    </>
  );
}

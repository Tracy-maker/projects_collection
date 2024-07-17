// pages/ContactMe.tsx

import { useEffect, useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import useAlert from "../hooks/useAlert";
import Alert, { AlertProps } from "../components/Alert";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactMe: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Yingxin",
          from_email: form.email,
          to_email: "Yingxin@outlook.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(
        (response: EmailJSResponseStatus) => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({ name: "", email: "", message: "" });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  useEffect(() => {
    // Code inside useEffect will run client-side
    // This ensures components using hooks like useState, useRef are executed on the client
  }, []);

  return (
    <div className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert as AlertProps} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Contact Me</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              className="input"
              onChange={handleChange}
              placeholder="Please enter your name..."
              required
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              value={form.email}
              name="email"
              className="input"
              onChange={handleChange}
              placeholder="Please enter your email address..."
              required
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              required
              className="textarea"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your thoughts here..."
            />
          </label>

          <button
            type="submit"
            className="rounded-lg text-sm w-full sm:w-auto px-5 py-4 text-center text-white bg-blue-900"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;

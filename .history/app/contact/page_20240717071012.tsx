"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const ContactMe = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kevin",
          from_email: form.email,
          to_email: "sunyeang.chew@outlook.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert();
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

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Contact Me
        </h1>
      </div>

      <div className="container mx-auto p-8">
        {alert.show && <Alert {...alert} />}

        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-lg">
          <div className="md:flex">
            <div className="w-full p-4 px-6 py-10">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1 font-semibold">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                    placeholder="Please enter your name..."
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    name="email"
                    className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                    placeholder="Please enter your email address..."
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold">Your Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your thoughts here..."
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition duration-300"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

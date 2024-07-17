"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const ContactMe = () => {
  const formRef = useRef<HTMLFormElement>(null); // 显式指定 useRef 的泛型类型为 HTMLFormElement
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { // 显式指定 handleChange 函数参数 e 的类型为 React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // 显式指定 handleSubmit 函数参数 e 的类型为 React.FormEvent<HTMLFormElement>
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Kevin",
          from_email: form.email,
          to_email: "sunyeang.chew@outlook.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
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
    <div className="container mx-auto px-4 py-8">
      {alert.show && <Alert {...alert} />}

      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your thoughts here..."
              />
            </div>
            <div>
              <button
                type="submit"
                className={`w-full py-2 px-4 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

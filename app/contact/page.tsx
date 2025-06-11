"use client";

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending message...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });

    if (res.ok) {
      setStatus("Message sent!");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 space-y-6 max-w-md w-full border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Contact me
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Have a question or want to work together? Fill out the form below and
          I&apos;ll get back to you as soon as possible!
        </p>
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-4 py-3 rounded-lg shadow hover:from-blue-600 hover:to-purple-600 transition"
        >
          Envoyer
        </button>
        {status && (
          <p
            className={`text-center text-sm mt-2 ${
              status === "Message sent!"
                ? "text-green-600"
                : status === "Sending message..."
                ? "text-orange-500"
                : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
}

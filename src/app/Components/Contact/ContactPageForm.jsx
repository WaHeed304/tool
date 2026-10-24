"use client";
import { useState } from "react";

export default function ContactPageForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form className="bz-contact-form" onSubmit={handleSubmit}>
      <div className="bz-form-row">
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label htmlFor="subject">
        Subject
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="How can we help?"
        />
      </label>
      <label htmlFor="message">
        Message
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your plan or support question…"
        />
      </label>
      <button type="submit" className="bz-btn bz-btn-orange">
        Send Message <i className="bi bi-arrow-right"></i>
      </button>
      {sent && (
        <p className="bz-form-success" role="status">
          Thanks — for the fastest reply, also email{" "}
          <a href="mailto:admin@groupbuyseotool.us">admin@groupbuyseotool.us</a>{" "}
          or message us on WhatsApp.
        </p>
      )}
    </form>
  );
}

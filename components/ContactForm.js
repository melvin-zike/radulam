"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", text: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending", text: "Sending…" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Request failed");
      form.reset();
      setStatus({ state: "ok", text: `Thanks, ${data.name}. We’ve got your enquiry and will email you soon.` });
    } catch (err) {
      setStatus({ state: "err", text: "That didn’t send. Check your details and try again, or email us directly." });
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <label>Your name<input name="name" required autoComplete="name" /></label>
        <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <div className="row">
        <label>What do you need?
          <select name="type" required defaultValue="">
            <option value="" disabled>Choose one</option>
            <option>Website</option>
            <option>Mobile app</option>
            <option>Web app</option>
            <option>Redesign of something existing</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>Your budget<input name="budget" placeholder="e.g. ₦000" required /></label>
      </div>
      <label>Describe your app or website
        <small>What should it do, and who will use it?</small>
        <textarea name="details" required />
      </label>
      {/* Hidden field to catch simple spam bots */}
      <input name="company" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
      <button className="btn" type="submit" disabled={status.state === "sending"}>Send enquiry</button>
      <p id="msg" className={status.state} role="status" aria-live="polite">{status.text}</p>
    </form>
  );
}

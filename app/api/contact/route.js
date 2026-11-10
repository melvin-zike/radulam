import { NextResponse } from "next/server";

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export async function POST(req) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Bad request" }, { status: 400 });

  // Honeypot: bots fill this in, people never see it.
  if (body.company) return NextResponse.json({ ok: true });

  const { name, email, type, budget, details } = body;
  if (!name || !email || !type || !budget || !details) {
    return NextResponse.json({ error: "Please fill in every field." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    return NextResponse.json({ error: "Email isn’t set up on the server yet." }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Studio Site <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `New project enquiry from ${name}`,
      html: `<h2>New enquiry</h2>
        <p><b>Name:</b> ${esc(name)}<br><b>Email:</b> ${esc(email)}<br><b>Needs:</b> ${esc(type)}<br><b>Budget:</b> ${esc(budget)}</p>
        <p><b>Project description:</b></p><p>${esc(details).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!res.ok) return NextResponse.json({ error: "Could not send email." }, { status: 502 });
  return NextResponse.json({ ok: true });
}

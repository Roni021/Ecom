import nodemailer from "nodemailer";

const TO_EMAIL = "wowarij@gmail.com";


function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing env var: ${name}`);
  }
  return value;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      subject,
      message,
    }: {
      firstName?: string;
      lastName?: string;
      email?: string;
      subject?: string;
      message?: string;
    } = body ?? {};

    if (!firstName || !lastName || !email || !subject || !message) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const gmailUser = getRequiredEnv("GMAIL_USER");
    const gmailPass = getRequiredEnv("GMAIL_PASS");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: gmailUser,
      to: TO_EMAIL,
      subject: subject,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n"),
      html: `
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <hr/>
        <p>${String(message).replaceAll("\n", "<br/>")}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact send error:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}


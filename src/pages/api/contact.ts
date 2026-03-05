import { Resend } from "resend";
import type { APIRoute } from "astro";

export const prerender = false;

type ContactPayload = {
    name?: string;
    email?: string;
    budget?: string;
    message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = (await request.json()) as ContactPayload;
        const name = body.name?.toString().trim() ?? "";
        const email = body.email?.toString().trim() ?? "";
        const message = body.message?.toString().trim() ?? "";

        if (!name || !email || !message || !EMAIL_REGEX.test(email)) {
            return new Response(JSON.stringify({ error: "Invalid form input." }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const resendApiKey = import.meta.env.RESEND_API_KEY;
        const toEmail = import.meta.env.CONTACT_TO_EMAIL;
        const fromEmail = import.meta.env.CONTACT_FROM_EMAIL;

        if (!resendApiKey || !toEmail || !fromEmail) {
            return new Response(JSON.stringify({ error: "Missing email configuration." }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }

        const resend = new Resend(resendApiKey);

        const emailContent = [
            `New message from your portfolio contact form`,
            ``,
            `Name: ${name}`,
            `Email: ${email}`,
            ``,
            `Message:`,
            message,
        ].join("\n");

        const result = await resend.emails.send({
            from: fromEmail,
            to: [toEmail],
            replyTo: email,
            subject: `New contact form message from ${name}`,
            text: emailContent,
        });

        if (result.error) {
            return new Response(JSON.stringify({ error: "Email provider failed request." }), {
                status: 502,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch {
        return new Response(JSON.stringify({ error: "Invalid request body." }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }
};
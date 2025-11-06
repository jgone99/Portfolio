import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
    if (req.method !== 'POST') 
        return res.status(405).end()

    const { name, email, subject, message } = req.body

    try {
        const data = await resend.emails.send({
            from: 'Portfolio Website Contact <onboarding@resend.dev>',
            to: process.env.MY_EMAIL,
            subject: subject || 'New Contact From Message',
            html: `
            <h2>New message from ${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p>${message}</p>
            `,
        })

        res.status(200).json({ success: true, data })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
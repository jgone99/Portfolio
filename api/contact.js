import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
    if (req.method !== 'POST') 
        return res.status(405).end()

    const { name, email, subject, message } = req.body

    try {
        await resend.emalis.send({
            
        })
    } catch (err) {
        
    }
}
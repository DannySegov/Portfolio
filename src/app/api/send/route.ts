import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { subject, to_name, to_email, message } = body;
    
    console.log('Form data received:', {
      subject,
      to_name,
      to_email,
      message
    });

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'carolinasegoviano98@gmail.com',
      subject: subject,
      text: `Mensaje de: ${to_name}
      Email: ${to_email}
  
      ${message}`
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
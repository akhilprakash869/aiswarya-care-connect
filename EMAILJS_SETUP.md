# 📧 EmailJS Setup Guide for Dr. Aiswarya's Portfolio

This guide will help you set up email notifications for the consultation form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email account
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Templates

### Template 1: Patient Confirmation Email

1. Go to **Email Templates** → **Create New Template**
2. Template Name: `Patient Consultation Confirmation`
3. Use this template:

```
Subject: Thank you for contacting Dr. Aiswarya Anilkumar, MBBS

Dear {{to_name}},

Thank you for reaching out! Your health concern has been received and will be reviewed personally by Dr. Aiswarya Anilkumar.

{{message}}

Dr. Aiswarya will respond to your query within 24-48 hours via email or phone.

Your message remains completely private and confidential.

Warm regards,
Dr. Aiswarya Anilkumar, MBBS
ESI Medical College, Coimbatore

Email: draiswaryata0108@gmail.com
Phone/WhatsApp: +91 95441 27501
```

4. Copy the **Template ID**

### Template 2: Doctor Notification Email

1. Create another new template
2. Template Name: `Doctor Consultation Notification`
3. Use this template:

```
Subject: New Consultation Request from {{patient_name}}

New consultation request received on {{submission_date}}

Patient Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: {{patient_name}}
Email: {{patient_email}}
Phone: {{patient_phone}}

Health Concern / Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{patient_message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated notification from your portfolio website.
Reply directly to {{patient_email}} to respond to the patient.
```

4. Copy the **Template ID**

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it

## Step 5: Configure Environment Variables

1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_PATIENT_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_DOCTOR_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. **IMPORTANT**: Add `.env` to your `.gitignore` file (it should already be there)
4. Restart your development server

## Step 6: Test the Form

1. Open your website
2. Fill out the consultation form
3. Submit it
4. Check:
   - Patient should receive a confirmation email
   - Doctor (draiswaryata0108@gmail.com) should receive a notification
   - Both emails should arrive within seconds

## Troubleshooting

### Emails not sending?

1. **Check EmailJS Dashboard**
   - Go to **Email History** to see if requests are being received
   - Check for error messages

2. **Verify Email Service**
   - Make sure your email service is properly connected
   - Test the service connection in EmailJS dashboard

3. **Check Template Variables**
   - Ensure template variable names match exactly:
     - `{{to_name}}`, `{{to_email}}`, `{{message}}` for patient template
     - `{{patient_name}}`, `{{patient_email}}`, `{{patient_phone}}`, `{{patient_message}}`, `{{submission_date}}` for doctor template

4. **Console Errors**
   - Open browser DevTools (F12)
   - Check Console tab for error messages
   - Look for network errors

### Gmail Blocking Emails?

If using Gmail and emails aren't sending:
1. Enable "Less secure app access" in Gmail settings, OR
2. Create an "App Password" and use that in EmailJS setup

## Upgrading to Database Storage

This current setup sends emails but doesn't store form submissions. To add database storage:

1. Enable Lovable Cloud (provides Supabase backend)
2. Create a `consultations` table
3. Store form submissions before sending emails
4. Build an admin dashboard to view all submissions

Would you like help setting up the database storage? Just let me know!

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**Note**: The free EmailJS plan includes 200 emails/month. If you expect more consultation requests, consider upgrading to a paid plan or implementing a backend solution with Lovable Cloud.

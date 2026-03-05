import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplate.js";
import { transporter } from "./nodemailer.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const html = VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationToken,
    );

    const info = await transporter.sendMail({
      from: `"Mayur Pimple" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify your email",
      html,
    });

    console.log("Verification Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error("Verification email not sent");
  }
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    const html = WELCOME_EMAIL_TEMPLATE.replace("{{name}}", name).replace(
      /{{company_info_name}}/g,
      "Auth Company",
    );
    const info = await transporter.sendMail({
      from: `"Mayur Pimple" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to Auth Company 🎉",
      html,
    });

    console.log("Welcome Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Welcome email not sent");
  }
};

export const sendPasswordResetEmail = async (email, resetUrl) => {
  try {
    const html = PASSWORD_RESET_REQUEST_TEMPLATE.replace(
      "{resetURL}",
      resetUrl,
    );

    const info = await transporter.sendMail({
      from: `"Mayur Pimple" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Reset your Password",
      html,
    });

    console.log("Password Reset Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw new Error("Password reset email not sent");
  }
};

export const sendResetSuccessEmail = async (email) => {
  try {
    const response = await transporter.sendMail({
      from: `"Mayur Pimple" <${process.env.EMAIL_USER}>`,
      to: email, // ✅ correct
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });

    console.log("Password reset success email sent:", response.messageId);
  } catch (error) {
    console.error("Error sending password reset success email:", error);
    throw new Error("Password reset success email not sent");
  }
};

import {
  type ContactField,
  type ContactFormData,
} from "@/types/contact-types";

export const INITIAL_FORM_STATE: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const REQUIRED_FIELDS: ContactField[] = ["name", "email", "message"];

export const ALERT_DURATION = 6000;

export const CONTACT_TITLE = "Let's Build Something Intelligent Together.";

export const CONTACT_SUCCESS_MESSAGE =
  "Message sent. Thank you, I'll get back to you soon.";
export const CONTACT_MAILTO_MESSAGE =
  "Your email app should open with the message ready to send.";
export const CONTACT_ERROR_MESSAGE =
  "Something went wrong. Please try again or email me directly.";

"use client";

import { useCallback, useMemo, useRef, useState, type FormEvent } from "react";
import {
  ALERT_DURATION,
  CONTACT_ERROR_MESSAGE,
  CONTACT_MAILTO_MESSAGE,
  CONTACT_SUCCESS_MESSAGE,
  INITIAL_FORM_STATE,
  REQUIRED_FIELDS,
} from "@/constants/contact-constants";
import {
  CONTACT_EMAIL,
  CONTACT_ENDPOINT,
} from "@/constants/social-constants";
import {
  type AlertState,
  type AlertType,
  type ContactField,
  type ContactFormData,
} from "@/types/contact-types";

const HIDDEN_ALERT: AlertState = {
  visible: false,
  type: "success",
  message: "",
};

const openMailClient = ({ name, email, subject, message }: ContactFormData) => {
  const title = subject.trim() || `Portfolio message from ${name}`;
  const body = `${message}\n\n${name}\n${email}`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    title
  )}&body=${encodeURIComponent(body)}`;
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<AlertState>(HIDDEN_ALERT);
  const alertTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const update = useCallback((key: ContactField, value: string) => {
    setFormData((previous) => ({ ...previous, [key]: value }));
  }, []);

  const completion = useMemo(() => {
    const filled = REQUIRED_FIELDS.filter((key) => formData[key].trim()).length;
    return filled / REQUIRED_FIELDS.length;
  }, [formData]);

  const showAlert = useCallback((type: AlertType, message: string) => {
    if (alertTimer.current) clearTimeout(alertTimer.current);
    setAlert({ visible: true, type, message });
    alertTimer.current = setTimeout(
      () => setAlert(HIDDEN_ALERT),
      ALERT_DURATION
    );
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      setIsLoading(true);

      try {
        // No form service configured: hand the message to the mail app.
        if (!CONTACT_ENDPOINT) {
          openMailClient(formData);
          showAlert("success", CONTACT_MAILTO_MESSAGE);
          return;
        }

        const response = await fetch(CONTACT_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error(CONTACT_ERROR_MESSAGE);

        setFormData(INITIAL_FORM_STATE);
        showAlert("success", CONTACT_SUCCESS_MESSAGE);
      } catch (error) {
        showAlert(
          "danger",
          error instanceof Error ? error.message : CONTACT_ERROR_MESSAGE
        );
      } finally {
        setIsLoading(false);
      }
    },
    [formData, showAlert]
  );

  return { formData, update, completion, isLoading, alert, handleSubmit };
};

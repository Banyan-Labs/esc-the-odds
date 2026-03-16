"use server";

const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL;

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  orgName: string;
  titleRole: string;
  programInterest: string;
  audienceSize: string;
  decisionRole: string;
  notes: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  if (!GHL_WEBHOOK_URL) {
    console.error("[contact] GHL_WEBHOOK_URL is not set");
    return { success: false, error: "Form submission is not configured" };
  }

  try {
    const payload = {
      first_name: data.firstName.trim(),
      last_name: data.lastName.trim(),
      email: data.email,
      phone: data.phone,
      city: data.city,
      LkTrGoJOhfarzsppkKLc: data.orgName || "",
      B8g1Ag99YdcgSd4rU2tB: data.titleRole || "",
      DATll64T24fHNFfcpNdO: data.programInterest || "",
      kiWUx8JvoRqLyupp3DWb: data.audienceSize || "",
      "68QArVl7RkYH8xQhBsWu": data.decisionRole || "",
      wOmRjzP9SAVzRgcETUpX: data.notes || "",
    };

    const response = await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("[contact] GHL webhook failed:", response.status, await response.text());
      return { success: false, error: "Failed to submit inquiry" };
    }

    return { success: true };
  } catch (error) {
    console.error("[contact] Form submission error:", error);
    return { success: false, error: "Internal server error" };
  }
}

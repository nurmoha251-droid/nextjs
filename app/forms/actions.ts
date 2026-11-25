"use server";

export type FormState = {
  success: string;
  error: string;
  greeting: string;
};

export async function submitForm(
  previousState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  // Exercise 1: Log email on the server
  console.log("Submitted email:", email);

  // Exercise 2: Validate password
  if (password.length < 6) {
    return {
      success: "",
      error: "Password must be at least 6 characters.",
      greeting: "",
    };
  }

  // Exercise 3: Create full-name greeting
  return {
    success: "Thanks for submitting!",
    error: "",
    greeting: `Hello, ${firstName} ${lastName}!`,
  };
}
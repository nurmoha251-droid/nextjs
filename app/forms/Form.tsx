"use client";

import { useActionState } from "react";
import { submitForm, type FormState } from "./actions";

const initialState: FormState = {
  success: "",
  error: "",
  greeting: "",
};

export default function Form() {
  const [state, formAction, isPending] = useActionState(
    submitForm,
    initialState
  );

  return (
    <form action={formAction}>
      <h1>Server Actions Form</h1>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Minimum 6 characters"
          required
        />
      </div>

      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          placeholder="Enter first name"
          required
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          placeholder="Enter last name"
          required
        />
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>

      {state.error && <p style={{ color: "red" }}>{state.error}</p>}

      {state.success && (
        <p style={{ color: "green" }}>{state.success}</p>
      )}

      {state.greeting && <h2>{state.greeting}</h2>}
    </form>
  );
}
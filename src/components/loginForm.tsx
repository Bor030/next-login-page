"use client";
import { useActionState } from "react";
import { login } from "../actions";

const LoginForm = () => {
  const [state, formAction] = useActionState<any, FormData>(login, undefined);

  return (
    <form action={formAction}>
      <input type="text" name="username" required placeholder="username" />
      <input type="password" name="password" required placeholder="password" />
      <button type="submit">Login</button>
      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
    </form>
  );
};

export default LoginForm;

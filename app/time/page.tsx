import { connection } from "next/server";

export default async function TimePage() {
  await connection();

  const currentTime = new Date().toLocaleTimeString();

  return (
    <main>
      <h1>Server Rendering Exercise</h1>

      <p>Current server time: {currentTime}</p>
    </main>
  );
}
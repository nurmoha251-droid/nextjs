export default async function SlowComponent() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <h2>Slow Component Loaded!</h2>
      <p>This content appeared after 3 seconds.</p>
    </div>
  );
}
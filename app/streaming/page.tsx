import { Suspense } from "react";
import SlowComponent from "./SlowComponent";

export default function StreamingPage() {
  return (
    <main>
      <h1>Streaming Exercise</h1>

      <p>The page has started rendering.</p>

      <Suspense fallback={<p>Loading... Please wait.</p>}>
        <SlowComponent />
      </Suspense>
    </main>
  );
}
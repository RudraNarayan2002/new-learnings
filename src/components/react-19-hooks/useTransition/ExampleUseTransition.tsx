"use client";
import { useState, useTransition } from "react";

const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

export default function ExampleUseTransition() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(bigList);

  const [isPending, startTransition] = useTransition();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setQuery(value); // urgent UI change

    startTransition(() => {
      setResults(bigList.filter((item) => item.includes(value)));
    });
  }

  return (
    <>
      <input value={query} onChange={handleChange} />
      {isPending && <p>Updating results...</p>}
      <ul>
        {results.slice(0, 20).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

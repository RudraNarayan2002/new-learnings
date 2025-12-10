"use client";
import { useAtom } from "jotai";
import { counterAtom } from "@/store/counterAtom";

const Counter = () => {
  const [count, setCount] = useAtom(counterAtom);
  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg">
      <p className="text-xl font-semibold">Count: {count}</p>

      <div className="flex gap-2">
        <button
          className="px-3 py-1 border rounded"
          onClick={() => setCount((c) => c - 1)}
        >
          -1
        </button>
        <button
          className="px-3 py-1 border rounded"
          onClick={() => setCount((c) => c + 1)}
        >
          +1
        </button>
        <button
          className="px-3 py-1 border rounded"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

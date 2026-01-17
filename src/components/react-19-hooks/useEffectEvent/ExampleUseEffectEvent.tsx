// Scenario: Page Visibility Analytics
// Track how many seconds a user spends on a page

"use client";
import { useEffect, useEffectEvent, useState } from "react";

// ❌ OLD WAY (useEffect → stale state bug):
// const ExampleUseEffectEvent = () => {
//   const [seconds, setSeconds] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);
//     return clearInterval(interval);
//   });
//   return <div>Time on page: {seconds}</div>;
// };

// export default ExampleUseEffectEvent;

// ✅ NEW WAY (useEffect + useEffectEvent)
const ExampleUseEffectEvent = () => {
  const [seconds, setSeconds] = useState(0);

  const tick = useEffectEvent(() => {
    setSeconds((prev) => prev + 1);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      tick(); // ✅ always latest state
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Time on page: {seconds}s</p>;
};

export default ExampleUseEffectEvent;

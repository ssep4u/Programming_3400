import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="clock">
      <h2>현재 시간 : {time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;

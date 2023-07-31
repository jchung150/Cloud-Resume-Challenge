import { useState, useEffect } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://x3tsc8hfmg.execute-api.us-east-1.amazonaws.com/prod/mysite")
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Response was not ok");
        }
        return res.json();
      })
      .then((data) => setCount(data.count));
    console.log(data).catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <h1 className="text-red-600">Error: {error}</h1>;
  }
  return <h1 className="text-gray-600">Visits: {count} </h1>;
}

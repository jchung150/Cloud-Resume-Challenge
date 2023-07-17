import { useState, useEffect } from 'react';

export default function VisitorCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('/api/counter')
        .then((res) => res.json())
        .then((data) => setCount(data.count));
    }, []);

    return (
        <h1>Visits: {count} </h1>
    );
};
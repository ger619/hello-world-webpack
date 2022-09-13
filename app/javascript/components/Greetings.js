import React from 'react';
import { useEffect, useState } from 'react';


export const Greetings = () => {
    const [error, setError] = useState('null');
    const [isLoading, setIsLoading] = useState(false);
    const [greeting, setGreeting] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/api/v1/hello")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoading(true);
                    setGreeting(result);
                },
                (error) => {
                    setIsLoading(true);
                    setGreeting(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoading) {
        return <div>Loading...</div>;
    } else {
        return (
        <ul>
            {greeting.map(greeting => (
                <li key={greeting.id}>
                    }}
                </li>
            ))}
        </ul>
        );
    }
}


import React from "react";
import { useState, useEffect } from 'react'

export default function TodoHeader() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h1 className="todo__title">HyeonDo List</h1>
            <h2 className="todo__clock">{
                time.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            }</h2>
        </>
    )
}
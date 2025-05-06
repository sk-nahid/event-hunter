import React, { createContext, useEffect, useState } from 'react';

export const ApiContext= createContext()

const ContextProvider = ({children}) => {
    const [eventData, setEventData] = useState([]);



    useEffect(() => {
        fetch("/event.json")
            .then(res => res.json())
            .then(data => setEventData(data))
    }, [])

    const ApiData = {
        eventData,
    }

    return <ApiContext value={ApiData}>{ children}</ApiContext>
};

export default ContextProvider;
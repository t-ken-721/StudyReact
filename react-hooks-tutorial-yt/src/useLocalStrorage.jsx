import React, { useEffect, useState } from 'react'

const useLocalStrorage = (key ,defaultValue) => {
    const [value  , setValue] = useState(() => {
        const jsonValue = window.localStorage.getItem(key);
        if(jsonValue !== null) return JSON.parse(jsonValue);

        return defaultValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key , JSON.stringify(value));
    }, [value , setValue]);
};

export default useLocalStrorage
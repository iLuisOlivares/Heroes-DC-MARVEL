import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(url);
            const responseData = await response.json();
            setData(responseData);
            setIsLoading(false);

        } catch (error) {
            setError(error);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, error, isLoading };
};

export default useFetch;

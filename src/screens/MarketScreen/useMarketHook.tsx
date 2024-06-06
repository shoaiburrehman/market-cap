import { useEffect, useRef, useState } from 'react';
import { subscribeToMarketData } from '../../api/marketService';

const useMarketData = () => {
    const [marketData, setMarketData] = useState<number[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const dataBuffer = useRef<number[]>([]);
    const interval = useRef<NodeJS.Timeout>();

    useEffect(() => {
        const updateMarketData = () => {
            if (dataBuffer.current.length > 0) {
                setMarketData((prevData) => [...prevData, ...dataBuffer.current]);
                dataBuffer.current = [];
                setLoading(false);
            }
        };

        const unsubscribe = subscribeToMarketData((price) => {
            if (!isNaN(price) && isFinite(price)) {
                dataBuffer.current.push(price);
            }
        });

        interval.current = setInterval(updateMarketData, 3000);

        return () => {
            unsubscribe();
            if (interval.current) {
                clearInterval(interval.current);
            }
        };
    }, []);

    return { marketData, loading };
};

export default useMarketData;

import React, { useEffect, useState } from 'react'

export const useCurrencyHooks = ({ currency }: any) => {
    const [data, setData] = useState({});
    console.log(data)

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`).
            then((res) => setData(res))
    }, [currency])
}

export default useCurrencyHooks;
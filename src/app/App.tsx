import React, { useEffect } from 'react'
import { useQuery } from 'react-query'

const App = () => {
    const fn = async () => {
        const res = await fetch('http://localhost/test')
        return await res.json()
    }
    const { data, status } = useQuery<{ value: string }>('hi', fn)

    return (
        <div className="app">
            {status === 'loading' ? <h1>loading</h1> : <h1>{data?.value}</h1>}
        </div>
    )
}

export default App

import React, { useEffect, useState } from 'react'

const GitHub = () => {
    const [data, setData] = useState([])
    useEffect(() => {

        fetch(import.meta.env.VITE_GITHUB_API_URL)
            .then((res) => res.json())
            .then((res) => {
                setData(res)
                console.log(res)
            })
    }, [])

    return (
        <>
            <div className='bg-gray-600 text-white text-3xl p-4 text-center flex flex-col items-center' >
                <div><strong>Data received from Github Api</strong></div>

                <div className='mt-4'> <img src={data.avatar_url} alt="" style={{ borderRadius: '50%' }} /></div>
                <div >Github Name : {data.name} </div>
                <div >Github followers : {data.followers} </div>
              
            </div>
        </>
    )
}

export default GitHub
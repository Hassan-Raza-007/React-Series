import React from 'react'
import { useParams } from 'react-router-dom'


const Users = () => {
  const params = useParams()
  console.log(params.id)
  return (<>
    <div className='text-center  bg-gray-500 text-white p-4 text-3xl'>
      <h3>Note : Enter Any Value in URl after "baseUrl/user/" and you will get tha value in below;</h3>
      <div> <strong>Users : {params.id}</strong> </div>
    </div>
  </>
  )
}

export default Users
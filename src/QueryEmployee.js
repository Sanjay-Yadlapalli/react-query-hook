import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import './Style.css'

const QueryEmployee = () => {
    const { id } = useParams()
    console.log(id)
    const { data , isLoading , isError , error } = useQuery('employee' , () => {
        return axios.get(`http://localhost:3003/employees/${id}`)
    })
    
    if (isLoading) return <h1>Loading..!</h1>
    if (isError) return <h1>{error.message}</h1>
  return (
      <div style={{height : '80vh' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
        <div className='single'>
            <h1 style={{fontFamily : 'cursive'}}>This is {data?.data.name}'s Page...!</h1>
        </div>
      </div>
  )
 
}

export default QueryEmployee

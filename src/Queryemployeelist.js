import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import './Style.css'

const Queryemployeelist = () => {
    const { data , isLoading , isError , error , isFetching } = useQuery('employee-list' , () => {
        return axios.get('http://localhost:3003/employees')
    })
    console.log({isLoading , isFetching})
    if (isLoading) return <h1 style={{fontFamily : 'sans-serif'}}>Loading..!</h1>
    if(isError) return <h1 style={{fontFamily : 'sans-serif'}}>{error.message}</h1>
    return (
        <div>
            <div style={{display : 'flex' , flexDirection : 'column' ,margin : '20px'}}>
                <h1 style={{fontFamily : 'sans-serif'}}>This Data is from React Query..!</h1>                {
                    data?.data.map(employee => {
                        return <div key = {employee.id} className='employee' style={{cursor : 'pointer' , padding : '10px' , fontFamily : 'cursive' , backgroundColor : 'whitesmoke' , textAlign : 'center' , margin : '20px' , borderRadius : '25px'}}>
                            <Link style={{textDecoration : 'none'}} to = {`/employee/${employee.id}`}>
                        <h1>Name : <span style={{color : 'indianred'}}>{employee.name}</span></h1>
                        <h1>Place : {employee.place}</h1>
                        <h1>EmailId : {employee.email}</h1></Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Queryemployeelist

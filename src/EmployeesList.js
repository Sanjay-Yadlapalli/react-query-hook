import React , { useState , useEffect } from 'react'
import axios from 'axios'
import './Style.css'
 
function EmployeesList() {
    const [loading , setLoading] = useState(true)
    const [data , setData] = useState([])
    const [error , setError] = useState('')
    console.log(loading)
    useEffect(() => {
        axios.get('http://localhost:3003/employees/').then(res => {
            setData(res.data)
            setLoading(false)
        }).catch(error => {
            setError(error.message)
            setLoading(false)
        })
    }, [])
    if (loading) return <h2 style={{fontFamily : 'sans-serif'}}>Loading...!</h2>
    if (error) return <h2 style={{fontFamily : 'sans-serif'}}>{error}</h2>
    return (
        <div style={{height : '100%'}}>
            <div style={{display : 'flex' , flexDirection : 'column' , margin : '25px'}}>
                <h1 style={{fontFamily : 'sans-serif'}}>This is Traditional Fetching..!</h1>
                {
                    data.map(employee => {
                        return <div key = {employee.id} className = 'employee' style={{padding : '10px' , textAlign : 'center' , fontFamily : 'cursive' , backgroundColor : 'whitesmoke' , margin : '20px' , borderRadius : '25px'}}>
                            <h1>Name : <span style={{color : 'indianred'}}>{employee.name}</span></h1>
                            <h1>Place : {employee.place}</h1>
                            <h1>EmailId : {employee.email}</h1>
                            </div>
                    })
                }
            </div>
        </div>
    )
}

export default EmployeesList

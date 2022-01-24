import React from 'react'
import { QueryClientProvider , QueryClient } from 'react-query'
import EmployeesList from './EmployeesList'
import Queryemployeelist from './Queryemployeelist'
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from './Home'
import './App.css'
import QueryEmployee from './QueryEmployee'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
      <div>
          <div className='nav' style={{display : 'flex' , justifyContent : 'space-evenly' , padding : '25px'}}>
            <p style={{fontSize : '35px' , fontStyle : 'italic'}}><Link style={{textDecoration : 'none'}} to = '/'>Home</Link></p>
            <p style={{fontSize : '35px' , fontStyle : 'italic'}}><Link style={{textDecoration : 'none'}} to = '/employeelist'>Traditional Fetching</Link></p>
            <p style={{fontSize : '35px' , fontStyle : 'italic'}}><Link style={{textDecoration : 'none'}} to = '/react_query_employee_list'>ReactQuery Fetching</Link></p>
          </div>
          <Routes>
          <Route exact path = '/' element={<Home />}></Route>
          <Route exact path = '/employeelist' element = {<EmployeesList />}></Route>
          <Route exact path = '/react_query_employee_list' element = {<Queryemployeelist />}></Route>
          <Route exact path = '/employee/:id' element = {<QueryEmployee />}></Route>
        </Routes>
      </div>
      </Router>
      <ReactQueryDevtools initialOpem = {false} position = 'bottom-right'/>
    </QueryClientProvider>
  )
}

export default App

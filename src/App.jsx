import React, { useContext, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import {getLocalStorage, setLocalStorage } from './utils/localStorage';
import { useEffect } from 'react';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const [user,setUser]=useState(null)
  const [loggedInUserData,setLoggedInUserData]=useState(null);
  const AuthData=useContext(AuthContext);
// console.log(AuthData.employees);

useEffect(()=>{
  if(AuthData){
    const loggedInUser =localStorage.getItem("loggedInUser")
    if(loggedInUser){
      setUser(loggedInUser.role)
    }
  }

},[AuthData])

const handleLogin=(email,password)=>{
  if(email=='admin@me.com' && password=='123'){
    setUser('admin')
    // console.log(user);
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  }
  else if(AuthData){
    const employee=AuthData.employees.find((e)=>e.email==email && e.password==password)
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee);
    }
    
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    // console.log(user)
  }
  else{
    alert("invalid Crendegtial")
    }
}

  return (
    <>
     {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && <EmployeeDashboard  data={loggedInUserData}/>}
    </>
  )
}

export default App
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { useState,useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import authService from './appwrite/auth.js'
import Header from './components/Header/Header.jsx'
import { login, logout } from './store/authSlice.js'
import store from './store/store.js'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    
    authService.getCurrentUser()
    .then((user) => {
      if (user) {
        dispatch(login(user))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  if(loading){
    return <><Provider store={store}><div className='min-h-screen flex flex-wrap content-between bg-gray-400'>Loading...</div></Provider></>
  }
  return (
    <>
    <Provider store={store}>
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header>
          <main>
            TODO: Outlet

          </main>
        </Header>
      </div>
      </div>
    </Provider>
    </>
  )
}

export default App

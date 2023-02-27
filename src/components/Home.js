import React,{useEffect,useState} from 'react'
// import { Outlet } from 'react-router-dom'
import Common from '../Common'


const Home = () => {
  const[message,setMessage]=useState('')

  useEffect(()=>{
    setTimeout(()=>{
      setMessage("Welcome To Mohit Foody, Are U Hungry,Order Now ")
      setInterval(()=> {
        setMessage("Delicious Food At ")
      },5000)
    },2000)
  })
  return (
    <div>
      <Common
        name={message}
        imgsrc="https://media.istockphoto.com/id/860618580/photo/glass-of-rose-wine-on-rustic-table.jpg?s=612x612&w=0&k=20&c=hdHftBhh8_YlsdkZubqIgEa0FYUutPwAVJFTfJd4Rfo="
        visit="/aboutus"
        btname="Get Started" />
      <div>
        {/* <Outlet /> */}
      </div>
    </div>
  )
}

export default Home
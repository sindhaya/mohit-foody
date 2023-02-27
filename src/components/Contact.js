import React, { useState } from 'react'

const Contact = () => {
const[data,setData]=useState({
  fullname:"",
  phone:0,
  email:"",
  address:"",
  message:""
});

const InputEvent= (event) => {
  const{name,value}= event.target;
  setData((preVal)=> {
    return {
      ...preVal,[name]:value,
    }
  })
}

  const formSubmit= (e) => {
  e.preventDefault();
  alert(`My Name is ${data.fullname}.My Contact No is ${data.phone}.My Email Id id ${data.email}. I Am From ${data.address}.My Message to you Are ${data.message}`)
   setData({})  
}
  return (
    <div>
      <div className='my-1'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                FullName
              </label>
              <input type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name='fullname'
                value={data.fullname}
                onChange={InputEvent}
                placeholder="enter your name"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                phone No
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                name='phone'
                value={data.phone}
                onChange={InputEvent}
                placeholder=" Mobile No"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                name='email'
                value={data.email}
                onChange={InputEvent}
                placeholder="Enter your Email" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name='address'
                value={data.address}
                onChange={InputEvent}
                placeholder="enter your delivery location"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                name='message'
                value={data.message}
                onChange={InputEvent}
                placeholder='Type Your Messages Here'
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3">
              </textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-outline-primary" type="submit">Submit form</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
import React, { useState } from 'react'
import cover from '../Assets/cover.jpg'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  let [name,setName] = useState("");

  const onChange = (e) =>{
    setName(e.target.value);
  }
  
  const onClick = (e) =>{
    console.log(name);
    e.preventDefault();

  }


  return (
    <>
      <div className='main'>
        <div className='first'>
            <p>Manage Your Task With</p>
            <p>DayTask.</p>
            
            <div className="forms">
              <label htmlFor="personName">Your userName :</label>
              <input type="text" className="form-control" id='personName' placeholder="Please Write your userName" name='personName' value={name.personName} onChange={onChange} required/>
            </div>

            <button type='submit' onClick={onClick}><Link className='start' to='/todo' state= {{ name: name  }}>Let's Start</Link></button>
        </div>
        <img className='cover' src={cover} alt='cover'></img>
      </div>
    </>
  )
}

export default Home
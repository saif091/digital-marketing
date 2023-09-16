import React from 'react'
import { useNavigate } from 'react-router-dom';
const Contact = () => {
    const navigate = useNavigate();
  const handleSubmit =()=>{
    alert("Submitted")
    navigate('/')
  }
  return (
    <div className="contact">
        <main>
            <h1>Contact US</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" required placeholder='Abc' />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" required placeholder='Abc@email.com' />
                </div>
                <div>
                    <label htmlFor="">Message</label>
                    <input type="text" required placeholder='Tell us about you query...' />
                </div>
                <button onClick={handleSubmit}type='submit'>Send</button>
            </form>
        </main>
    </div>

    )
}

export default Contact

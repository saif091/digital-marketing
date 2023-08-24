import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact US</h1>
            <form>
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
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>

    )
}

export default Contact
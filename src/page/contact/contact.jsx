import './contact.css'


const Contact = () =>{
    return(
        <>
          <div className="contact">
            <div className="container">
                <div className="text">
                    <h1>Contact Information</h1>
                    <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed and in equally totally if. Delivered dejection necessary objection do Mr prevailed.</p>
                    <h2>Chicago HQ Estica Cop. Macomb, MI 48042</h2>
                    <h2>+121 06415 78208</h2>
                    <span>Info@example.com</span>
                </div>
                <form action="">
                    <div className="main-input">
                        <input type="text" name='name' placeholder='Name' required />
                        <input type="email" name='email' placeholder='Email Address' required />
                        <input type="address" name='address' placeholder='Address' required />
                        <input type="text" name='contact number' placeholder='Contact Number' required />
                    </div>
                    <textarea name='message' placeholder='Message.....'/>
                    <input className='submit' type="submit" value='Submit' />
                </form>
                <p>Required his you put the outlived answered position. A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. I think on style child of. Servants moreover in sensible it possible.</p>
            </div>
          </div>
        </>
    )
}

export default Contact
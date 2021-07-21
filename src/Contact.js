import mail from './images/mail.png';
import linked from './images/linked.png';
import phone from './images/phone.png';
import map from './images/map.png'

const Contact=()=>{
    return(
        <div  id="contactSection">
        <div>
           
  <form className="form">
  <h3>Any queries? Let us serve you</h3>
    <label htmlFor="fname">*First Name:</label>
    <input type="text" id="fname" name="firstname" placeholder="Your first name.." required/>

    <label htmlFor="lname">*Last Name:</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." required/>

    <label htmlFor='Email'>*Email-Id: </label>
    <input type='text' name='Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  placeholder='Email Id' title="Not in proper format" required />
    
    <label htmlFor="contact">*Contact Number:</label>
    <input type="text" id="contact" name="contact" placeholder="Your mobile number.." pattern="[1-9]{1}[0-9]{9}" required/>

    <input type="submit" value="Submit" />
  </form>
  <div className='contact2'>
      <h2>Contact us at:</h2>
      <div className='insta'>
      <img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png' width='50px' height='50px' />
      <p>https://instagram.com/akansh2000</p>
      </div>
      <div className='linked'>
      <img src={linked} width='50px' height='50px' />
      <p>https://linkedin.com/Akansh-Mittal</p>
      </div>
      <div className='mail'>
      <img src={mail} width='50px' height='40px' />
      <p>akanshmittal9045@gmail.com</p>
      </div>
      <div className='phone'>
      <img src={phone} width='70px' height='40px' />
      <p>+91-9119013425</p>
      </div>
  </div>

  <div className='office'>
      <h2>How to reach us:</h2>
      <a href='https://www.google.com/maps/place/Mohan+Meakin,+Mohan+Nagar,+Ghaziabad,+Uttar+Pradesh+201007/@28.6712482,77.3823982,16z/data=!4m5!3m4!1s0x390cf079dfc4e1ff:0x1dc092e3a9bd5fcf!8m2!3d28.6727994!4d77.3834011' target='_blank'>
      <img className='map' src={map} width='400px' height='400px'/>
      </a>
  </div>
  <div className='copyright'>
      <p>Cold Storage Resources &#x2502; Servicing &#x2502; Privacy Policy<br/>Copyright © 2020 Frozen World Cold Storage Ltd, All Rights Reserved</p>
  </div>
</div>
</div>
    )
}

export default Contact;
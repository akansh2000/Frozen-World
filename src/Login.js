

const Login=()=>{

    return(

            <div className='log_main'> 
  <form className='login'>
      <h2 className='enter'>Log in</h2>
      <h3 className='power'>Powered by Frozen World Ltd.</h3>
      <input type='text' className='log_field up' placeholder='Username' />
      <input type='password' className='log_field down' placeholder='Password'/> 
      <input type='submit' className='log_submit' value='Log in' />
      <p className='temp'>Copyright © 2020 Frozen World Cold Storage Ltd, All Rights Reserved</p>
  </form>
  </div>
    )
}

export default Login;
import './Login.css'
// import googleImage from '../Icons/Google.png';
import appleImage from '../Icons/Apple.png';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

function Login() {
      

  const navigate = useNavigate();

  function handleLoginSuccess(credentialResponse) {
    console.log(credentialResponse);
    // Navigate to home page
    navigate('/');
  }

  function handleLoginError() {
    console.log('Login Failed');
  }
  

  return (
    <div className='login'>
        <div className='left'>
            <h1>Board</h1>
        </div>
        <div className='right'>
            <div className='signin'>
                <p className='signBtn'>SignIn</p>
                <p className='accBtn'>Sign into your account</p>
                <div className='gBtns'>
                    {/* <button className='googleBtn'><img src={googleImage} alt="" /> Sign into your google</button> */}
                    <div className='GBtn'>
                        <GoogleLogin
                            clientId="1031113576900-fpujmbk9jm4mj6mi0qcret9tsjhah1as.apps.googleusercontent.com"
                            onSuccess={handleLoginSuccess}
                            onError={handleLoginError}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                    <button className='googleBtn'><img src={appleImage} alt="" /> Sign into your apple</button>
                </div>
                <div className='midPart'>
                    <p className='Text'>Email address</p>
                    <input placeholder='johndoe@gmail.com' type="text" />
                    <p className='Text'>Password</p>
                    <input placeholder='........' type="text" />
                    <p className='Text2'>Forgot password?</p>
                    <button>Sign In</button>
                </div>
                <p className='lastText'>Don’t have an account? <span>Register here</span></p>
            </div>
        </div>
    </div>
  )
}

export default Login
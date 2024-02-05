import '../App.css';
import LoginImgSrc from '../assets/login.png'
import Footer from '../Components/Footer.js'
import LoginSection from '../Components/LoginSection.js'
import { useAuth } from '../context/AuthContext';

function Login() {
  const { user, setUsername } = useAuth();
  return (
    <div>
      <LoginSection src={LoginImgSrc} user={user} setUsername={setUsername}/>
      <Footer/>
    </div>
  );
}

export default Login;

import '../App.css';
import SignupImgSrc from '../assets/login.png'
import Footer from '../Components/Footer.js'
import SignupSection from '../Components/SignupSection.js'

function SignUp() {
  return (
    <div>
      <SignupSection src={SignupImgSrc}/>
      <Footer/>
    </div>
  );
}

export default SignUp;

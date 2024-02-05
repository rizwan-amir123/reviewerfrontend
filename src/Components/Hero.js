import { Link } from "react-router-dom";

const Hero = () => {
    return (
      <section className="bg-gradient-to-r from-[#581381] to-[#F5A1E8] h-screen text-white overflow-hidden">
  <div className="relative z-10 flex flex-col justify-center items-center h-full mx-20 text-center">
    <h1 className="text-6xl font-bold leading-tight mb-4">Get Well Informed on Products With Us</h1>
    <p className="text-2xl text-pink-200 pt-2 mb-8 mx-10">Discover authentic Amazon product reviews, visualize trends, and 
            make informed choices with reViewer – Your gateway to smart shopping.</p>
    <div className="relative transition duration-300 ease-in-out 
      transform hover:scale-105 inline-flex  group">
        <div
            className="absolute transition-all duration-1000 opacity-70 -inset-px 
            bg-gradient-to-r from-[#ac43b0] via-[#b0437d] to-[#e83d95] rounded-xl blur-lg 
            group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <Link to="/dashboard"> <p
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg 
            font-bold text-white transition-all duration-200 animate-text
            border-2
            hover:bg-[#F5A1E8]
            hover:text-[#581381]
            rounded-full border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >Get Started </p>
        </Link>
    </div>
  </div>
  

      </section>
    );
  };
  
  export default Hero;
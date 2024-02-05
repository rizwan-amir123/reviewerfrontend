import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

export default function Header({src}) {
    const { user, setUsername } = useAuth();

    return (
    
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
      <Link to="/">
        <div className="flex pl-3 items-center">
            <img src={src} className="my-3 h-8  mr-2" alt="Logo" />
        </div>
      </Link>
      
      <div className="flex items-center justify-center space-x-5">
      {user ? <p>user</p> : <Link to="/login">
        <div className="text-md rounded-lg py-1 px-3 border-solid border-white border-2 font-medium 
        hover:bg-gradient-to-r from-[#581381] to-[#F5A1E8] transition ease-in duration-300
        hover:text-pink-200 text-white">Login
        </div>
      </Link>
      }
      
      </div>
      </div>
    </nav>
    
      );
    };


import '../App.css';
import Footer from '../Components/Footer.js'
import SearchSection from '../Components/SearchSection.js'
import { useSearchParams } from 'react-router-dom';


function Products() {
  const [searchParams] = useSearchParams();
  const paramsArray = [...searchParams][0]
  const myKey = paramsArray[0]
  const value = paramsArray[1]
  //console.log("from main search:key?:",key)

  return (
    <div>
      <SearchSection myKey={myKey} value={value} />
      <Footer/>
    </div>
  );
}

export default Products;

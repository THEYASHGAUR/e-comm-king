
import Navbar from './component/Navbar' ; 
import Footer from './component/Footer' ; 
import Popular from './component/Popular';
import SearchBar from './component/SearchBar';

export default function Home() {
  return (
    <>
    <Navbar />
    <SearchBar />
    <Popular />
    <Footer />
    </>
  )
}

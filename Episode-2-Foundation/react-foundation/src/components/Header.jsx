
import Logo from '../assets/logo.jpg'
const Header = () => {
  return(
    <>

<div className='header'>

<div className="logo-container">
    <img className='logo' src={Logo} alt='logo'/>

</div>
<div className="nav-items">
    <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li className='cart'>Cart</li>
    </ul>
</div>
</div>
  
  </>
  )
};

export default Header;

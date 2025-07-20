
import logo from '../images/icons/logo.png';
import Search from '../images/icons/search-icon.png';
import Cart from '../images/icons/cart.png';
 function Header() {
  return (
    <div>
       <header className="header-wrapper">
			<div className="internal-wrapper"> 
				<div className="header-links-wrapper">
					<ul>
						<li className="logo-link"><a href="/"><img src={logo} /></a></li>
						<li><a href="/mac/">Mac</a></li>
						<li><a href="#">iphone</a></li>
						<li><a href="#">ipad</a></li>
						<li><a href="#">watch</a></li>
						<li><a href="#">tv</a></li>
						<li><a href="#">Music</a></li>
						<li><a href="#">Support</a></li>
						<li className="search-link"><a href="/search/"><img src={Search}/></a></li>
						<li className="cart-link"><a  href="/cart/"><img src={Cart} /></a></li>
					</ul>					
				</div>
			</div>
			</header>
		
    </div>
  
  )
  }
  export default Header; 
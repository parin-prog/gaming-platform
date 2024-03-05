import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {

	const navigate = useNavigate();
	const handleClick = () =>{
		navigate('/#1');
	}

  return (
    <div className="nav">
	<div className="logo">
		<img src='https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3yO74fMJvl6bDmYAE9VDe3/13ddd4963c5bd4e39a852e6085eb7d47/UBI_RR_Logo_textured_coloured_Nav_footer.png' />
	</div>
	<div className="list">
		<ul>
			<li onClick={()=>{handleClick()}}>About</li>
			<li>Media</li>
			<li>News</li>
			<li><Link to="/purchase" className='route-link'>Purchase</Link></li>
			<li>Social Media</li>
			<li>Contact Us</li>
		</ul>
	</div>
    </div>
  )
}

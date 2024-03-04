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
		<img src='https://media.graphassets.com/qiFQiyH6TiuMdOIA5yZJ' />
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

import { Navbar } from '../components/Navbar'
import './Purchase.css'

const Purchase = () => {
	return (
		<div className="purchase">
			<Navbar />
			<div className='purchase-container'>
				<div className="product-info">
					<div className="product-photo">
						<img src="https://www.tonyhawkthegame.com/content/dam/atvi/tony-hawk/alcatraz/wtb/boxart/Alcatraz_Design_PC_Packshot_Standard_Edition_FINAL_T_081920-min.jpg" alt="product photo" />
					</div>
					<div className="product-info-list">
						<select name="country" id="country">
							<option>India</option>
							<option>US</option>
						</select>
						<select name="platform" id="platform">
							<option>Steam</option>
							<option>XBOX series X|S</option>
						</select>
						<select name="edition" id="edition">
							<option>Digital Edition</option>
							<option></option>
						</select>
						
					</div>
					<button>Purchase</button>
				</div>
				<div className="purchase-details">
					<div className='purchase-details-container'>
						<div className="title">Digital Edition</div>
						<hr />
						<div className="item-names">
							Tony Hawk's PRO Skater 1 + 2 Game
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Purchase
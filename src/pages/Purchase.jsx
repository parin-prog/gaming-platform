import { Navbar } from '../components/Navbar'
import './Purchase.css'

const Purchase = () => {
	return (
		<div className="purchase">
			<Navbar />
			<div className='purchase-container'>
				<div className="product-info">
					<div className="product-photo">
						<img src="https://cdn1.epicgames.com/offer/83d6990f16444655866b04be562bf589/RR_YEAR_1_PASS_EPIC_Key_Art_Wide_3840x2160_3840x2160-62c1c09dca94e0e865e84cfd391abec9" alt="product photo" />
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
							Riders Republic 1 + 2 Game
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Purchase
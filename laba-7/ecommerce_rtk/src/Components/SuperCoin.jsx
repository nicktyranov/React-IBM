import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function SuperCoin() {
	const [superCoins, setSuperCoins] = useState(0);
	const cartItems = useSelector((state) => state.cart.cartItems);
	const totalSum = cartItems.reduce((acc, x) => acc + x.price * x.quantity, 0);

	useEffect(() => {
		if (totalSum >= 100 && totalSum < 200) {
			setSuperCoins(10);
		} else if (totalSum >= 200 && totalSum < 300) {
			setSuperCoins(20);
		} else if (totalSum >= 300) {
			setSuperCoins(30);
		} else {
			setSuperCoins(0);
		}
	}, [totalSum]);
	return (
		<div className="super-coins" style={{ textAlign: 'center' }}>
			<h2 className="super-coins-title">Super Coins</h2>
			<p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
		</div>
	);
}

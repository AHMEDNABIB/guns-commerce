import React from 'react';

import './Card.css'

const Card = ( props ) => {
    //console.log(props.data)
     const { name, img, bullet, action, price, id } = props.gun;
    return (
		<div className="card">
			<div className="image-container">
				<img src={img} alt="" />
			</div>
			<div className="gun-info">
				<h1>{name}</h1>
				<p>Bullet Type : {bullet}</p>
				<p>Capacity : {props.gun.capacity}</p>
				<p>Action : {action}</p>
			</div>
			<div className="add-to-cart">
			
			</div>
		</div>
	);
};

export default Card;
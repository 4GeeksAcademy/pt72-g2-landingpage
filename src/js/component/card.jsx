import React from "react";

const Card = (props) => {
	return (
		<div className="card" style={{"width" : "18rem"}}>
			<img src={props.img} className="card-img-top"/>
			<div className="card-body">
				<h5 className="card-title">{props.h5}</h5>
				<p className="card-text">{props.p}</p>
				<a href="" className="btn btn-danger">{props.a}</a>
			</div>
		</div>
	);
};

export default Card;
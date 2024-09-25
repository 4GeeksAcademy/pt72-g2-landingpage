import React from "react";
import Jumbotron from "./jumbotron";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Jumbotron btnText="Call to action!" headerText="A Warm Welcome!" paraText="Lorem ipsum dolor sit amet, mea novum eripuit concludaturque no, soluta copiosae sadipscing has ut. Vix dicat deleniti disputando et, ne vix dictas splendide."/>
		</div>
	);
};

export default Home;

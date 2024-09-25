import React from "react";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";
import Footer form "./footer";
import Card from "./card";
import "/workspaces/pt72-g2-landingpage/src/styles/index.css"
//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
		<Navbar/>
			<Jumbotron btnText="Call to action!" headerText="A Warm Welcome!" paraText="Lorem ipsum dolor sit amet, mea novum eripuit concludaturque no, soluta copiosae sadipscing has ut. Vix dicat deleniti disputando et, ne vix dictas splendide."/>
			<div className="d-flex mx-auto">
				<Card img={"https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?cs=srgb&dl=pexels-codioful-6985003.jpg&fm=jpg"} h5={"A Gradient Background"} p={"Just a colorful gradient background with vibrant colors."} a={"This button does nothing"}/>
				<Card img={"https://media.istockphoto.com/id/584764738/vector/realistic-full-moon.jpg?s=612x612&w=0&k=20&c=7IOGLFxp6LzatVCGOwtXMgElNC1cMeTOAPzO5I6olvc="} h5={"The Moon and the Stars"} p={"It's always fascinating to look into space and see celestial objects."} a={"This button has potential"}/>
				<Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HlI6KGJed3SRLpbz7wE2c2hQtbZc-_g_QQ&s"} h5={"The Snowy Outdoors"} p={"A snow-covered landscape always seems to look nice and pleasant."} a={"This button does something!"}/>
				<Card img={"https://thewildlife.blog/wp-content/uploads/2023/06/img_6078-1024x768.jpg"} h5={"A Toasty Fire"} p={"Versatile. It can warm you, destroy, or even toast a marshmallow"} a={"The previous button lies"}/>
			</div>
  <Footer/>
		</div>
	);
};

export default Home;
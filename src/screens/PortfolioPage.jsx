import React from "react";
import "../sass/portfolio.sass";
import image1 from "../icons/insigns.png"
import image2 from "../icons/fain.png"
import image3 from "../icons/churro.png"

const text2 = "Project planning and development, Database administrator, API RESTful developer, Frontend development.";
const text1 = "Prototype for sign language application with minigames, achievements and user registration."
const text3 = "Single Page Application with small inventory and contact form to present the company and its products"

const fainditTags = [{text:"React Native",bg:"#3178C6"},{text:"Redux",bg:"#764ABC"},{text:"Typescript",bg:"#3178C6"},{text:"NodeJS",bg:"#3c873a"},{text:"AWS",bg:"#C97800"},{text:"MongoDB",bg:"#589636"}]
const inSigns = [{text:"React Native",bg:"#3178C6"},{text:"NodeJS",bg:"#3c873a"},{text:"MongoDB",bg:"#589636"}]
const crazyChu = [{text:"Svelte",bg:"#CB5530"},{text:"Responsive",bg:"#764ABC"}]

function PortfolioPage() {
  return (
    <div className="PortfolioPage_ctn">
      <div className="PortfolioPage">
        {/* <Corners /> */}
        {/* CONTENT */}
        {/* <p className="ptf_title">Portfolio</p> */}
        <div style={{height:84}}></div>

        <div className="cards_ctn">
          <Card title="EnSeñas" text={text1} tags={inSigns} img={image1} />
          <Card title="Faindit" text={text2} tags={fainditTags} img={image2} />
          <Card title="Churro Locura" text={text3} tags={crazyChu} img={image3} />
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;

const Card = ({ title, text,tags=[],img }) => {
  return (
    <div className="card">
      <div className="card_preview">
        <img src={img} alt={title} />
      </div>
      <div className="tags_ctn">
        {tags.map((item,index)=>(
          <Tag text={item.text} bg={item.bg} key={index} />
        ))}
      </div>
      <p className="card_title">{title}</p>
      <p className="card_text">{text}</p>
    </div>
  );
};

const Tag = ({text,bg})=>{
  return(
    <div className="tag" style={{backgroundColor:bg}} >
      {text}
    </div>
  )
}
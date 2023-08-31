import React from "react";

export const WideBannerBlack = ({ icon, text ,title}) => {
  return (
    <div className="WideBanner" >
      <div className="icon_ctn">
        <img src={icon} alt="reactlogo" className="banner_icon" />
        <p className="icon_title" >{title}</p>
      </div>
      <div className="right_text_ctn">
        <p className="banner_text" >
          {text}
        </p>
      </div>
    </div>
  );
};
export const WideBannerWhite = ({ icon, text ,title}) => {
  return (
    <div className="WideBanner" style={{backgroundColor:'#eee'}} >
      <div className="left_text_ctn">
        <p className="banner_text" style={{color:'#1e1e1e'}} >
          {text}
        </p>
      </div>
      <div className="icon_ctn">
        <img src={icon} alt="reactlogo" className="banner_icon" />
        <p className="icon_title" style={{color:'#1e1e1e'}} >{title}</p>
      </div>
    </div>
  );
};
import React from 'react'
import LogoImage from "../../assets/logo.png"
const Logo = () => {
	const style = {'paddingLeft':'37px'};
  return (
   
        <img style={style} src={LogoImage} alt='logo' width={67} />
        
  )
}

export default Logo
import React from 'react'
import LogoImage from "../../assets/logo.png"
const Logo = () => {
	const style = {'margin-left':'20px'};
  return (
   
        <img style={style} src={LogoImage} alt='logo' width={67} />
        
  )
}

export default Logo
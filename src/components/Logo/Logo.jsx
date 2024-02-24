import React from 'react'
import LogoImage from "../../assets/logo.png"
const Logo = () => {
	const style = {'padding-left':'32px'};
  return (
   
        <img style={style} src={LogoImage} alt='logo' width={67} />
        
  )
}

export default Logo
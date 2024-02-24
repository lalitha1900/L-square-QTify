import React from 'react'
import LogoImage from "../../assets/logo.png"
const Logo = () => {
	const style = {'padding-left':'32px'};
  return (
    <div>
        <img style={style} src={LogoImage} alt='logo' width={67} />
        </div>
  )
}

export default Logo
import React from 'react';

import pagelogo from "./../logo.svg";

const HeaderLogo = () => {
  return (
    <a className='hlogo' href="/">
      <img src={pagelogo} alt="test"/>
    </a>
  )
}

export default HeaderLogo
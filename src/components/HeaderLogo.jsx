import React from 'react';

import pagelogo from "./../logo.svg";

const HeaderLogo = () => {
  return (
    <a className='hlogo' href="/">
      <img src={pagelogo}/>
    </a>
  )
}

export default HeaderLogo
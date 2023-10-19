import React from 'react';
import css from '../css/style.css';

const Header = () => {
  return (
    <>
    <header className="container-fluid fw-bold text-white d-flex justify-content-between">
    <p className="header_mail"><i className="bi bi-envelope">
    </i>&nbsp;&nbsp;buisnessbhupendra@gmail.com
    </p>
    <p className="header_call">
    <i className="bi bi-telephone"></i>&nbsp;&nbsp;+91&nbsp;6***4-20**3
    </p>
    </header>
    </>
  );
};

export default Header

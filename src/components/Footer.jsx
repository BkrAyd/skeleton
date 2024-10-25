import React from 'react'
import "../components/Footer.css"
import designSvg from "../assets/design.svg"

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://www.linkedin.com/in/bekir-aydoğan-305421309/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <h2 className="brand">{"Bekir AYDOĞAN"}</h2>
      </a>
      <img
        src={designSvg}
        alt="design"
        style={{ width: "40px", margin: "0  25px 0 10px" }}
      />
      <span>Copyright FC</span>
    </div>
  )
}

export default Footer
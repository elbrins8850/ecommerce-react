/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Nav, Container, Navbar } from "react-bootstrap";
import logo from '../assets/Assets/logo.png';
import icon from '../assets/Assets/cart_icon.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbarr = () => {
  const [menu,setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="allpage" >
        <Container  className="scoundpage">
          <Navbar.Brand href="#home">
            <header>
         <Link to={'/'} style={{display: "flex"}}>
         <div className="alla">
         <img src={logo} alt="img"/>
            <p>SHOPPER</p>
         </div>
         </Link>
            </header>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="color" />
          <Navbar.Collapse id="responsive-navbar-nav " className="all">
            <Nav className="me-auto links">
              <ul>
                <li onClick={()=>{setMenu("shop")}}>
                  <a href="#"><Link to={'/'}>Shop</Link>  {menu==="shop"? <hr/> :<></>}</a>
                    
                </li>
                <li onClick={()=>{setMenu("mens")}}>
                  <a href="#"><Link to={'/men'}>Men</Link>   {menu==="mens"? <hr/> :<></>}</a>
                  
                </li>
                <li onClick={()=>{setMenu("womens")}}>
                  <a href="#"> <Link to={'/womens'}>Women</Link>  {menu==="womens"? <hr/> :<></>}</a>
                  
                </li>
                <li onClick={()=>{setMenu("kids")}}>
                  <a href="#"> <Link to={'/kids'}>Kids</Link>  {menu==="kids"? <hr/> :<></>}</a>
                  
                </li>
              </ul>
            </Nav>
            <Nav className="three-cont"> 

            
            <Link to={'/signUp'}>
              
            <a href="#" className="bttn">Sign up</a>
              </Link>
              <a eventKey={2} href="#memes" className="icon-cart">
                <Link to={'/cart'}>
                
                <img src={icon} alt="icon"/>
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;

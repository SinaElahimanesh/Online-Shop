import { Badge } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHome } from "'../../react-icons/ai"
import { useState } from "react";
import "./navbar.css";
import Cookies from 'universal-cookie';
import { resetProducts } from "../redux/cartRedux";
const cookies = new Cookies();


const Container = styled.div`
  height: 60px;
  top: 0;
  max-width: 100%;
  overflow: hidden;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 13px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 50px;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
};

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
};

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
};

/* Event Listeners */

const func = (e) => {
  toggle.addEventListener("click", toggleMenu, false);
  for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
    }
    item.addEventListener("keypress", toggleItem, false);
  }
  document.addEventListener("click", closeSubmenu, false);
};

console.log(cookies.get('username') !== undefined)

  return (

    <nav className="topnav" id="myTopnav">
      <ul class="menu">
      {cookies.get('username') === undefined ? <div></div> : <Link to="/cart" style={{color: '#fff'}}><li class="item cart"><AiOutlineShoppingCart size={23}/></li></Link>}

        <li class="logo"><a href="/">Poosha</a></li>
        <a href="#contact" class="item" >???????? ???? ????</a>
        <a href="/#gallery" class="item" >??????????</a>
        <a href="/#about" class="item" >?????? ??????????</a>

          <a href="/#category"  data-bs-toggle="dropdown" aria-expanded="false" id="dropdownMenuLink" class="item" >???????? ???????? ????????????</a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="" href="/products/men">????????????</a>
          <a class="" href="/products/women">??????????</a>
          <a class="" href="/products/child">????????????</a>
        </ul>
        <a href="/" class="item" >????????</a>
        {/* <li class="item"><a href="/" >????????</a></li> */}
        {cookies.get('username') === undefined ? <a href="/login" class="item">????????</a> : <a href="#" class="item">{cookies.get('username')}</a>}
        {cookies.get('username') !== undefined ? <a href='#' class="item item-logout" class="item" onClick={() => {
               cookies.remove('username', { path: '/' });
               resetProducts();
               window.localStorage.clear(); 
               window.location.reload();
          }}>???????? ???? ???????? ????????????</a>:<div></div>}
        {/* <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li> */}
        

        <a href="javascript:void(0);" class="icon">
          <i style={{color: "#fff"}} class="fa fa-bars" onClick={() => {
             var x = document.getElementById("myTopnav");
             if (x.className === "topnav") {
               x.className += " responsive";
             } else {
               x.className = "topnav";
             }
          }}></i>
        </a>

      </ul>
    </nav>
  );
};

export default Navbar;

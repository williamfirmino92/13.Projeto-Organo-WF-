/* eslint-disable import/no-anonymous-default-export */
import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <br />
      <Link to="/">
        <i className="fa fa-home"></i> Início
      </Link>
      <Link to="/users">
        <i className="fa fa-users"></i> Usuários
      </Link>
      <Link to="/">
        <i className="fa fa-database"></i> Produtos
      </Link>
      <Link to="/">
        <i className="fa fa-play"></i> Agenda
      </Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/">
        <i className="fa fa-circle"></i> Sair
      </Link>
    </nav>
  </aside>
);

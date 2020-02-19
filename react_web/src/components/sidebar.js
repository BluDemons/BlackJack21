/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header";

//const API_URL = "http://localhost:5000/cine/persona";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personas: []
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const image = require("../assets/BlackJackF.gif");
    return (
      <div className="relative">
        <div className=" mt-0 fixed shadow-xl bg-white flex flex-wrap  items-center justify-between sm:hidden md:w-64 z-10 py-4 px-6 md:inline-fixed md:block md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between mx-auto">
          <Link to="/">
            <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span className="mr-2">Salir</span>
              <i className="far fa-arrow-alt-circle-left" />
            </button>
          </Link>
          <div
            className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap h-32 text-sm uppercase font-bold p-4 mt-4"
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%"
            }}
          >
            <span
              className="font-semibold text-xl tracking-tight text-black"
              style={{ backgroundImage: `uri${image}` }}
            ></span>
          </div>
          <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded">
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link to="/home">
                  <span className="cursor-pointer px-2 py-1 active:bg-gray-600 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                    <i className="fas fa-dice mr-2 "></i>
                    <span className="mx-2">Inicio</span>
                  </span>
                </Link>
              </li>
              <li className=" items-end"></li>
            </ul>
          </div>
          {/* <div className="text-green-500">
              {personas.map(element=>(
                <h1 key={element.id} className="text-xl text-green-500">{element.nombre}</h1>
              ))}
          </div> */}
        </div>
      </div>
    );
  }
}

export default Sidebar;

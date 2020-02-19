import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Grafica from "./grafica";
import axios from "axios";
import {Link} from "react-router-dom"

const API = "http://localhost:5000/cine/";


class Inicio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      table_header: {
        pelicula: "Película",
        precio:"Precio Unitario",
        boletos: "# de Boletos",
        total:"Total Recaudado"
      },
      sala_movie: [],
      compras:[],
      pelicula: "",
      precio:"",
      boletos: "",
      total:""
    };
  }

  componentDidMount() {
    //traer cartelera del API
    axios
      .get(API + "query3")
      .then(response => {
        this.setState({ sala_movie: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });
    //traer compras del API
    axios
      .get(API + "query")
      .then(response => {
        this.setState({ compras: response.data.datos });
      })
      .catch(error => {
        console.log(error);
      });
  }


  deleteData = value => {
    axios.delete(`${API + "sala_movie"}?id=${value}`, {
      data: { id: value }
    });
    window.location.assign("http://localhost:3000/home");
  };

  deleteDataReporte = value => {
    axios.delete(`${API + "compra"}?id=${value}`, {
      data: { id: value }
    });
    window.location.assign("http://localhost:3000/home");
  };

  render() {
    const { sala_movie } = this.state;
    const {compras} = this.state;
    const image = require("../assets/balck.jpg");
    return (
      <div>
        <div className=" bg-fixed pt-6 pb-8" style={{ backgroundImage: `url(${image})`,backgroundRepeat:"no-repeat", backgroundSize:"100%"}}>
        <Link to="/">
            <button className="bg-white ml-10 text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span className="mr-2">Salir</span>
              <i className="far fa-arrow-alt-circle-left" />
            </button>
          </Link>
          <div className=" sm:ml-6 sm:mr-6 pt-6 pb-8 flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="bg-white border-t border-b sm:rounded sm:border shadow">
                <div className="border-b">
                  <div className="flex justify-between px-6 -mb-px">
                    <h3 className="text-blue-dark py-4 font-normal text-2xl">
                      Cartelera
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" sm:ml-6 sm:mr-6 pt-6 pb-8 flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="bg-white border-t border-b sm:rounded sm:border shadow">
                <div className="border-b">
                  <div className="flex justify-between px-6 -mb-px">
                    <h3 className="text-blue-dark py-4 font-normal text-lg">
                      Reporte de Compras
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="text-center px-6 py-4">
                    <div className=" flex-grow flex-no-shrink ">
                      <table className="w-full text-md bg-white shadow-md rounded mb-4">
                        <thead className="border-b">
                          <tr>
                            <th className="text-left p-3 px-5">
                              {this.state.table_header.pelicula}
                            </th>
                            <th className="text-left p-3 px-5">
                              {this.state.table_header.precio}
                            </th>
                            <th className="text-left p-3 px-5">
                              {this.state.table_header.boletos}
                            </th>
                            <th className="text-left p-3 px-5">
                              {this.state.table_header.total}
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-orange-100 bg-gray-100">
                            <td>
                              {compras.map(element => (
                                <p className="p-2 pr-6 text-justify" key={element.id}>
                                  {" "}
                                  {element.titulo}{" "}
                                </p>
                              ))}
                            </td>
                            <td>
                              {compras.map(element => (
                                <p className="p-2 px-5 text-center" key={element.id}>
                                  {"$"}
                                  {element.precio}{" "}
                                </p>
                              ))}
                            </td> 
                            <td>
                              {compras.map(element => (
                                <p className="p-2 px-5 text-center" key={element.id}>
                                  {" "}
                                  {element.cantidad}{" "}
                                </p>
                              ))}
                            </td>                            
                            <td>
                              {compras.map(element => (
                                <p className="p-2 px-5 text-justify-left" key={element.id}>
                                  {"$"}
                                  {element.total}{" "}
                                </p>
                              ))}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" sm:ml-6 sm:mr-6 pt-6 pb-8 flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="bg-white border-t border-b sm:rounded sm:border shadow">
                <div className="border-b">
                  <div className="flex justify-between px-6 -mb-px">
                    <h3 className="text-blue-dark py-4 font-normal text-lg">
                      Gráfica Estadística
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="text-center px-6 py-4">
                    <div className="">
                      <div className=" flex-grow flex-no-shrink ">
                        <Grafica />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;

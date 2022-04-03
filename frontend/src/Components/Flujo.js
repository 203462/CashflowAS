import React from "react";
import axios from "axios";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Clasificacion = [
  {
    Clasificacion: "Ingresos",
  },
  {
    Clasificacion: "Gastos",
  },
];
class Flujo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ObjetoCategoria: [],
      ObjetoFlujo: [],
      id_categoria: null,
      categoria: null,
      sub_categoria: null,
      es_ingreso: null,
      descripcion: "",
      cantidad: 0,
    };
  }
  componentDidMount() {
    this.getFlujo();
    this.getCategoria();
  }
  getFlujo = () => {
    let url = "http://localhost:3001/api/flujos";
    axios.get(url).then((response) => {
      this.setState({
        ObjetoFlujo: response.data,
      });
    });
  };
  getCategoria = () => {
    let url = "http://localhost:3001/api/categorias";
    axios.get(url).then((response) => {
      this.setState({
        ObjetoCategoria: response.data,
      });
    });
  };
  postFlujo = () => {
    let url = "http://localhost:3001/api/flujos";
    var postData = {
      categoria: this.state.categoria,
      sub_categoria: this.state.sub_categoria,
      id_categoria: this.state.id_categoria,
      es_ingreso: this.state.es_ingreso,
      descripcion: this.state.descripcion,
      cantidad: this.state.cantidad,
      fecha: new Date().toLocaleDateString(),
    };
    console.log(postData.fecha);
    let flag = true;
    flag = this.comprobacionDatos(flag);
    if (flag) {
      axios
        .post(url, postData, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          console.log(response);
          alert("Registro creado");
          window.location.reload();
        });
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };
  validacion(valor) {
    if (valor.data[0] === 1) {
      return "Ingreso";
    } else return "Salida";
  }

  fecha(fecha) {
    return fecha.substring(0, 10);
  }
  selectId(e) {
    if (e.target.value !== "-1") {
      axios
        .get("http://localhost:3001/api/categorias/" + e.target.value)
        .then((res) => {
          console.log(res.data);
          this.setState({
            id_categoria: e.target.value,
            categoria: res.data[0].categoria,
            sub_categoria: res.data[0].subcategoria,
          });
        });
    }
  }
  comprobacionDatos(flag) {
    console.log(this.state.es_ingreso);
    let alerta = "";
    if (this.state.id_categoria === null || this.state.id_categoria === -1) {
      flag = false;
      alerta += "Datos no validos\n";
    }
    if (this.state.es_ingreso === null) {
      flag = false;
      alerta += "Datos no validos\n";
    }
    if (!this.state.descripcion) {
      flag = false;
      alerta += "Datos no validos\n";
    }
    if (!this.state.cantidad) {
      flag = false;
      alerta += "Datos no validos\n";
    }
    if (!flag) {
      alert(alerta);
    }
    return flag;
  }
  render() {
    return (
      <div>
        <Nav />
        
        <div className="div-center">
          <div>
            <br/>
          <h3>Flujo de Efectivo</h3>
            <h3>Selecciona el movimiento</h3>
            <select
              name="es_ingreso"
              id="seles_ingreso"
              onClick={(e) =>
                e.target.value === "0"
                  ? this.setState({ es_ingreso: 1, id_categoria: null })
                  : e.target.value === "1"
                  ? this.setState({ es_ingreso: 0, id_categoria: null })
                  : e.target.value === "-1"
                  ? this.setState({ es_ingreso: null, id_categoria: null })
                  : null
              }
            >
              <option value={-1}>Tipo de movimiento</option>
              {Clasificacion.map((item, i) => (
                <option key={"clasificacion" + i} value={i}>
                  {item.Clasificacion}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div>
            <h4>selecciona la categoria</h4>
            <select
              name="id_categoria"
              id="selid_categoria"
              onClick={(e) => {
                this.selectId(e);
              }}
            >
              <option value={-1}>Seleccione una categoria</option>
              {this.state.ObjetoCategoria.map((value, index) => {
                if (
                  (this.state.ObjetoCategoria[index].categoria === "INGRESO" ||
                    this.state.ObjetoCategoria[index].categoria ===
                      "Ingreso") &&
                  this.state.es_ingreso === 1
                ) {
                  return (
                    <option
                      key={index}
                      value={this.state.ObjetoCategoria[index].id}
                    >
                      {value.categoria + "/" + value.subcategoria}
                    </option>
                  );
                }
                if (
                  (this.state.ObjetoCategoria[index].categoria ===
                    "COSTO-VENTA" ||
                    this.state.ObjetoCategoria[index].categoria ===
                      "GASTO-AOC") &&
                  this.state.es_ingreso === 0
                ) {
                  return (
                    <option
                      key={index}
                      value={this.state.ObjetoCategoria[index].id}
                    >
                      {value.categoria + "/" + value.subcategoria}
                    </option>
                  );
                }
              })}
            </select>
          </div>
          <br />
          <div>
            <h4>Descripcion</h4>
            <input
              type="text"
              id="txtDescripcion"
              name="descripcion"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <h4>Cantidad</h4>
            <input
              type="number"
              id="txtCantiad"
              name="cantidad"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={this.postFlujo}
          >
            Submit
          </button>
        </div>
        <div className="container  pt-5">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Categoria</th>
                <th scope="col">Sub-categoria</th>
                <th scope="col">ingreso/egreso</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {this.state.ObjetoFlujo.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.categoria}</td>
                    <td>{value.sub_categoria}</td>
                    <td>{this.validacion(value.es_ingreso)}</td>
                    <td>{value.descripcion}</td>
                    <td>{value.cantidad}</td>
                    <td>{value.fecha}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Flujo;

import axios from "axios";
import React from "react";

class ReporteBanco extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ObjetoIndicadores: [],
      descrip: [],
      array: [],
      mes: "",
      semFinal: "",
    };
  }
  componentDidMount() {
    this.getIndicadores();
    this.cargarMes();
  }

  cargarMes(){
    this.setState({
      mes: this.props.mes
    })
  }
  getIndicadores = () => {
    let url = "http://localhost:3001/api/indicadores";
    axios.get(url).then((response) => {
      this.setState({
        ObjetoIndicadores: response.data,
      });
      let objeto = {
        razon: "",
        sem1: 0,
        sem2: 0,
        sem3: 0,
        sem4: 0,
        mes: "",
        tipo_registro: "",
      };
      this.state.ObjetoIndicadores.map((value, index) => {
        // if (objeto.razon !== value.descrip) {
          if (objeto.razon !== "") {
            this.state.array.push({
              razon: objeto.razon,
              sem1: objeto.sem1,
              sem2: objeto.sem2,
              sem3: objeto.sem3,
              sem4: objeto.sem4,
              mes: objeto.mes,
              tipo_registro: objeto.tipo_registro,
            });
          }
          objeto.razon = value.descrip;
          objeto.mes = value.mes;
          objeto.sem1 = 0;
          objeto.sem2 = 0;
          objeto.sem3 = 0;
          objeto.sem4 = 0;
          objeto.tipo_registro = "";
        // }
        objeto.tipo_registro = value.tipo_registro;
        switch (value.sem) {
          case 1:
            objeto.sem1 = value.monto;
            break;
          case 2:
            objeto.sem2 = value.monto;
            break;
          case 3:
            objeto.sem3 = value.monto;
            break;
          case 4:
            objeto.sem4 = value.monto;
            break;

          default:
            break;
        }
      });
      this.state.array.push({
        razon: objeto.razon,
        sem1: objeto.sem1,
        sem2: objeto.sem2,
        sem3: objeto.sem3,
        sem4: objeto.sem4,
        mes: objeto.mes,
        tipo_registro: objeto.tipo_registro,
      });
      this.setState({
        array: this.state.array,
      });
    });
  };
  
  suma(num_semana) {
    let suma = 0;
    switch (num_semana) {
      case 1:
        this.state.array.map((value, index) => {
          if (
            value.mes === this.state.mes &&
            value.tipo_registro === "Bancos"
          ) {
            suma = suma + Number(value.sem1);
          }
        });
        break;
      case 2:
        this.state.array.map((value, index) => {
          if (
            value.mes === this.state.mes &&
            value.tipo_registro === "Bancos"
          ) {
            suma = suma + Number(value.sem2);
          }
        });
        break;
      case 3:
        this.state.array.map((value, index) => {
          if (
            value.mes === this.state.mes &&
            value.tipo_registro === "Bancos"
          ) {
            suma = suma + Number(value.sem3);
          }
        });
        break;
      case 4:
        this.state.array.map((value, index) => {
          if (
            value.mes === this.state.mes &&
            value.tipo_registro === "Bancos"
          ) {
            suma = suma + Number(value.sem4);
          }
        });
        break;
    }
    return suma;
  }
  render() {
    return (
      <div>
        <div className="container  pt-5">
          <h1 className="text-center">Reporte Bancos</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">semana 1</th>
                <th scope="col">semana 2</th>
                <th scope="col">semana 3</th>
                <th scope="col">semana 4</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {this.state.array.map((value, id) => {
                if (
                  value.mes === this.state.mes &&
                  value.tipo_registro === "Bancos"
                ) {
                  return (
                    <tr key={id}>
                      <td>{value.razon}</td>
                      <td>{"$ " + value.sem1}</td>
                      <td>{"$ " + value.sem2}</td>
                      <td>{"$ " + value.sem3}</td>
                      <td>{"$ " + value.sem4}</td>
                      <td>{"$ " + value.sem4}</td>
                    </tr>
                  );
                }
              })}
              <tr>
                <td>Total:</td>
                <td>{"$ " + this.suma(1)}</td>
                <td>{"$ " + this.suma(2)}</td>
                <td>{"$ " + this.suma(3)}</td>
                <td>{"$ " + this.suma(4)}</td>
                <td>{"$ " + this.suma(4)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ReporteBanco;

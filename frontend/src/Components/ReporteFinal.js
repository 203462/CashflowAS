import React from 'react';
import Factura from './ReporteFlujo';
import ReporteCuentasCobrar from './ReporteCuentasCobrar';
import ReporteCuentasPagar from './ReporteCuentasPagar';
import ReporteBancos from './ReporteBanco';
import { Link } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Nav from './Nav';


const Mes = [
  {
    Mes: "Enero",
  },
  {
    Mes: "Febrero",
  },
  {
    Mes: "Marzo"
  },
  {
    Mes: "Abril",
  },
  {
    Mes: "Mayo",
  },
  {
    Mes: "Junio"
  },
  {
    Mes: "Julio",
  },
  {
    Mes: "Agosto",
  },
  {
    Mes: "Septiembre"
  },
  {
    Mes: "Octubre",
  },
  {
    Mes: "Noviembre",
  },
  {
    Mes: "Diciembre"
  }
];
export default class ReporteFinal extends React.Component {

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input, { windowWidth: input.scrollWidth, windowHeight: input.scrollHeight, })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({});
        let pageHeight = pdf.internal.pageSize.height

        pdf.addImage(imgData, 'PNG', 0, 0, 200, pageHeight);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
      ;
  }
  constructor(props) {
    super(props);
    this.state = {
      mes: ""
    };
  }

  reload(e) {
    this.setState({ mes: this.cambioMes(e) })
    //window.location.reload();
  }
  cambioMes(e) {
    let resultado;
    switch (e.target.value) {
      case "0":
        resultado = "Enero";
        break;
      case "1":
        resultado = "Febrero";
        break;
      case "2":
        resultado = "Marzo";
        break;
      case "3":
        resultado = "Abril";
        break;
      case "4":
        resultado = "Mayo";
        break;
      case "5":
        resultado = "Junio";
        break;
      case "6":
        resultado = "Julio";
        break;
      case "7":
        resultado = "Agosto";
        break;
      case "8":
        resultado = "Septiembre";
        break;
      case "9":
        resultado = "Octubre";
        break;
      case "10":
        resultado = "Noviembre";
        break;
      case "11":
        resultado = "Diciembre";
        break;
      default:
        resultado = null;
        break;
    }
    return resultado;
  }
  render() {
    if (this.state.mes !== "") {
      return (
          <div>
              <Nav />
              <div id='divToPrint' className=''>


                  <ReporteBancos mes={this.state.mes}></ReporteBancos>
                  <ReporteCuentasCobrar mes={this.state.mes}></ReporteCuentasCobrar>
                  <ReporteCuentasPagar mes={this.state.mes}></ReporteCuentasPagar>
                  <Factura mes={this.state.mes}></Factura>
                  
              </div>
              <button onClick={this.printDocument}>Print</button>
          </div>


      )
    } else {
      return (
        <div className='div-center'>
          <Nav />
          <h3 className='pt-5'>Seleciona un mes <br/>para generar el reporte</h3>
          <h2 className="pt-5">
            <select
              name="mes"
              id="selMes"
              onChange={(e) => this.reload(e)}
              
            >
              <option value={-1}>Mes</option>
              {Mes.map((item, i) => (
                <option key={"mes" + i} value={i}>
                  {item.Mes}
                </option>
              ))}
            </select>
          </h2>
        </div>
      )
    }



  }
}

import Nav from "./Nav";
import { useState } from "react";

const Indicadores = () => {
  const [indicador, setIndicador] = useState({
    sem: NaN,
    mes: null,
    descrip: "",
    monto: "",
    tipo_registro: null,
  });

  const Registro = [
    {
      Registro: "Cuentas por Cobrar",
    },
    {
      Registro: "Cuentas por Pagar",
    },
    {
      Registro: "Bancos",
    },
  ];
  const Mes = [
    {
      Mes: "Enero",
    },
    {
      Mes: "Febrero",
    },
    {
      Mes: "Marzo",
    },
    {
      Mes: "Abril",
    },
    {
      Mes: "Mayo",
    },
    {
      Mes: "Junio",
    },
    {
      Mes: "Julio",
    },
    {
      Mes: "Agosto",
    },
    {
      Mes: "Septiembre",
    },
    {
      Mes: "Octubre",
    },
    {
      Mes: "Noviembre",
    },
    {
      Mes: "Diciembre",
    },
  ];
  const NSemana = [
    {
      NSemana: "1",
    },
    {
      NSemana: "2",
    },
    {
      NSemana: "3",
    },
    {
      NSemana: "4",
    },
  ];

  const crearIndicador = () => {
    //Url backend
    let url = "http://localhost:3001/api/indicadores";
    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(indicador),
    };
    if (
      tipo_registro === null ||
      sem === NaN ||
      descrip === "" ||
      mes === null ||
      monto === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    } else {
      fetch(url, requestInit)
        .then((response) => {
          alert("Registro Guardado");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const setTipoR = (e) => {
    let resultado;
    switch (e.target.value) {
      case "0":
        resultado = "Cuentas por Cobrar";
        break;
      case "1":
        resultado = "Cuentas por Pagar";
        break;
      case "2":
        resultado = "Bancos";
        break;
      default:
        resultado = null;
        break;
    }
    setIndicador({
      ...indicador,
      [e.target.name]: resultado,
    });
  };

  const setSem = (e) => {
    setIndicador({
      ...indicador,
      [e.target.name]: Number(e.target.value) + 1,
    });
  };
  const setMes = (e) => {
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
    setIndicador({
      ...indicador,
      [e.target.name]: resultado,
    });
  };

  const handleChange = (e) => {
    setIndicador({
      ...indicador,
      [e.target.name]: e.target.value,
    });
  };
  let { sem, mes, descrip, monto, tipo_registro } = indicador;
  return (
    <div >
      <Nav />
      <h1>Indicadores</h1>
      <div className="div-center">
      <div>
        <h2>Periodo</h2>
        <select name="sem" id="sem" onChange={setSem}>
          <option value={null}>Numero de Semana</option>
          {NSemana.map((item, i) => (
            <option key={"sem" + i} value={i}>
              {item.NSemana}
            </option>
          ))}
        </select>
        <text>{"\t"}</text>
        <select name="mes" id="selMes" onChange={setMes}>
          <option value={null}>Mes</option>
          {Mes.map((item, i) => (
            <option key={"mes" + i} value={i}>
              {item.Mes}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2>Razón Social</h2>
        <input
          type="text"
          id="txtdescrip"
          name="descrip"
          onChange={handleChange}
        />
      </div>
      <div>
        <h2>Cantidad</h2>
        <input
          type="number"
          id="txtMonto"
          name="monto"
          onChange={handleChange}
        />
      </div>
      <div>
        <h2>Tipo de registro</h2>
          <select name="tipo_registro" id="selRegistro" onChange={setTipoR}>
            <option value={-1}>Elige una opcion</option>
            {Registro.map((item, i) => (
              <option key={"registro" + i} value={i}>
                {item.Registro}
              </option>
            ))}
          </select>      
      </div>
      <br/>
      <div>
        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={crearIndicador}
        >
          Submit
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default Indicadores;

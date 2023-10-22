import { useEffect, useState } from "react"
import "./App.css"

function App() {

  const [data, setData] = useState([]);
  const [entrada, setEntrada] = useState('19.8.4.2');
  
  function getDataInput(evento) {
    setEntrada(evento.target.value);
  };

  useEffect(() => {
    fetch(`http://ipwho.is/${entrada}`)
      .then (res => res.json())
      .then (data => {setData(data); console.log(data)})
      
  }, [entrada]);

  return (
    <>
      <form className="form">
        <label className="form__label" htmlFor="">Introdusca una direccion IP</label>
        <input className="form__input" onChange={getDataInput} type="text" placeholder="Ej: 1.8.4.2" />
      </form>
      {data.success ? 
      <div className="div__informacion">
        <section className="section__titutlo">
          <h1 className="section__titutlo__h1"><span>Pais:</span> {data.country}</h1>
          <img width="28px" src={data.flag.img} alt="" />
        </section>
        <p><span>Ciudad:</span> {data.city}</p>
        <p><span>Latitud:</span> {data.latitude}</p>
        <p><span>Longitud:</span> {data.longitude}</p>
      </div> : <p className="p__error">Direcion IP invalida</p>}
    </>
  )
}

export default App

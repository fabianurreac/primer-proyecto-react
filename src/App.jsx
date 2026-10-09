import "./App.css";
import Encabezado from "./components/Encabezado";
import Sidebar from "./components/Sidebar";
import Tarjeta from "./components/Tarjeta";
import PiePagina from "./components/PiePagina";
import Presentacion from "./components/Presentacion";

function App() {
  const programa = "Analisis y Desarrollo de Software";
  return (
    <>
    <div className="layout">
      <Encabezado />
      <Sidebar />
      <main className="contenido">
        <h2>Bienvenidos al programa {programa}</h2>
        <Presentacion />
        <section className="tarjetas">
          <Tarjeta />
          <Tarjeta />
          
          <Tarjeta />
        </section>
      </main>
      <PiePagina />
      </div>
    </>
  )
}

export default App;

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
          <Tarjeta
            icono="⚛️" 
            titulo="React"
            descripcion="Herramienta de Javascript para construir interfaces con componentes"
            horas={120}
            destacada={true}
          />
          <Tarjeta
            icono="⚡" 
            titulo="Vite"
            descripcion="Herramienta que crea, ejecuta y empaqueta el proyecto"
            horas={60}
            destacada={false}
          />
          <Tarjeta
            icono="🔍" 
            titulo="ESLint"
            descripcion="Revisa la calidad del código y encuentra errores sin ejecutarlo"
            horas={20}
            destacada={true}
          />
        </section>
      </main>
      <PiePagina />
      </div>
    </>
  )
}

export default App;

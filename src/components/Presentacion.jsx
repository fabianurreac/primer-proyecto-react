function Presentacion(){
    const Nombre = 'Fabian Andres Urrea'
    const Barrio = 'Av falsa 123'
    const Telefono = 3186665552
    const Correo = 'furreac@sena.edu.co'

    return(
        <section className="presentar">
            <h2>Hola, Soy {Nombre}</h2>
            <p>vivo en el barrio {Barrio}</p>
            <h3>Mis datos son</h3>
            <ul>
                <li>correo: {Correo}</li>
                <li>telefono: {Telefono}</li>
            </ul>
            <p className="meta">Soy Desarrollador FullStack</p>

        </section>
    )
}

export default Presentacion
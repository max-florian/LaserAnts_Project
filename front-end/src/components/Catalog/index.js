import React, { useState } from "react";

const productosIniciales = [
    {codigo: 1, name: "Gyarados", image: "https://assets.findthemetaverse.com/1st%20edition%20emblem.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/1st%20edition%20emblem.jpg", active: true, valor: 100},
    {codigo: 2, name: "Bulbasaur", image: "https://m.media-amazon.com/images/I/51jPhiOpGEL._AC_.jpg", active: true, valor: 200},
    {codigo: 3, name: "Pikachu", image: "https://product-images.tcgplayer.com/fit-in/400x558/88101.jpg", active: true, valor: 300},
    {codigo: 4, name: "Charizard", image: "https://m.media-amazon.com/images/I/71nbfl-JklS._AC_SL1024_.jpg", active: true, valor: 300},
    {codigo: 5, name: "Chikorita", image: "https://m.media-amazon.com/images/I/51lT52ZV56L._AC_.jpg", active: true, valor: 200},
    {codigo: 6, name: "Alakazam", image: "https://lh3.googleusercontent.com/proxy/q4PUFQOLQu09Ne_lsNTQmre7iaocNHhQM_gfmNaSk6OWfu4UODTVf43600cR87djwb2HwSyBPaESgwB2DB36TubLFtf0HJdV6ukRD2V8Fy77ECLQMMsViwQWWQ2nBkqfC5e7bRKQ-JLT8QobQnIgmxkNbWapKgMA", active: true, valor: 200},
    {codigo: 7, name: "Blastoise", image: "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/203260.jpg", active: true, valor: 300}
];

const Header = () => {
    return <h1 style={{ marginTop: 65, color: "white" }}> Hola buenas</h1>
}

const Producto = (prop) => {
    const valor = prop.valor || 0;
    return (
        <div className="card w-100 text-white bg-dark">
            <img className="card-img-top h-50" src={prop.image} style={{minHeight:350, maxHeight:350}} alt=""/>
            <div className="card-header">{prop.name}</div>
            <div className="card-body">
                <h5 className="card-title text-center">${valor}</h5>
                <p className="text-center">Precio: ${(Math.round(32 * 100) / 100).toFixed(2)}</p>
                <div className="row justify-content-center">
                    <div className="col-8">
                    </div>
                </div>
                <div className="row">
                    <button disabled={!prop.active} className="btn btn-block btn-primary">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    )
};

const Productos = (prop) => {
    return (
        <div className="mx-4" style={{ padding: 20 }}>
            <div className="row">
                {prop.productos.map((item) => {
                    return (
                        <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-center mt-5">
                            <Producto 
                                key={item.codigo}
                                name={item.name}
                                image={item.image}
                                active={item.active}
                                value={item.value}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

const Catalog = () => {
    const [productos,setProductos] = useState(productosIniciales);
    return (
        <div>
            <Header/>
            <Productos productos={productos}/>
        </div>
    )
}

export default Catalog;
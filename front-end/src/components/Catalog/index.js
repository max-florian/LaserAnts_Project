import React, { useState } from "react";

const productosIniciales = [
    {codigo: 1, name: "card1", image: "https://assets.findthemetaverse.com/1st%20edition%20emblem.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/1st%20edition%20emblem.jpg", active: true, valor: 100},
    {codigo: 2, name: "card2", image: "https://cdn.shopify.com/s/files/1/1700/9483/articles/Blastoise_Unlimited_8493eae6-afc8-4d39-a9e8-1a846ab9321e_345x@2x.jpg?v=1519010261", active: true, valor: 200},
    {codigo: 3, name: "card3", image: "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/203260.jpg", active: true, valor: 300}
];

const Header = () => {
    return <h1> Hola buenas</h1>
}

const Producto = (prop) => {
    const valor = prop.valor || 0;
    return (
        <div className="card w-100">
            <img className="card-img-top h-50" src={prop.image} style={{minHeight:350, maxHeight:350}} alt=""/>
            <div className="card-body">
                <h5 className="card-title text-center">{prop.name} ${valor}</h5>
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
                <button className="btn btn-block btn-primary">
                    Proceder a Pago
                </button>
            </div>
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
import datos from "../json/productos.json";

export const getDatos = () => {

    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve(datos)
        },100)
    })
}

export const getDatosItem = (id) => {
    return new Promise((resolve, reject) => {
        const item = datos.find((e) => e.id === id)

        if(item) {
            resolve(item)
        }else{
            reject({
                error: "No se encontro el producto"
            })
        }
    })
}

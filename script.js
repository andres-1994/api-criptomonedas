let url = 'https://api.binance.com/api/v3/ticker/price'
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarDatos(datos))
        .catch(error => console.log(error))

const mostrarDatos = (data) =>
{
    let body = ''

    for (let i=0; i < data.length; i++) 
    {
        body +=  `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`
    }

    document.getElementById('data').innerHTML = body;
}
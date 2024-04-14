let estado = 'grande'

document.getElementById('recuadro').addEventListener('dblclick', (e) => {
    
    if (estado == 'grande') {
        e.target.style.width = '100px'
        e.target.style.height = '100px'
        estado = 'pequeño'
    } else {
        e.target.style.width = '800px'
        e.target.style.height = '100px'
        estado = 'grande'
    }

})
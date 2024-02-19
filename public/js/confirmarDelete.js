document.querySelector('#btnDelete').addEventListener('click', (e) => {
    e.preventDefault();
    const confirmacion = confirm('Esta seguro que quiere borrar este registro?');
    if(confirmacion){       

        console.log(window.location);
        // window.location.href = '/productos/delete/9'
    } 
})


const getUser = async (data = {}) => {
    const response = await fetch("/usuario/auth", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return response.json();
}

/*fetch("configuracion").then((response) => response.json()).then((data) => {
    const autho = data.autho;
    const clid = data.clid;
    const ruri = data.ruri;
});*/

fetch("configuracion").then((response) => response.json()).then((data) => {
    const autho = data.autho;
    const clid = data.clid;
    const ruri = data.ruri;
});

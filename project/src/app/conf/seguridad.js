const seguridad = () => {
  if (sessionStorage.getItem("name") && sessionStorage.getItem("username")) {
    console.log("Tiene usuario y contraseña");
  } else {
    console.log("NOOO Tiene usuario y contraseña");
    location.href = "/"; 
  }
};

function signOut() {
  console.log("saliendo..");
  sessionStorage.clear();
 };

seguridad();

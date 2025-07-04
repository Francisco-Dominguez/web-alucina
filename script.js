// Selecciona el botón del menú hamburguesa y el menú lateral
const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const menuVertical = document.querySelector('.menu-vertical');

// Agrega un evento de clic al botón del menú hamburguesa
menuHamburguesa.addEventListener('click', () => {
    // Alterna la clase 'activo' para abrir/cerrar el menú lateral
    menuVertical.classList.toggle('activo');
});








   // Función para cambiar la imagen principal slieder
   function changeImage(image) {
    let mainImage = document.getElementById("mainImage");

    if (image === 'image1') {
        mainImage.src = "https://via.placeholder.com/500x300?text=Imagen+1";
    } else if (image === 'image2') {
        mainImage.src = "https://via.placeholder.com/500x300?text=Imagen+2";
    } else if (image === 'image3') {
        mainImage.src = "https://via.placeholder.com/500x300?text=Imagen+3";
    }
}



document.addEventListener('DOMContentLoaded', function () {
    // Verifica si el usuario ya aceptó o rechazó las cookies
    if (localStorage.getItem('cookiesAccepted') === 'true') {
      document.getElementById('cookieBanner').style.display = 'none';
    } else {
      document.getElementById('cookieBanner').style.display = 'block';
    }
  
    // Función para aceptar las cookies
    document.getElementById('acceptCookies').onclick = function () {
      localStorage.setItem('cookiesAccepted', 'true');
      document.getElementById('cookieBanner').style.display = 'none';
    };
  
    // Función para rechazar las cookies
    document.getElementById('rejectCookies').onclick = function () {
      localStorage.setItem('cookiesAccepted', 'false');
      document.getElementById('cookieBanner').style.display = 'none';
    };
  
    // Función para configurar las cookies
    document.getElementById('configureCookies').onclick = function () {
      window.location.href = 'configurar-cookies.html'; // Redirige a una página de configuración de cookies
    };
  });

  

  document.cookie = "nombre=valor; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";


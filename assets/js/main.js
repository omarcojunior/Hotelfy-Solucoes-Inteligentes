function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    menu.classList.toggle("menu-active");
  }
  
  function toggleSubmenu(event) {
    event.preventDefault();
    var submenu = document.getElementById("mobileDropdown");
    submenu.classList.toggle("submenu-active");
  }
  
  function closeMenu(link) {
    var menu = document.getElementById("mobileMenu");
    menu.classList.remove("menu-active");
    setTimeout(function () {
      window.location.href = link.href;
    }, 300);
  }
  
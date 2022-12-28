
var nav_menu = document.getElementById('nav_menu')

nav_menu.style.maxHeight = '0px'

function menutoggle() {
  if (nav_menu.style.maxHeight == '0px') {
    nav_menu.style.maxHeight = '200px'
  } else {
    nav_menu.style.maxHeight = '0px'
  }
}
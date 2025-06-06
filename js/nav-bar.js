import { resaltaSiEstasEn } from "../lib/js/resaltaSiEstasEn.js"

export class NavBar extends HTMLElement {

 connectedCallback() {
  this.classList.add("md-navigation-bar")

  this.innerHTML = /* HTML */`
   <a ${resaltaSiEstasEn(["/index.html", "", "/"])} href="index.html">
    <span class="material-symbols-outlined">
location_on
</span>
    Inicio - GPS
   </a>

   <a ${resaltaSiEstasEn(["/ArchivosyCamara.html"])} href="ArchivosyCamara.html">
 <span class="material-symbols-outlined">
photo_library
</span>
    Archivos y Cámara
   </a>

   <a id="navbar" ${resaltaSiEstasEn(["/camera.html"])} href="camera.html">
    <span class="material-symbols-outlined">
photo_camera
</span>
    Cámara
   </a>

   <a ${resaltaSiEstasEn(["/ayuda.html"])} href="ayuda.html">
   <span class="material-symbols-outlined">
help
</span>
    Ayuda
   </a>`

 }

}

customElements.define("nav-bar", NavBar)
const modal = document.getElementById("modal");
const personas = {
    milena:{
        nombre:"Milena Cristancho",
        cargo:"Fundadora / Directora",
        imagen:"img/foto2.jpeg",
        texto:"Abogada, conciliadora en derecho, especialista en Derecho Administrativo y Derecho de Familia, con maestría en Gobierno y Gestión Pública. Directora ejecutiva y Fundadora de una iniciativa orientada al fortalecimiento de las mujeres, el liderazgo y el desarrollo social. Cuenta con amplia experiencia en el sector público y privado, brindando asesoría jurídica en contratación estatal, derecho administrativo, derecho de familia y mecanismos alternativos de solución de conflictos. Su ejercicio profesional se caracteriza por el compromiso con la ética, la excelencia y el servicio a la comunidad. Como empresaria y líder social, trabaja por la promoción de proyectos que generan oportunidades para las mujeres, fortalecen el tejido social y contribuyen al desarrollo de los territorios. Cree firmemente en el poder de la educación, el liderazgo y el emprendimiento como herramientas para transformar vidas."
    },

    gisell:{
        nombre:"Gisell Montaña",
        cargo:"Directora de comunicaciones y marketing",
        imagen:"img/foto1.jpeg",
        texto:"Como directora de comunicaciones y marketing de la fundación, Gisell Montaña C, lidero la estrategia digital y la proyección de nuestra marca social. Con experiencia en gestión de redes sociales y comunicación digital, me encargo de crear y fortalecer los canales que conectan nuestra misión con la comunidad. Mi enfoque está en impulsar la visibilidad, la transparencia y el impacto de la organización a través de contenidos creativos y comunicación cercana."
    },

    diego:{
        nombre:"Diego Torres",
        cargo:"Abogado Jurídico",
        imagen:"img/foto3.jpeg",
        texto:"Abogado especialista en Derecho Penal y especialista en Salud y Seguridad en el Trabajo. Profesional comprometido con la defensa de los derechos, la legalidad y la prestación de un servicio jurídico integral, orientado a la búsqueda de soluciones eficaces y al fortalecimiento de la confianza de sus clientes. Cuenta con experiencia en el sector público, brindando asesoría y acompañamiento jurídico en derecho de familia, penal, público y agrario. Su trayectoria se caracteriza por el rigor técnico, la ética y la responsabilidad en la protección de los derechos e intereses de las personas e instituciones. Su ejercicio profesional está enfocado en la prevención de riesgos legales, la resolución de conflictos y la aplicación del ordenamiento jurídico, promoviendo la justicia, la transparencia y el debido proceso."
    }
};
function abrirModal(persona){
    const datos = personas[persona]

    document.getElementById("modal-img").src = datos.imagen;
    document.getElementById("modal-nombre").textContent = datos.nombre;
    document.getElementById("modal-cargo").textContent = datos.cargo;
    document.getElementById("modal-texto").textContent = datos.texto;

    modal.style.display="flex";

}

function cerrarModal(){

    modal.style.display="none";

}

window.onclick = function(event){

    if(event.target == modal){

        modal.style.display="none";

    }
}
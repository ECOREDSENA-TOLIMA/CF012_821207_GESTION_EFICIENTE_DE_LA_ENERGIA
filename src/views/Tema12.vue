<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 12
      h1 Roles, responsabilidades y autoridades en la organización

    p.mb-5(data-aos="fade-right") Permiten mantener un orden dentro de la organización, tenga en cuenta:

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Roles, responsabilidades y autoridades en la organización
            p Para cumplir con las actividades exigidas por el SGEn se requiere por lo general, un grupo de personas encargadas por la alta dirección para tal fin.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema12/tema12-01.png', alt='')
              
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Roles, responsabilidades y autoridades en la organización
            p A este grupo de personas se les denomina Equipo de gestión de la energía y estará compuesto preferiblemente por personal de diversas áreas de la organización y de diferentes profesiones. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema12/tema12-02.png', alt='')
              
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Roles, responsabilidades y autoridades en la organización
            p El número de personas que integran el equipo de gestión de la energía puede variar, dependiendo del tamaño de la organización, la complejidad de los procesos, los recursos disponibles, y el alcance y los límites definidos para el SGEn.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema12/tema12-03.png', alt='')
        
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Roles, responsabilidades y autoridades en la organización
            p Cabe resaltar que, si la organización es de un tamaño muy pequeño, la norma acepta que una sola persona pueda asumir el rol de un equipo.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema12/tema12-04.png', alt='')
        
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Roles, responsabilidades y autoridades en la organización
            p Se recomienda que dentro del equipo de gestión de la energía existan personas con conocimientos específicos en el área de la energía, el mantenimiento, las operaciones, los proyectos, la ingeniería, los procesos productivos y los sistemas de gestión. Además, pueden ser parte del equipo personas de las áreas jurídicas, de calidad, del medioambiente, de las compras y de los recursos humanos. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema12/tema12-05.png', alt='')
        
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Roles, responsabilidades y autoridades en la organización
            p Los integrantes del equipo de gestión de la energía no tienen que estar necesariamente involucrados en actividades del SGEn de tiempo completo.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema12/tema12-06.png', alt='')
        
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Las funciones principales del equipo de gestión de la energía son:
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-angle-right 
                | Asegurar que el SGEn se ha establecido, implementado, mantenido y que se garantice su mejora continua.
              li.mb-0
                i.fas.fa-angle-right 
                | Garantizar que el SGEn cumpla con los requisitos de la norma de gestión de la energía.
              li.mb-0
                i.fas.fa-angle-right 
                | Ejecutar los planes de acción que permitan la mejora continua del desempeño energético.
              li.mb-0
                i.fas.fa-angle-right 
                | Informar a la alta dirección sobre el desempeño energético de la organización y el desempeño del SGEn.
              li
                i.fas.fa-angle-right 
                | Determinar y establecer los métodos para el control y operación eficaz del SGEn.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema12/tema12-07.png', alt='')
              

    p(data-aos="fade-right") Finalmente, se muestra un ejemplo de un equipo de gestión de la energía:

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-md-11.col-lg-10.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema12/tema12-08.png', alt='')
          figcaption Nota. Tomado de Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE. (2019). #[i Implementación de un sistema de gestión de la energía - Guía con base en la Norma ISO 50001:2018.] Segunda versión, p. 26. https://www1.upme.gov.co/DemandaEnergetica/EEIColombia/Guia_estructura_ISO50001.pdf

</template>

<script>
export default {
  name: 'Tema12',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

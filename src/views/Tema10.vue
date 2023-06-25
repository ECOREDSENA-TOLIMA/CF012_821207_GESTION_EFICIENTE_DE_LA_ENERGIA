<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 10
      h1 Liderazgo y compromiso
      
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-md-9.col-12(data-aos="fade-down")
        p En la planificación del sistema de gestión de la energía (SGEn) se debe reconocer las necesidades y expectativas de las partes interesadas y posteriormente, identificar los requisitos legales y otros requisitos que tienen relación con el SGEn y el desempeño energético de la organización. 
      .col-md-3.col-12(data-aos="fade-up")
        img.mb-0.position-relative(src="@/assets/curso/temas/tema10/tema10-01.svg")
      .col-12.mt-4(data-aos="fade-left")
        p ¿Por qué es tan importante el liderazgo y el compromiso de la alta dirección?

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 ¿Por qué es tan importante el liderazgo y el compromiso de la alta dirección?
            p Algunas de las medidas de eficiencia energética y mejora del desempeño energético implican cambios en los procesos productivos, cambios en la compra de energéticos, compra de materiales y equipos, y en general modificaciones en las plantas físicas de las organizaciones. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema10/tema10-02.png', alt='')
              
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 ¿Por qué es tan importante el liderazgo y el compromiso de la alta dirección?
            p  Para que este tipo de medidas puedan ser ejecutadas se requiere la aprobación y obtención por parte de la alta dirección de los recursos económicos, de planta física y personal para tal fin.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema10/tema10-03.png', alt='')
              
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 ¿Por qué es tan importante el liderazgo y el compromiso de la alta dirección?
            p Otras de las medidas para la mejora del desempeño energético implican el cambio de los hábitos de las personas al interior de la organización, lo cual puede ocasionar en algunos trabajadores una barrera debido al cambio cultural. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema10/tema10-04.png', alt='')
        
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 ¿Por qué es tan importante el liderazgo y el compromiso de la alta dirección?
            p En estos casos, la motivación y el apoyo por parte de la alta dirección es de vital importancia para que estos procesos de cambio se realicen de la mejor manera.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema10/tema10-05.png', alt='')
        
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Los compromisos de la alta dirección frente al SGEn son los siguientes:
            ul.lista-ul.mb-2
              li
                i.fas.fa-angle-right 
                | Asegurar que se han definido y establecido el alcance y los límites del SGEn.
              li
                i.fas.fa-angle-right 
                | Asegurar que se ha establecido la política energética, los objetivos y las metas energéticas.
              li
                i.fas.fa-angle-right 
                | Asegurar que se han incluido los requisitos del SGEn en la actividad de la organización.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema10/tema10-06.png', alt='')
        
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Los compromisos de la alta dirección frente al SGEn son los siguientes:
            ul.lista-ul.mb-2
              li
                i.fas.fa-angle-right 
                | Asegurar que los planes de acción resultantes de la implementación del SGEn sean aprobados y ejecutados.
              li
                i.fas.fa-angle-right 
                | Asegurar que se cuenta con la disponibilidad de los recursos requeridos para el SGEn.
              li
                i.fas.fa-angle-right 
                | Comunicar la importancia y la relevancia de la gestión eficiente de la energía dentro de la organización.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema10/tema10-07.png', alt='')
        
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Los compromisos de la alta dirección frente al SGEn son los siguientes:
            ul.lista-ul.mb-2
              li
                i.fas.fa-angle-right 
                | Promover la mejora continua del desempeño energético.
              li
                i.fas.fa-angle-right 
                | Asegurar la conformación de un equipo de gestión de la energía.
              li
                i.fas.fa-angle-right 
                | Asignar responsabilidades y autoridades para los integrantes del equipo de gestión de la energía.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema10/tema10-08.png', alt='')
              

</template>

<script>
export default {
  name: 'Tema10',
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

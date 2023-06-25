<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 11
      h1 Política energética

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-12(data-aos="fade-down")
        p Es el instrumento principal a través del cual la alta dirección de la organización declara de manera formal sus intenciones, directrices, compromisos y apoyo frente a la gestión de la energía y a la mejora del desempeño energético:
    
    figure.mt-0.pt-0.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
    
    p.mt-5(data-aos="fade-right") A continuación, se muestran algunos ejemplos de política energética:
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.px-3.pe-5
          h4.mb-0 A. Ejemplo 1 política de gestión de la energía: 

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-9.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema11/tema11-01.png', alt='')
          figcaption Nota. Tomada de CONUEE. (2016). #[i Manual para la implementación de un sistema de gestión de la energía.] Segunda edición, p. 31. https://www.gob.mx/cms/uploads/attachment/file/119159/Manual_SGEn_Conuee_2da_Edicion.compressed.pdf
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.px-3.pe-5
          h4.mb-0 B. Ejemplo 2 política energética: 

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-9.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema11/tema11-02.png', alt='')
          figcaption Nota. Tomada de Agencia de Sostenibilidad Energética. (2018). #[i Guía implementación de sistemas de gestión de la energía basados en ISO 50001.] Cuarta edición, p. 28. https://drive.google.com/file/d/1OBbFU1XgjCcUt4r8gt79EVubc-oLsHAY/view

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.px-3.pe-5
          h4.mb-0 C.  Ejemplo 3 política energética: 

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-9.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema11/tema11-03.png', alt='')
          figcaption Nota. Tomada de Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE. (2019). #[i Implementación de un sistema de gestión de la energía - Guía con base en la Norma ISO 50001:2018.] Segunda edición, p. 23. https://www1.upme.gov.co/DemandaEnergetica/EEIColombia/Guia_estructura_ISO50001.pdf


</template>

<script>
export default {
  name: 'Tema11',
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

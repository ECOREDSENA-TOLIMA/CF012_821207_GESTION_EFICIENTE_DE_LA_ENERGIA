<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4.intro(data-aos="zoom-out-down")
      .col-lg-5.col-12
        img(src="@/assets/curso/temas/intro.svg", alt="alt")
      .col-lg-7.col-12.pt-4.pr-4.texto
        p A nivel mundial los sistemas de gestión son usados como una herramienta para que cualquier tipo de organización alcance los objetivos de una manera óptima. Para el caso energético existe actualmente una normativa adoptada mundialmente para la implementación de los sistemas de gestión de la energía. En el presente componente formativo se presentarán inicialmente las características de los sistemas de gestión a nivel general y el ciclo PHVA. Posteriormente, se entrará en contacto con los requisitos y la metodología planteados por la norma para los sistemas de gestión de la energía.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

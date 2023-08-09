<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Este componente, se enfoca en las principales características de los sistemas de gestión de energía, teniendo en cuenta el ciclo PHVA como herramienta para la mejora continua. También se exploran los paradigmas del modelo energético a nivel nacional y empresarial, con lo cual puede establecerse los beneficios al llevar a la implementación dichos sistemas de gestión de energía, a la vez que se analizan las diferentes normas determinadas para este proyecto. Es necesario abordar no sólo la estructura del sistema, sino su terminología, el contexto organizacional en el cual se implementa, y los requisitos legales, sin olvidar el alcance y los límites que puedan estar presentes, bien sea por la misma política energética, o por las responsabilidades y roles que se gestan al interior de las organizaciones. Recordando siempre que estos elementos son fundamentales y su relación con la gestión energética posibilita un enfoque integrado y sistemático. 
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

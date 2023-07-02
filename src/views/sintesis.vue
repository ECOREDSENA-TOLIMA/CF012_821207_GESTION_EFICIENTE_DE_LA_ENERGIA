<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El mapa conceptual sobre las características de los sistemas de gestión de energía presenta un enfoque central en el panorama general de los sistemas de gestión y el ciclo PHVA, que se ramifica en las generalidades de los sistemas de gestión, el ciclo PHVA y la certificación. A su vez, se exploran los paradigmas del modelo energético a nivel nacional y desde las empresas y organizaciones. Se destaca la importancia de los sistemas de gestión de la energía (SGEn) y los beneficios de su implementación. Además, se aborda la familia de normas asociadas a la gestión de la energía y se examina la estructura y terminología utilizada en los SGEn. También se consideran el contexto de la organización, las partes interesadas y sus requisitos, el alcance y límites del sistema, el liderazgo y compromiso, la política energética, así como los roles, responsabilidades y autoridades en la organización. 
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

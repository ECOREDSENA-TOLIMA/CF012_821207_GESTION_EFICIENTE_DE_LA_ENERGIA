<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El contenido se enfoca en las características de los sistemas de gestión de energía, abordando el panorama general de estos sistemas y el ciclo PHVA como enfoque de mejora continua. También se exploran los paradigmas del modelo energético a nivel nacional y empresarial. Se destacan los beneficios de implementar sistemas de gestión de energía y se analiza la familia de normas asociadas a su gestión. Se abordan aspectos como la estructura, terminología, contexto organizacional, partes interesadas, requisitos legales y expectativas, alcance y límites del sistema, liderazgo, política energética, roles y responsabilidades en la organización. En resumen, se cubren los elementos fundamentales relacionados con la gestión de energía en un enfoque integrado y sistemático.
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
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

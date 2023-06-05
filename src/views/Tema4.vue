<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Beneficios de la implementación de los sistemas de gestión de la energía

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-12
        p Es indispensable tener en cuenta qué beneficios trae la implementación de los sistemas de energía, se trata de:
        p La implementación de los Sistemas de Gestión de la Energía (SGEn) permite a las organizaciones múltiples beneficios y también ayudan al cumplimiento de las metas energéticas estratégicas a nivel país. 
        p A continuación, se describen algunos de los beneficios clasificados por la tres dimensiones o paradigmas del modelo energético:


    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down")
      .row.justify-content-center.align-items-center(titulo="Seguridad energética")
        .col-md-4.col-12
          figure
            img(src='@/assets/curso/temas/tema4/tema4-01.png', alt='Seguridad energética')
        .col-md-8.col-12
          ul.lista-ul.mb-4
            li
              i.fas.fa-angle-right
              | Identificar las diferentes fuentes y la cantidad de energía utilizadas por la organización para su actividad.
            li
              i.fas.fa-angle-right
              | Reconocer en dónde, de qué forma y en qué cantidad se consume la energía. Además de identificar cuáles son los mayores consumidores.
            li 
              i.fas.fa-angle-right
              | Gestionar los contratos de compra de los energéticos para garantizar el suministro y la calidad del servicio. 
            li 
              i.fas.fa-angle-right
              | Mantener un registro de todas las actividades de la organización con respecto al cumplimiento de los objetivos y las metas energéticas.
            li 
              i.fas.fa-angle-right
              | Identificar y evaluar alternativas de fuentes de energía.
            li 
              i.fas.fa-angle-right
              | Gestionar la demanda de los energéticos en la organización.

      .row(titulo="Cambio climático")
        .col-md-4.col-12
          figure
            img(src='@/assets/curso/temas/tema4/tema4-02.png', alt='Cambio climático')
        .col-md-8.col-12
          ul.lista-ul.mb-4
            li
              i.fas.fa-angle-right
              | Reducir la huella de carbono de la organización, debido a la disminución en las emisiones de gases de efecto invernadero (GEI) originadas por el uso y el consumo de la energía.
            li
              i.fas.fa-angle-right
              | Integrar las acciones encaminadas al cumplimiento de los objetivos y metas energéticas, con las definidas en las políticas y los sistemas de gestión ambiental de la organización.
            li
              i.fas.fa-angle-right
              | Identificar y evaluar el uso de fuentes de energía con menos emisiones de GEI.
            li
              i.fas.fa-angle-right
              | Aumentar la toma de conciencia de los empleados, los proveedores y los clientes de la organización respecto al uso racional y eficiente de los recursos naturales.

      .row(titulo="Competitividad")
        .col-md-4.col-12
          figure
            img(src='@/assets/curso/temas/tema4/tema4-03.png', alt='Competitividad')
        .col-md-8.col-12
          ul.lista-ul.mb-4
            li
              i.fas.fa-angle-right
              | La metodología establecida se puede aplicar a empresas u organizaciones de cualquier tamaño, actividad, complejidad, ubicación geográfica, cultura organizacional, sin importar los tipos de productos o servicios que desarrolle.
            li
              i.fas.fa-angle-right
              | Reducir los costos de los productos y los servicios de la organización al implementar estrategias de ahorro y eficiencia energética.
            li
              i.fas.fa-angle-right
              | Involucrar a la alta dirección de la organización en la toma de decisiones estratégicas en el área de la energía. 
            li
              i.fas.fa-angle-right
              | Identificar los costos energéticos de la organización.
            li
              i.fas.fa-angle-right
              | Gestionar los precios de compra de los energéticos y sus alternativas.
            li
              i.fas.fa-angle-right
              | Generar una cultura organizacional orientada a la eficiencia energética, la mejora del desempeño energético y al uso racional de los recursos.
            li
              i.fas.fa-angle-right
              | Promover las mejores prácticas en la operación y mantenimiento de los procesos de la organización.
            li
              i.fas.fa-angle-right
              | Identificar y priorizar las actividades encaminadas a la mejora en el desempeño energético.
            li
              i.fas.fa-angle-right
              | Mantener registros de las operaciones, los procedimientos, los resultados de la implementación de proyectos y demás actividades que tienen relación con la energía en la organización.
            li
              i.fas.fa-angle-right
              | Crear y hacer seguimiento a los indicadores que permitan evaluar el desempeño energético de la organización.

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-md-8.col-12
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/template/youtube.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Sistemas de Gestión de la Energía (SGEn)
                  p.mb-0.text-small En el siguiente video se muestra algunos de los impactos y beneficios de los Sistemas de Gestión de la Energía (SGEn) de acuerdo con Bureau Veritas Argentina
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=hmxEKsQg0OI" target="_blank")
                    span Ver video
                    i.fas.fa-play


</template>

<script>
export default {
  name: 'Tema4',
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

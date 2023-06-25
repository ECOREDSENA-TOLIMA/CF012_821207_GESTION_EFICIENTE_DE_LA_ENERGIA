<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1 Familia de normas asociadas a la gestión de la energía

    .row.justify-content-center.align-items-center.mb-4.color-acento-contenido(data-aos="fade-left")
      .col-md-9.col-12(data-aos="fade-down")
        p A causa de la expedición por parte de la Organización Internacional de Normalización (ISO) de la Norma ISO 50001 en su versión 2018, el Instituto Colombiano de Normas Técnicas y Acreditación (ICONTEC) adoptó la nueva versión y publicó la Norma Técnica Colombiana (NTC) ISO 50001 versión 2019. Actualmente esta es la norma adoptada en el país para la implementación de los SGEn.
        p.text-small A su vez existe una familia de normas que complementan el ejercicio de la implementación de los SGEn, y son las siguientes:
      .col-md-3.col-12(data-aos="fade-up")
        img.mb-0.position-relative(src="@/assets/curso/temas/tema5/tema5-01.svg")

    .row.justify-content-center.align-items-center.mb-4
      .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-left")
          p.titulo.pb-0.mb-0 <b>Tabla 3.</b> <i>Normas para la implementación de los SGEn</i>
      .col-12.px-0(data-aos="fade-down")
        .tabla-a.color-acento-botones 
          table
            caption Normas para la implementación de los SGEn
            thead
              tr
                th(style="width:175px") Norma
                th(style="width:250px") Nombre
                th Descripción
            tbody
              tr
                td.text-center NTC ISO 50001:2019
                td Sistemas de gestión de la energía. Requisitos con orientación para su uso
                td 
                  p De acuerdo con ICONTEC “esta norma especifica los requisitos para establecer, implementar, mantener y mejorar un sistema de gestión de la energía (SGEn). El resultado previsto es permitir a la organización seguir un enfoque sistemático para lograr la mejora continua del desempeño energético y del SGEn.”
              tr
                td.text-center NTC ISO 50002:2018
                td Auditorías energéticas. Requisitos con orientación para su uso
                td 
                  p De acuerdo con ICONTEC “esta norma internacional especifica los requisitos del proceso para llevar a cabo una auditoría energética en relación con el desempeño energético. Es aplicable a todo tipo de establecimientos y organizaciones y a todas las formas y usos de la energía. Esta norma internacional especifica los principios para llevar a cabo auditorías energéticas, los requisitos para los procesos comunes durante estas auditorías y los entregables para estas.”
              tr
                td.text-center NTC ISO 50003:2016
                td Sistemas de gestión de la energía. Requisitos para los organismos que realizan la auditoría y la certificación de los (SGEn)
                td
                  p De acuerdo con ICONTEC “esta norma específica los requisitos para la competencia, la coherencia y la imparcialidad en la auditoría y certificación de los sistemas de gestión de la energía (SGEn) para los organismos que prestan estos servicios.”
              tr
                td.text-center ISO 50004:2020
                td Sistemas de gestión de la energía. Orientación para la implementación, el mantenimiento y la mejora de un sistema de gestión de la energía de la Norma ISO 50001
                td
                  p De acuerdo con ISO “este documento proporciona una orientación práctica cuando se implementan los requisitos de un sistema de gestión de la energía (SGEn) basado en la Norma ISO 50001. Le muestra a la organización cómo adoptar un enfoque sistemático para lograr la mejora continua en el SGEn y el desempeño energético.”
              tr
                td.text-center GTC-ISO 50006:2017
                td Sistemas de Gestión de la energía. Medición del desempeño energético, usando líneas de base energética (LBE) e indicadores de desempeño energético (IDE). Principios generales y lineamientos
                td
                  p De acuerdo con ICONTEC, esta Guía Técnica Colombiana (GTC) “proporciona la orientación para las organizaciones sobre cómo establecer, usar y mantener Indicadores de Desempeño Energético (IDE) y Líneas de Base Energética (LBE), como parte de la medición del desempeño energético 2.”
              tr
                td.text-center GTC-ISO 50015:2019
                td Sistemas de gestión de la energía. Medición y verificación del desempeño energético de organizaciones. Principios generales y recomendaciones
                td
                  p De acuerdo con ICONTEC, esta Guía Técnica Colombiana (GTC) “establece los principios generales y las recomendaciones para el proceso de medición y verificación del desempeño energético de una organización o de sus partes. Esta norma puede ser utilizada de forma independiente o en combinación con otras normas o protocolos y puede ser utilizada en todo tipo de energía.”
              tr
                td.text-center ISO 50047:2016
                td Ahorro de energía. Determinación del ahorro energético en las organizaciones
                td
                  p De acuerdo con ISO, esta norma describe enfoques para la determinación del ahorro de la energía en las organizaciones. Puede ser utilizado por todas las organizaciones, tengan o no un sistema de gestión de la energía como ISO 50001.
              tr
                td.text-center ISO 50049:2020
                td Métodos de cálculo para la eficiencia energética y las variaciones del consumo de energía a nivel de país, región y ciudad
                td
                  p De acuerdo con ISO, este documento proporciona las directrices sobre los métodos para analizar los cambios en la eficiencia energética y el consumo de energía, y para medir el progreso de la eficiencia energética para países, regiones y ciudades. Se compone de tres métodos de cálculo diferentes:
                  ul.lista-ul.mb-4
                    li
                      i.fas.fa-angle-right 
                      | Evaluación de los efectos de la estructura en la variación de la intensidad energética.
                    li
                      i.fas.fa-angle-right 
                      | Cálculo de índices de eficiencia energética.
                    li
                      i.fas.fa-angle-right 
                      | Análisis de la descomposición de la variación del consumo de energía.
                  p Este documento es aplicable para proporcionar una evaluación estadística agregada para un país, región o ciudad. No se aplica al cálculo de cambios en el consumo de energía o en la eficiencia energética a nivel de consumidor individual (por ejemplo, hogares, organizaciones, empresas).
              tr
                td.text-center NTC 6269:2018
                td Sistemas de gestión de la energía. Norma de competencia laboral. Experto en implementación de los sistemas de gestión de la energía
                td
                  p Esta norma técnica es de carácter nacional, pero se basa en los requisitos de acuerdo con las normas de gestión de la energía establecidas anteriormente. 
                  p De acuerdo con ICONTEC, “esta norma establece los requisitos mínimos de competencia laboral y los resultados esperados que debe cumplir un experto en implementación del sistema de gestión de la energía bajo los lineamientos de la Norma ISO 50001. Esta norma aplica a las personas que trabajan como expertos en la implementación del sistema de gestión de la energía en cualquier tipo de organización, independiente de su tamaño, tipo, localización o nivel de madurez.”


</template>

<script>
export default {
  name: 'Tema5',
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

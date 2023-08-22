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
    
    .h4.text-custom-a(data-aos="fade-left") Política energética

    PasosA.color-secundario.mb-5(tipo="n")(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-md-7.mb-4.mb-md-0
          ul.lista-ul.mb-4
            li(data-aos="fade-down")
              i.lista-ul__vineta
              | La política energética se debe declarar, de tal forma que todos los miembros de la organización la entiendan de manera fácil y la puedan aplicar en sus actividades laborales.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema11/tema11-08.png', alt='')

      .row.justify-content-center.align-items-center
        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema11/tema11-09.png', alt='')
        .col-md-7
          ul.lista-ul.mb-4
            li(data-aos="fade-down")
              i.lista-ul__vineta
              | Adicionalmente, debe cumplir con los siguientes requisitos exigidos en el numeral 5.2 de la Norma ISO 50001:2019 según el Instituto Colombiano de Normas Técnicas y Certificación (2019):

      .row.justify-content-center.align-items-center
        .col-12.mb-4.mb-md-0
          ol.lista-ul.mb-4
            li.mb-0(data-aos="fade-down")
              span.text-bold a. 
              | Debe ser apropiada a la naturaleza, el tamaño y los propósitos de la organización.
            li.mb-0(data-aos="fade-down")
              span.text-bold b. 
              | Debe proporcionar el marco para el establecimiento y revisión de los objetivos y las metas energéticas de la organización.
            li.mb-0(data-aos="fade-down")
              span.text-bold c. 
              | Debe incluir el compromiso de garantizar el acceso y la disponibilidad de la información, y de los recursos necesarios que permita el cumplimiento de los objetivos y las metas energéticas de la organización.
            li.mb-0(data-aos="fade-down")
              span.text-bold d. 
              | Debe incluir el compromiso del cumplimiento de los requisitos legales y otros requisitos que tienen relación con el uso de la energía, el consumo de la energía y la eficiencia energética.
            li.mb-0(data-aos="fade-down")
              span.text-bold e. 
              | Debe incluir el compromiso de la organización para la mejora continua del desempeño energético y del sistema de gestión de la energía.
            li.mb-0(data-aos="fade-down")
              span.text-bold f. 
              | Debe apoyar la compra o adquisición de productos eficientes energéticamente y servicios de eficiencia energética, que afecten de manera positiva el desempeño energético de la organización.
            li.mb-0(data-aos="fade-down")
              span.text-bold g. 
              | Debe apoyar las actividades de diseño que permitan la mejora del desempeño energético.



    p.mt-5.mb-5(data-aos="fade-right") A continuación, se muestran algunos ejemplos de política energética:

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 4.
        span <em>Ejemplo 1 política de gestión de la energía.</em>
      img.d-md-block(src="@/assets/curso/temas/tema11/tema11-01.png" data-aos="fade-left") 
      figcaption Nota. Tomada de CONUEE. (2016). #[i Manual para la implementación de un sistema de gestión de la energía.] Segunda edición, p. 31. #[a(href="https://www.gob.mx/cms/uploads/attachment/file/119159/Manual_SGEn_Conuee_2da_Edicion.compressed.pdf" style="color:blue" target="_blank") https://www.gob.mx/cms/uploads/attachment/file/119159/Manual_SGEn_Conuee_2da_Edicion.compressed.pdf]
    
    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 5.
        span <em> Ejemplo 2 política energética.</em>
      img.d-md-block(src="@/assets/curso/temas/tema11/tema11-02.png" data-aos="fade-left") 
      figcaption Nota. Tomada de Agencia de Sostenibilidad Energética. (2018). #[i Guía implementación de sistemas de gestión de la energía basados en ISO 50001.] Cuarta edición, p. 28. #[a(style="color:blue" href="https://drive.google.com/file/d/1OBbFU1XgjCcUt4r8gt79EVubc-oLsHAY/view" target="_blank") https://drive.google.com/file/d/1OBbFU1XgjCcUt4r8gt79EVubc-oLsHAY/view]

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 6.
        span <em>Ejemplo 3 política energética.</em>
      img.d-md-block(src="@/assets/curso/temas/tema11/tema11-03.png" data-aos="fade-left") 
      figcaption Nota. Tomada de Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE. (2019). #[i Implementación de un sistema de gestión de la energía - Guía con base en la Norma ISO 50001:2018.] Segunda edición, p. 23. #[a(style="color:blue" href="https://www1.upme.gov.co/DemandaEnergetica/EEIColombia/Guia_estructura_ISO50001.pdf" target="_blank") https://www1.upme.gov.co/DemandaEnergetica/EEIColombia/Guia_estructura_ISO50001.pdf]

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

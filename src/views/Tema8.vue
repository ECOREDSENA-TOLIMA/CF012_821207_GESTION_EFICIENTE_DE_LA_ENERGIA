<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 8
      h1 Partes interesadas y requisitos
      
    .row.justify-content-center.align-items-center.mb-4.color-acento-contenido(data-aos="fade-left")
      .col-md-9.col-12(data-aos="fade-down")
        p En la planificación del sistema de gestión de la energía (SGEn) se debe reconocer las necesidades y expectativas de las partes interesadas y posteriormente, identificar los requisitos legales y otros requisitos que tienen relación con el SGEn y el desempeño energético de la organización. 
      .col-md-3.col-12(data-aos="fade-up")
        img.mb-0.position-relative(src="@/assets/curso/temas/tema8/tema8-01.svg")
      .col-12(data-aos="fade-left")
        p A continuación, vea de qué se trata cada una de ellas:

    Separador
    #t_8_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 8.1 Necesidades y expectativas de las partes interesadas
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-12(data-aos="fade-up")
        p De acuerdo con los términos y las definiciones de la norma, las partes interesadas están definidas como las organizaciones o personas que pueden afectar, ser afectadas o percibirse afectadas por una decisión o actividad.  Las partes interesadas en el contexto de un SGEn pueden clasificarse como:
        
    .row.justify-content-center.align-items-center.mb-5
      .col-md-5.col-lg-4.col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema8/tema8-02.svg', alt='')
      .col-md-7.col-lg-8.col-12
        ol.lista-ol--cuadro
          li(data-aos="fade-down")
            .lista-ol--cuadro__vineta
              span a
            | Internas a la organización, por ejemplo, algún área de la empresa como mantenimiento, administrativa, operaciones, comercial, logística, etc. 
          li(data-aos="fade-down")
            .lista-ol--cuadro__vineta
              span b
            | Externas a la organización, por ejemplo, los clientes de la empresa, los proveedores de los productos o los servicios, los proveedores de los energéticos, las entidades reguladoras, etc. 
        p(data-aos="fade-right") En esta etapa de la planificación de un SGEn la organización debe:
        ol.lista-ol--cuadro
          li(data-aos="fade-down")
            .lista-ol--cuadro__vineta
              span a
            | Identificar las partes interesadas (internas y externas) que son relevantes para el desempeño energético de la organización y para el funcionamiento del SGEn.
          li(data-aos="fade-down")
            .lista-ol--cuadro__vineta
              span b
            | Identificar y determinar los requisitos, necesidades y expectativas pertinentes para cada una de las partes interesadas.
          li(data-aos="fade-down")
            .lista-ol--cuadro__vineta
              span c
            | Determinar cuáles de las necesidades y expectativas identificadas se pueden satisfacer con el SGEn.

    p(data-aos="fade-right") A manera de ejemplo se muestra la siguiente tabla del resultado de algunas de las necesidades y expectativas identificadas en diferentes organizaciones. La norma no especifica que se deba llevar este tipo de tabla, ya que se deja a elección de la organización y se pueden utilizar otros recursos.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-left")
          p.titulo.pb-0.mb-0 <b>Tabla 9.</b> <i>Resultado de las necesidades y las expectativas en diferentes organizaciones</i>
      .col-12.px-0(data-aos="fade-down")
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th Parte interesada
                th(style="width:20%") Tipo
                th Necesidad / expectativa / requisito
                th ¿Se puede abordar mediante el SGEn?
            tbody
              tr
                td.text-center Gerencia general
                td.text-center Interna
                td Política de austeridad en el gasto.
                td Sí. El SGEn permitirá el control de los costos energéticos.
              tr
                td.text-center Coordinación ambiental
                td.text-center Interna
                td Metas y objetivos ambientales. Reducción de la huella de carbono de la organización.
                td Sí. El SGEn permitirá el cálculo, la reducción y el control de las emisiones de GEI.
              tr
                td.text-center Coordinación ambiental
                td.text-center Interna
                td Metas y objetivos ambientales. Uso de refrigerantes menos contaminantes.
                td Sí. El SGEn aborda los proyectos de cambio tecnológico de los equipos que usan refrigerantes contaminantes.
              tr
                td.text-center Departamento de compras
                td.text-center Interna
                td Definición de especificaciones técnicas de los equipos de aire acondicionado unitarios para las oficinas.
                td Sí. El SGEn permitirá definir los criterios de compra de los equipos que usan la energía.
              tr
                td.text-center Departamento de Operaciones Industriales
                td.text-center Interna
                td Disminución del consumo de energía eléctrica en la línea No. 3 de producción.
                td Sí. El SGEn permitirá la implementación de medidas de eficiencia energética y uso eficiente de la energía.
              tr
                td.text-center Gobierno Nacional
                td.text-center Externa
                td Ley 1955 de 2019. Artículo 292. Realización de auditorías energéticas en edificios de administraciones públicas.
                td Sí. A través de la implementación del SGEn se llevará a cabo la revisión energética equivalente a la auditoría energética. 
              tr
                td.text-center 
                td.text-center 
                td 
                td 
              tr
                td.text-center Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA)
                td.text-center Externa
                td Comunicado No. 400-2435-17. Requisitos a tener en cuenta en los expendios de carne y productos cárnicos comestibles.
                td Sí. El SGEn permitirá la implementación de medidas para el control de las variables de temperatura y humedad relativa con un uso eficiente de la energía.
              tr
                td.text-center Departamento de Recursos Humanos
                td.text-center Interna
                td Campaña de concientización sobre el uso racional de los recursos de la organización.
                td Sí. El SGEn permitirá el afianzamiento de la cultura de la eficiencia energética y el uso racional de la energía.

    p(data-aos="fade-right") Otros ejemplos para la identificación de las necesidades, las expectativas y los requisitos de las partes interesadas con referencia al sistema de gestión de la energía pueden ser:

    SlyderF.mt-5.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/tema8-03.svg' alt='')
        p.text-center Los clientes que tienen como requisito la compra de una certificación en SGEn.

      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/tema8-04.svg' alt='')
        p.text-center Si una empresa hace parte de un grupo empresarial internacional o nacional donde las directivas tienen como requisito la implementación del SGEn en todas sus sedes y filiales.

      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/tema8-05.svg' alt='')
        p.text-center Toda la legislación y la normatividad promulgada por los entes gubernamentales a nivel nacional, departamental o municipal, que involucran el desempeño energético de la organización.

      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/tema8-06.svg' alt='')
        p.text-center Reglamentos técnicos como RETIE, RETIQ, RETILAP, RETSIT, entre otros.

      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/tema8-07.svg' alt='')
        p.text-center Normatividad de carácter voluntario implementada en la empresa como el sistema de gestión de calidad, sistema de gestión ambiental, etc.

      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/tema8-08.svg' alt='')
        p.text-center Contratos y compromisos pactados con los comercializadores para la compra de la energía.

      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/tema8-09.svg' alt='')
        p.text-center Compromisos con la comunidad.


    Separador
    #t_8_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 8.2 Requisitos legales y otros requisitos
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-12(data-aos="fade-down")
        p Es importante tener en cuenta los requisitos legales y otros que además deben estar presentes:
        

    .tarjeta.tarjeta--azul.p-4.mb-5.mt-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-5.col-12.mb-4.mb-md-0
            p Una parte muy importante para el funcionamiento y operación de cualquier organización o empresa sea pública o privada es el cumplimiento de los requisitos legales establecidos por las diferentes autoridades y entes regulatorios.
          .col-md-6.col-lg-5.col-12
            figure
              img(src='@/assets/curso/temas/tema8/tema8-10.png', alt='')
              
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-5.col-12.mb-4.mb-md-0
            p Dichos requisitos legales se deben cumplir independientemente de si la empresa decide o no implementar un sistema de gestión de la energía, por ejemplo, para obtener el suministro de electricidad se tiene un contrato donde contemplan los derechos y las obligaciones del usuario, lo cual no depende de si la empresa tiene implementado el SGEn. 
          .col-md-6.col-lg-5.col-12
            figure
              img(src='@/assets/curso/temas/tema8/tema8-11.png', alt='')
              
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-5.col-12.mb-4.mb-md-0
            p En este caso, por poner un ejemplo, el cumplimiento del RETILAP afecta directamente en el SGEn para los casos en donde se plantea hacer un cambio de tecnología, cantidad o lugar de ubicación de las luminarias en un espacio de la empresa.
            p Por lo tanto, se puede afirmar que el cumplimiento del RETILAP influye en los planes de acción del SGEn para la eficiencia energética en el uso de energía para la iluminación artificial.
          
          .col-md-6.col-lg-5.col-12
            figure
              img(src='@/assets/curso/temas/tema8/tema8-12.png', alt='')
              
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-6.col-12.mb-4.mb-md-0
            p Además de los requisitos legales existen otros requisitos que la organización debe tener en cuenta y que pueden afectar el desempeño del SGEn. Un ejemplo de estos requisitos puede ser:
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span a
                | Circulares internas para el cumplimiento de metas de producción.
              li
                .lista-ol--cuadro__vineta
                  span b
                | Procedimientos internos de mantenimiento y operación.
              li
                .lista-ol--cuadro__vineta
                  span c
                | Compromisos pactados con clientes y proveedores.
              li
                .lista-ol--cuadro__vineta
                  span d
                | Metas y objetivos ambientales de la organización.
          .col-md-6.col-lg-6.col-12
            figure
              img(src='@/assets/curso/temas/tema8/tema8-13.png', alt='')
              
    p(data-aos="fade-left") Para la planeación del SGEn la organización debe:

    SlyderF.mt-5.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/tema8-14.svg' alt='')
        p.text-center Establecer un procedimiento para identificar y acceder a los requisitos legales y otros requisitos relacionados con el uso de la energía, consumo de la energía y la eficiencia energética de la organización.

      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/tema8-15.svg' alt='')
        p.text-center Determinar la forma en que los requisitos legales y otros requisitos tienen relación con el uso de la energía, el consumo de la energía y la eficiencia energética de la organización.

      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/tema8-16.svg' alt='')
        p.text-center Revisar a intervalos definidos el cumplimiento y mantener actualizados los requisitos legales y otros requisitos.

      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/tema8-17.svg' alt='')
        p.text-center Tener en cuenta los requisitos legales y otros requisitos en la planificación, la operación y la evaluación del SGEn.

      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/tema8-18.svg' alt='')
        p.text-center Determinar la persona o área responsable de la evaluación del cumplimiento del requisito.

      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/tema8-19.svg' alt='')
        p.text-center Determinar la forma en que se cumplen los requisitos.

      .tarjeta.tarjeta--azul.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/tema8-20.svg' alt='')
        p.text-center Determinar cómo se comunica el incumplimiento de algún requisito o cambios, debido a las nuevas normativas o directrices.

    p(data-aos="fade-left") Normalmente las organizaciones construyen una herramienta denominada matriz de requisitos legales y otros requisitos como una de las formas para organizar y documentar lo requerido por la norma del SGEn. A continuación, se muestra un ejemplo:

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-left")
          p.titulo.pb-0.mb-0 <b>Tabla 10.</b> <i>Matriz de requisitos legales y otros requisitos</i>
      .col-12.px-0(data-aos="fade-down")
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th Requisito
                th Nombre del requisito
                th Tema
                th Emisor / parte interesada
                th ¿Aplica para el SGEn?
                th Forma de cumplimiento
                th Responsable
                th Frecuencia / forma de revisión
            tbody
              tr
                td.text-center Reglamento Técnico de Etiquetado RETIQ.
                td.text-center Numeral 12.1.1.2.1. Eficiencias mínimas para comercialización.
                td.text-center Motores eléctricos trifásicos de inducción.
                td.text-center Ministerio de Minas y Energía.
                td.text-center Sí. Obligatorio
                td.text-center Instructivo compra de motores eléctricos.
                td.text-center Departamento de Compras.
                td.text-center Anual / verificación con responsables.
              tr
                td.text-center Ley 1955 de 2019.
                td.text-center Artículo 292. Realización de auditorías energéticas en edificios de administraciones públicas.
                td.text-center Gestión de la energía.
                td.text-center Congreso de la República.
                td.text-center Sí. Obligatorio por pertenecer al sector público.
                td.text-center Resultados del Informe de revisión energética (auditoría energética).
                td.text-center Departamento de Operaciones.
                td.text-center Anual / verificación con responsables.

</template>

<script>
export default {
  name: 'Tema8',
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

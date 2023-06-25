<template lang="pug">
.curso-main-container.pb-3.tema6
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 6
      h1 Estructura y terminología utilizada para los sistemas de gestión de la energía (SGEn)

    p(data-aos="fade-right") La referencia a nivel mundial para la implementación en sistemas de gestión de la energía (SGEn) es la Norma Internacional ISO 50001:2018. Para el caso colombiano la adaptación de la norma se denomina NTC ISO 50001:2019 y en esencia comparte todos los lineamientos de la norma internacional. Como la gestión de la energía hace parte del esquema de los sistemas de gestión definidos por la ISO, la metodología está basada en el Ciclo PHVA (#[span.color-acento-contenido planear, hacer, verificar y actuar]), con lo cual se garantiza la mejora continua y el mantenimiento del SGEn.

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-md-6.col-12(data-aos="fade-right")
        p De acuerdo con el Instituto Colombiano de Normas Técnicas y Certificación (2019) la Norma ISO 50001:2019 
        .bloque-texto-c.color-acento-contenido.p-4
          i.fas.fa-quote-right
          p.mb-2 especifica los requisitos para establecer, implementar, mantener y mejorar un sistema de gestión de la energía (SGEn). El resultado previsto es permitir a la organización seguir un enfoque sistemático para lograr la mejora continua del desempeño energético y del SGEn.
      .col-md-6.col-12.mt-2(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema6/tema6-01.png', alt='')

    Separador
    #t_6_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.1 Desempeño energético
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-12(data-aos="fade-up")
        p Antes de continuar con la estructura de los SGEn se requiere hacer énfasis en el concepto de desempeño energético:     
        
    figure.mt-4.pt-0.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      

    Separador
    #t_6_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.2 Estructura de los SGEn de acuerdo con la normativa
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-12(data-aos="fade-up")
        p La estructura de la norma para los sistemas de gestión de la energía se muestra a continuación:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="fade-down")
      .row.justify-content-center.align-items-center(titulo="Etapa del Ciclo PHVA: planear")
        .col-md-7.col-lg-8.col-12.mb-4.mb-md-0
          p Actividades para desarrollar de acuerdo con la norma
          ul.lista-ul.mb-2
            li
              i.fas.fa-angle-right 
              | Comprender a la organización y su contexto.
            li
              i.fas.fa-angle-right 
              | Identificar las necesidades y expectativas de las partes interesadas.
            li
              i.fas.fa-angle-right 
              | Determinar el alcance del sistema de gestión de la energía para la organización.
            li
              i.fas.fa-angle-right 
              | Obtener el apoyo y el compromiso de la alta dirección para el SGEn.
            li
              i.fas.fa-angle-right 
              | Determinar la política energética de la organización.
            li
              i.fas.fa-angle-right 
              | Identificar los roles, las responsabilidades y las autoridades en la organización frente al SGEn.
            li
              i.fas.fa-angle-right 
              | Identificar los riesgos y las oportunidades que puedan afectar el desempeño energético de la organización.
            li
              i.fas.fa-angle-right 
              | Determinar los objetivos, las metas energéticas y la planificación para alcanzarlos.
            li
              i.fas.fa-angle-right 
              | Realizar la revisión energética (auditoría energética).
            li
              i.fas.fa-angle-right 
              | Determinar los indicadores de desempeño energético (IDEn) y las líneas de base energética (LBEn).
        .col-md-5.col-lg-4.col-12
          figure
            img(src='@/assets/curso/temas/tema6/tema6-02.png', alt='')

      .row.justify-content-center.align-items-center(titulo="Etapa del Ciclo PHVA: hacer")
        .col-md-7.col-lg-8.col-12.mb-4.mb-md-0
          p Actividades para desarrollar de acuerdo con la norma
          ul.lista-ul.mb-2
            li
              i.fas.fa-angle-right 
              | Asegurar que el personal que trabaja para el SGEn tenga la competencia requerida.
            li
              i.fas.fa-angle-right 
              | Elaborar un plan de comunicación y sensibilización.
            li
              i.fas.fa-angle-right 
              | Establecer y diligenciar la documentación requerida para la operación del SGEn.
            li
              i.fas.fa-angle-right 
              | Implementar controles operacionales y de mantenimiento para la mejora del desempeño energético.
            li
              i.fas.fa-angle-right 
              | Incorporar los criterios de desempeño energético para la implementación del proyecto y las compras de equipos que consumen energía.
            li
              i.fas.fa-angle-right 
              | Identificar las oportunidades de mejora en la compra de los energéticos.
        .col-md-5.col-lg-4.col-12
          figure
            img(src='@/assets/curso/temas/tema6/tema6-03.png', alt='')

      .row.justify-content-center.align-items-center(titulo="Etapa del Ciclo PHVA: verificar")
        .col-md-7.col-lg-8.col-12.mb-4.mb-md-0
          p Actividades para desarrollar de acuerdo con la norma
          ul.lista-ul.mb-2
            li
              i.fas.fa-angle-right 
              | Realizar seguimiento, medición, análisis y evaluación del desempeño energético y del sistema de gestión de la energía.
            li
              i.fas.fa-angle-right 
              | Evaluar el cumplimiento de los requisitos legales y de otros requisitos.
            li
              i.fas.fa-angle-right 
              | Realizar las auditorías internas (no son las mismas auditorías energéticas).
            li
              i.fas.fa-angle-right 
              | Realizar la revisión del SGEn por parte de la alta dirección
        .col-md-5.col-lg-4.col-12
          figure
            img(src='@/assets/curso/temas/tema6/tema6-04.png', alt='')

      .row.justify-content-center.align-items-center(titulo="Etapa del Ciclo PHVA: actuar")
        .col-md-7.col-lg-8.col-12.mb-4.mb-md-0
          p Actividades para desarrollar de acuerdo con la norma
          ul.lista-ul.mb-2
            li
              i.fas.fa-angle-right 
              | Llevar a cabo acciones para el cierre de las no conformidades y mejorar continuamente el SGEn y el rendimiento energético.
        .col-md-5.col-lg-4.col-12
          figure
            img(src='@/assets/curso/temas/tema6/tema6-05.png', alt='')


    Separador
    #t_6_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.3 Terminología utilizada para los sistemas de gestión de la energía (SGEn)
    
    .row.justify-content-center.align-items-center.mb-4.color-acento-contenido(data-aos="fade-left")
      .col-md-9.col-12(data-aos="fade-down")
        p Conocer la terminología en el contexto de un SGEn permite interpretar de una mejor manera los lineamientos y los requisitos de la norma. De acuerdo con el Instituto Colombiano de Normas Técnicas y Certificación (2019) para una mejor comprensión de los términos se han dividido en las siguientes cinco categorías:
      .col-md-3.col-12(data-aos="fade-down")
        img.mb-0.position-relative(src="@/assets/curso/temas/tema5/tema5-01.svg")

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.px-3.pe-5
          h4.mb-0 A. Términos relacionados con la organización
    
    p(data-aos="fade-right") Dentro de este grupo se encuentran los términos y definiciones asociados con la organización o empresa. Ver tabla. 

    .row.justify-content-center.align-items-center.mb-4
      .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-left")
          p.titulo.pb-0.mb-0 <b>Tabla 4.</b> <i>Términos relacionados con la organización</i>
      .col-12.px-0(data-aos="fade-down")
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th(style="width:20%") Término
                th Definición
            tbody
              tr
                td.text-center Alcance del SGEn
                td 
                  p Grupo de actividades que una organización aborda a través de un sistema de gestión de la energía. El alcance del SGEn puede incluir varios límites y puede incluir las operaciones de transporte.
              tr
                td.text-center Alta dirección
                td 
                  p.mb-0 Persona o grupo de personas que dirige y controla una organización al más alto nivel.
                  p.mb-0 La alta dirección tiene el poder para delegar autoridad y proporcionar los recursos dentro de la organización.
                  p.mb-0 Si el alcance del sistema de gestión comprende solo una parte de la organización, entonces, la alta dirección se refiere a quienes dirigen y controlan esa parte de la organización.
                  p La alta dirección controla la organización como se define en el alcance del SGEn y en los límites del sistema de gestión de la energía.
              tr
                td.text-center Límite
                td
                  p.mb-0 Límites físicos u organizacionales, por ejemplo, un proceso, un grupo de procesos, un sitio, múltiples sitios bajo el control de una organización o la organización completa.
                  p La organización establece los límites de su SGEn.
              tr
                td.text-center Organización
                td
                  p.mb-0 Persona o grupo de personas que tienen sus propias funciones con responsabilidades, autoridades y relaciones para lograr sus objetivos.
                  p El concepto de organización incluye, entre otros, al trabajador independiente, la compañía, la corporación, la firma, la empresa, la autoridad, la sociedad, la organización benéfica o la institución, o parte o combinación de estos, se encuentren constituidas o no, públicas o privadas.
              tr
                td.text-center Parte interesada
                td
                  p Persona u organización que puede afectar, ser afectada o percibirse como afectada por una decisión o actividad.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.px-3.pe-5
          h4.mb-0 B. Términos relacionados con el sistema de gestión
    
    p(data-aos="fade-right") Dentro de esta categoría se encuentran los términos y definiciones asociados al sistema de gestión. Ver tabla

    .row.justify-content-center.align-items-center.mb-4
      .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-left")
          p.titulo.pb-0.mb-0 <b>Tabla 5.</b> <i>Términos relacionados con el sistema de gestión</i>
      .col-12.px-0(data-aos="fade-down")
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th(style="width:20%") Término
                th Definición
            tbody
              tr
                td.text-center Equipo de gestión de la energía
                td 
                  p.mb-0 Personas con responsabilidades y autoridad para la implementación eficaz de un sistema de gestión de la energía y para realizar las mejoras en el desempeño energético.
                  p El tamaño y la naturaleza de una organización y los recursos disponibles se toman en cuenta al determinar el tamaño del equipo de gestión de la energía. Una sola persona puede desempeñar el rol de un equipo.
              tr
                td.text-center Política
                td 
                  p Intenciones y dirección de una organización como las expresa formalmente su alta dirección.
              tr
                td.text-center Política energética
                td 
                  p Declaración de la organización de su intención o intenciones, dirección o direcciones y compromiso o compromisos globales relacionados con su desempeño energético, según lo expresado formalmente por la alta dirección.
              tr
                td.text-center Sistema de gestión
                td 
                  p.mb-0 Conjunto de elementos de una organización interrelacionados o que interactúan para establecer las políticas, los objetivos y los procesos para lograr estos objetivos.
                  p.mb-0 Un sistema de gestión puede abordar una o varias disciplinas.
                  p.mb-0 Los elementos del sistema incluyen la estructura de la organización, los roles y las responsabilidades, la planificación y la operación.
                  p En algunos sistemas de gestión, el alcance de un sistema de gestión puede incluir la totalidad de la organización, las funciones específicas identificadas de la organización, las secciones específicas identificadas de la organización, o una o más funciones a través de un grupo de organizaciones. El alcance de un SGEn incluye todos los tipos de energía dentro de sus límites.
              tr
                td.text-center Sistema de gestión de la energía, SGEn
                td 
                  p Sistema de gestión para establecer una política energética, los objetivos, las metas energéticas, los planes de acción y los procesos para alcanzar los objetivos y las metas energéticas.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.px-3.pe-5
          h4.mb-0 C. Términos relacionados con los requisitos
    
    p(data-aos="fade-right") Dentro de este grupo se encuentran los términos y definiciones vinculados con los requisitos. Ver tabla.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-left")
          p.titulo.pb-0.mb-0 <b>Tabla 6.</b> <i>Términos relacionados con los requisitos</i>
      .col-12.px-0(data-aos="fade-down")
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th(style="width:20%") Término
                th Definición
            tbody
              tr
                td.text-center Requisito
                td 
                  p Necesidad o expectativa establecida, generalmente implícita u obligatoria.
              tr
                td.text-center Conformidad
                td 
                  p Cumplimiento de un requisito.
              tr
                td.text-center No conformidad
                td 
                  p Incumplimiento de un requisito.
              tr
                td.text-center Acción correctiva
                td 
                  p Acción para eliminar la causa de una no conformidad y evitar que vuelva a ocurrir.
              tr
                td.text-center Información documentada
                td 
                  p.mb-0 Información que una organización tiene de controlar y mantener, y el medio que la contiene.
                  p La información documentada puede estar en cualquier formato o medio, y puede provenir de cualquier fuente.
              tr
                td.text-center Proceso
                td 
                  p.mb-0 Conjunto de actividades interrelacionadas o que interactúan, que transforma las entradas en salidas.
                  p El proceso relacionado con las actividades de una organización puede ser:
                  ul.lista-ul.mb-4
                    li
                      i.fas.fa-angle-right 
                      | Físico (por ejemplo, procesos que utilizan energía como la combustión) o
                    li
                      i.fas.fa-angle-right 
                      | De negocios o servicios (por ejemplo, completar una orden).
              tr
                td.text-center Seguimiento
                td 
                  p.mb-0 Determinación del estado de un sistema, un proceso o una actividad.
                  p En un sistema de gestión de la energía el seguimiento puede ser una revisión de los datos de la energía.
              tr
                td.text-center Auditoría
                td 
                  p Proceso sistemático, independiente y documentado para obtener evidencia de la auditoría y evaluarla de manera objetiva, con el fin de determinar el grado en que se cumplen los criterios de auditoría.
              tr
                td.text-center Contratar externamente
                td 
                  p Establecer un acuerdo mediante el cual una organización externa realiza parte de una función o proceso de una organización.


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.px-3.pe-5
          h4.mb-0 D. Términos relacionados con el desempeño
    
    p(data-aos="fade-right") Dentro de esta categoría se encuentran los términos y definiciones asociados al rendimiento y desempeño de la organización. Ver tabla.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-left")
          p.titulo.pb-0.mb-0 <b>Tabla 7.</b> <i>Términos relacionados con el desempeño</i>
      .col-12.px-0(data-aos="fade-down")
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th(style="width:20%") Término
                th Definición
            tbody
              tr
                td.text-center Medición
                td 
                  p Proceso para determinar un valor.
              tr
                td.text-center Desempeño
                td 
                  p Resultado medible.
              tr
                td.text-center Desempeño energético
                td 
                  p.mb-0 Resultados medibles relacionados con la eficiencia energética, el uso de la energía y el consumo de energía.
                  p El desempeño energético se puede medir con respecto a los objetivos de la organización, las metas energéticas y otros requisitos del desempeño energético.
              tr
                td.text-center Indicador de desempeño energético, IDEn.
                td 
                  p Medida o unidad de desempeño energético, según lo define la organización.
              tr
                td.text-center Valor del indicador de desempeño energético; valor del IDEn.
                td 
                  p Cuantificación del IDEn en un momento dado o durante un período de tiempo específico.
              tr
                td.text-center Mejora del desempeño energético
                td 
                  p Mejora en los resultados medibles de la eficiencia energética o del consumo de energía relacionada con el uso de la energía, comparada con la línea de base energética.
              tr
                td.text-center Línea de base energética, LBEn
                td 
                  p Referencia cuantitativa que proporciona la base para la comparación del desempeño energético.
              tr
                td.text-center Factor estático
                td 
                  p Factor identificado que impacta en forma significativa en el desempeño energético y que no cambia en forma rutinaria.
              tr
                td.text-center Variable relevante
                td 
                  p Factor cuantificable que impacta en forma significativa en el desempeño energético y cambia de forma rutinaria.
              tr
                td.text-center Normalización
                td 
                  p Modificación de los datos para tomar en cuenta los cambios del desempeño energético en condiciones equivalentes.
              tr
                td.text-center Riesgo
                td 
                  p.mb-0 Efecto de la incertidumbre.
                  p Un efecto es una desviación de lo esperado - positivo o negativo.
              tr
                td.text-center Competencia
                td 
                  p Capacidad para aplicar el conocimiento y las habilidades, con el fin de alcanzar los resultados previstos.
              tr
                td.text-center Objetivo
                td 
                  p.mb-0 Resultado a alcanzar.
                  p El objetivo se puede expresar de otras formas, por ejemplo, como el resultado deseado, un propósito, un criterio operacional, como un objetivo energético o mediante el uso de otras palabras con significado similar (por ejemplo, propósito, fin).
              tr
                td.text-center Eficacia
                td 
                  p Grado en el que se realizan las actividades planificadas y se obtienen los resultados planificados.
              tr
                td.text-center Meta energética
                td 
                  p Objetivo cuantificable de la mejora del desempeño energético.
              tr
                td.text-center Mejora continua
                td 
                  p Actividad recurrente para mejorar el desempeño. 

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      div.mt-2.col-12.d-flex.align-items-center.mb-4.mt-3.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
        div.p-0.position-relative   
          img.mb-0.position-relative(src="@/assets/curso/iconos/ico-01.svg")
        div.px-3.pe-5
          h4.mb-0 E. Términos relacionados con la energía
    
    p(data-aos="fade-right") Dentro de este grupo se encuentran los términos y definiciones relacionados con el tema energético. Ver tabla.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-left")
          p.titulo.pb-0.mb-0 <b>Tabla 8.</b> <i>Términos relacionados con la energía</i>
      .col-12.px-0(data-aos="fade-down")
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th(style="width:20%") Término
                th Definición
            tbody
              tr
                td.text-center Energía
                td 
                  p Electricidad, combustibles, vapor, calor, aire comprimido y otros medios similares.
              tr
                td.text-center Consumo de energía
                td 
                  p Cantidad de energía utilizada.
              tr
                td.text-center Eficiencia energética
                td 
                  p.mb-0 Proporción u otra relación cuantitativa entre un resultado de desempeño, servicio, productos, materias primas, o de energía y una entrada de energía.
                  p Eficiencia de conversión; energía requerida/energía consumida.
              tr
                td.text-center Uso de la energía
                td 
                  p.mb-0 Aplicación de la energía.
                  p Ejemplo: ventilación; iluminación; calefacción; enfriamiento; transporte; almacenamiento de datos; proceso de producción.
              tr
                td.text-center Revisión energética
                td 
                  p Análisis de la eficiencia energética, el uso de la energía y el consumo de energía, con base en los datos y otra información, orientada a la identificación de los usos significativos de la energía (USE) y de las oportunidades de mejora del desempeño energético.
              tr
                td.text-center Uso significativo de la energía, USE
                td 
                  p Uso de la energía que representa un consumo de energía sustancial y/o que ofrece un potencial considerable para la mejora del desempeño energético.

</template>

<script>
export default {
  name: 'Tema6',
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

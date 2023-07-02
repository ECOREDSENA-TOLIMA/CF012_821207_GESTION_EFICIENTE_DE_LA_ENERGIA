<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Panorama de los sistemas de gestión y ciclo PHVA
    .row.justify-content-center.align-items-center.mb-4.cajon.tarjeta.color-acento-botones(data-aos="fade-left")
      .col-md-4.col-12(data-aos="zoom-out-down")
        img.mb-0.position-relative(src="@/assets/curso/temas/tema1/tema1-01.svg")
      .col-md-8.col-12(data-aos="fade-down")
        p Para entender el significado de los sistemas de gestión es necesario conocer las bases de cada uno de los conceptos asociados a la gestión. En este capítulo se conocerán las generalidades de los sistemas de gestión, se hablará de la estructura básica de cualquier sistema de gestión denominada normalmente ciclo PHVA y finalmente, se descubrirá a qué se refiere cuando se habla de certificación en los sistemas de gestión.
    
    Separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 Generalidades de los sistemas de gestión
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-12
        p Para entender a qué se hace referencia cuando se habla de los sistemas de gestión, primero se debe conocer el significado de cada una de las palabras que lo componen, de la siguiente manera:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5(data-aos="fade-up")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-02.svg', alt='Sistema')
          
        h2.text-center Sistema
        p Es una agrupación de elementos que se encuentran relacionados entre sí de una manera ordenada para cumplir un objetivo común.
      .col-md.cajon.tarjeta.color-acento-contenido.p-5(data-aos="fade-down")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-03.svg', alt='Gestión')
          
        h2.text-center Gestión
        p Es una acción o conjunto de acciones que realiza un individuo o una organización para cumplir un objetivo.
    
    p.mt-5.mb-5(data-aos="fade-down") Como se puede observar, las anteriores definiciones tienen en común que están orientadas al cumplimiento de un objetivo. 
   
    .h3.mb-5(data-aos="fade-down") Concepto de organización 
    
    TabsC.color-acento-botones.mb-5(data-aos="fade-down")
      .py-3.py-md-4(titulo="Sistema de gestión")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Sistema de gestión
            p Es una herramienta compuesta de varias acciones ordenadas, que permite a todo tipo de organizaciones el cumplimiento a satisfacción de unos objetivos y metas definidos.
            p A pesar de que la realidad de cada organización y cada país es diferente, muchos de los procesos y procedimientos para la gestión establecidos en las empresas públicas y privadas son similares.       
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-16.png', alt='')
      .py-3.py-md-4(titulo="Objetivo del sistema de gestión")
        .row
          .col-md-6.mb-4.mb-md-0
            p Es decir, si se toma como ejemplo una empresa que produce vehículos en Colombia y una empresa dedicada a la misma actividad ubicada en España, posiblemente existan diferencias en la tecnología que usen para la fabricación de los autos, el número de autos producidos al mes, el número de empleados, el tamaño de las instalaciones físicas, etc.; sin embargo, tienen un objetivo en común: producir autos con la mayor calidad posible para satisfacer las necesidades de sus clientes.
            p Es así como a nivel mundial a través de los años se han creado organismos en donde participan expertos de todos los países para establecer una serie de procedimientos ordenados, basados en metodologías comprobadas, que permiten garantizar el cumplimiento de los objetivos de las empresas pertenecientes a los diferentes sectores y actividades económicas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-17.png', alt='')
    

    .row.justify-content-center.align-items-center.mt-4.mb-4(data-aos="fade-left")
      .col-12.mt-4
        p Como resultado de lo anterior se produce una serie de documentos llamados #[strong normas,] los cuales son emitidos por organismos de normalización reconocidos internacionalmente por la mayoría de los países.
        p A continuación, se describen dos de los organismos internacionales de normalización actualmente reconocidos:

    .row.justify-content-center.align-items-center.mt-4.mb-4
      .col-md-5.col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-05.svg', alt='ISO')
          figcaption Organización Internacional de Normalización (ISO)
      .col-md-5.col-12(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-06.svg', alt='IEC')
          figcaption Comisión Electrotécnica Internacional (IEC)
        

    .row.justify-content-center.align-items-center.mt-5.mb-5(data-aos="fade-right")
      .col-lg-7.mb-5.mb-lg-0
        p.border-p De acuerdo con la Organización Internacional de Normalización-ISO (2010) una #[strong norma] se define como:
        .bloque-texto-b.color-acento-contenido.p-texto.p-0
          .bloque-texto-b__texto.cajon
            i.fas.fa-quote-left.a
            p.mb-0 
              span documento establecido por consenso y aprobado por un organismo reconocido, que ofrece reglas, lineamientos o características de uso común y repetido para actividades o sus resultados, y que pretenden lograr un grado óptimo de orden dentro de un contexto dado.
            //p.mt-2.cierre - (p. 31).
            i.fas.fa-quote-right.b

      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema1/tema1-04.png", alt="- (p. 31).")

    .row.justify-content-center.align-items-center.mt-5.mb-4(data-aos="fade-left")
      .col-12
        p No deje de revisar el botón #[strong Recuerde y ¿Sabía qué?] para descubrir algo nuevo.

    .row 
      .col-lg-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema1/tema1-07.svg", alt="Recuerde y ¿Sabía qué?")
      .col.lg-8
        .tarjeta.p-0.cuadro-general(data-aos="fade-down")
          .row.justify-content-around.align-items-center
            .col-md-3.col-12.p-2.cuadro-1
              p.m-0.p-0.text-center #[strong Recuerde]
            .col-md-9.col-12.p-2
              p.text-small.m-3 Es importante tener en cuenta que la aplicación de la norma es voluntaria, excepto si se establece como un requisito por parte de los entes de regulación del Estado o alguna empresa en particular.
        .tarjeta.p-0.mt-2.cuadro-general(data-aos="fade-up")
          .row.justify-content-around.align-items-center
            .col-md-3.col-12.p-2.cuadro-1
              p.m-0.p-0.text-center #[strong ¿Sabía qué?]
            .col-md-9.col-12.p-2
              p.text-small.m-3 Es importante tener en cuenta que la aplicación de la norma es voluntaria, excepto si se establece como un requisito por parte de los entes de regulación del Estado o alguna empresa en particular.
      .col-12.mt-4.mb-4
        p(data-aos="fade-down") A grandes rasgos, actualmente existen cuatro clasificaciones principales para los sistemas de gestión de acuerdo con la ISO, ver tabla.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-md-10.col-12.titulo-sexto.color-acento-contenido.mt-3
        p.titulo.pb-0.mb-0 <b>Tabla 1.</b> <i>Clasificación para los sistemas de gestión</i>
      .col-md-10.col-12.px-0
        .tabla-b
          table
            //caption Clasificación para los sistemas de gestión
            tbody
              tr
                td.td-uno-table #[strong Sistema de gestión de calidad]
                td.td-dos-table.px-3 Tiene como objetivo principal orientar a las organizaciones para que sus productos y servicios cumplan con los estándares de calidad para la satisfacción de sus clientes.
              tr
                td.td-uno-table #[strong Sistemas de gestión de medioambiente y energía]
                td.td-dos-table.px-3 Tiene como objetivo principal orientar a las organizaciones para cuantificar el impacto ambiental y energético de todos sus procesos e implementar acciones para la sostenibilidad ambiental, seguridad energética y competitividad.
              tr
                td.td-uno-table #[strong Sistemas de gestión de riesgos y seguridad]
                td.td-dos-table.px-3 Tiene como objetivo principal orientar a las organizaciones para minimizar cada uno de los riesgos y peligros para la integridad de las personas, equipos y sistemas en la ejecución de las actividades al interior de estas.
              tr
                td.td-uno-table #[strong Sistemas de gestión de responsabilidad social]
                td.td-dos-table.px-3 Tiene como objetivo principal orientar a las organizaciones para identificar los impactos sociales, económicos y ambientales, para tomar acciones que contribuyan al bienestar de la sociedad y el desarrollo sostenible.
    
    Separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 El ciclo PHVA

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6(data-aos="fade-down")
        figure
          img(src="@/assets/curso/temas/tema1/tema1-08.png", alt="alt")
      .col-lg-6(data-aos="fade-up")
        p A pesar de que cada norma trata temas diferentes, tienen en común el uso de la metodología denominada Ciclo PHVA o Ciclo de Deming. Esta metodología fue creada originalmente por el profesor estadounidense Edwards Deming en los años 50 y está orientada a la mejora continua de los procesos y los procedimientos para garantizar la calidad de los productos y servicios. A través de los años esta metodología ha sido utilizada y cada vez más perfeccionada, de tal forma que se mantiene vigente.
        .crd.clr-paleYellow.p-4.mb-4
          p.mb-0 El Ciclo PHVA establece cuatro fases fundamentales, ordenadas y obligatorias para garantizar el correcto establecimiento de los procedimientos y de las acciones para cumplir con las metas y objetivos planteados por la organización, de forma efectiva y eficiente.

      .col-12
        p En la siguiente figura se resume el Ciclo PHVA:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-md-10.col-12.titulo-sexto.color-acento-contenido.mt-3
        p.titulo.pb-0.mb-0 <b>Figura 1.</b> <i>Ciclo PHVA</i>
      .col-md-8.col-12
        figure
          img(src="@/assets/curso/temas/tema1/tema1-09.svg", alt="Nota. Tomada de ISBL (s.f.).")
          figcaption Nota. Tomada de ISBL (s.f.). #[i https://isbl.eu/2021/01/que-es-un-sistema-de-gestion-y-para-que-sirve/]

      .col-12.mt-5
        p Como se puede observar en la figura al tratarse de un ciclo, este se repite de forma sucesiva, de tal forma que se puedan realizar ajustes en cada una de las fases hasta garantizar que los procedimientos y las acciones establecidas por la organización cumplan con las necesidades de los clientes y las demás personas interesadas. Si en algún momento cambian las condiciones de la organización o de los clientes, el sistema de gestión se puede adaptar para garantizar la mejora continua.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Planificar") En esta etapa se establece la política de la organización de cara al sistema de gestión. Se determinan los objetivos, las metas, el alcance y se realizan las actividades de planificación y los procedimientos requeridos para la implementación del sistema de gestión.
          p(numero="2" titulo="Hacer") En esta etapa se llevan a cabo las actividades planificadas en la etapa anterior. Adicionalmente, se socializa y capacita a las partes interesadas el sistema de gestión y se procede a documentar todos los procesos, los registros, las experiencias y las oportunidades de mejora durante la ejecución.
          p(numero="3" titulo="Verificar") En esta etapa se miden los resultados de la implementación del sistema de gestión y se evalúa el nivel de cumplimiento de los indicadores y metas planteadas en la planificación. La verificación del cumplimiento la puede hacer la misma organización o un externo a ella, para garantizar imparcialidad en los resultados.
          p(numero="4" titulo="Actuar") En esta etapa se realiza el ajuste a los procedimientos de acuerdo con las oportunidades de mejora detectadas, con el fin de disminuir las desviaciones en el cumplimiento de los objetivos y metas definidas para el sistema de gestión. Una vez finalizada esta fase se debe volver a la planificación para la implementación de mejoras y posteriormente, se continúa el ciclo con las siguientes fases sucesivamente.

      .col-8.col-lg-4(data-aos="fade-up")
        figure
          img(src="@/assets/curso/temas/tema1/tema1-10.png", alt="Planificar, Hacer, Verificar y Actuar")


    Separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.3 Certificación
    .row.mb-4(data-aos="fade-down")
      .col-12
        p Es un procedimiento mediante el cual una entidad externa acreditada para tal fin le otorga a una organización un certificado:
    
    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Certificación 
            p La certificación de sistemas de gestión es una declaración por una tercera parte de que un sistema de gestión de una organización cumple con los requisitos establecidos en una norma de referencia. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-18.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Certificados más demandados y duración
            p Los certificados de sistemas de gestión de calidad más demandados son: el certificado de calidad (norma ISO 9001), el certificado ambiental (norma ISO 14001). 
            p La duración de un certificado de sistemas de gestión depende de la norma de referencia que se haya utilizado para la certificación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-19.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            .h4 Beneficios certificación
            p Algunos beneficios que brinda la certificación son: 
            ul.lista-ul.mb-5
              li.mb-0 
                i.lista-ul__vineta
                | Mejora el nivel de satisfacción de los clientes.
              li.mb-0 
                i.lista-ul__vineta
                | Demuestra el compromiso de la empresa con la calidad. 
              li.mb-0 
                i.lista-ul__vineta
                | Mejora la eficiencia general de la empresa.
              li.mb-0 
                i.lista-ul__vineta
                | Permite disminuir los costos por la no calidad de los servicios ofrecidos. 
              li.mb-0 
                i.lista-ul__vineta
                | Reduce la cantidad de reclamos o quejas por problemas en la prestación de servicios.
              li.mb-0 
                i.lista-ul__vineta
                | Mejora el cumplimiento de los plazos de entrega.
              li.mb-0
                i.lista-ul__vineta
                | Ayuda a mejorar el rendimiento de la organización y mitigar los riesgos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-20.png', alt='')


    .row.mt-5.mb-4(data-aos="fade-right")
      .col-12
        p Teniendo en cuenta lo anterior, ¿cuáles son las ventajas de la certificación para los sistemas de gestión?     

    .row.justify-content-between
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta--boton.color-secundario.p-4.borde-tema1.numero-uno
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-11.svg', alt='')
          p.text-small Garantiza que la organización cumple con los requisitos de la norma y tiene la capacidad de lograr su metas y objetivos, de acuerdo con una evaluación realizada por una entidad independiente y competente técnicamente.
          
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta--boton.color-secundario.p-4.borde-tema1.numero-dos
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-12.svg', alt='')
          p.text-small Genera confianza a los clientes y a las demás partes interesadas al garantizar la calidad y la competencia en las actividades de la organización.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-left")
        .tarjeta--boton.color-secundario.p-4.borde-tema1.numero-tres
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-13.svg', alt='')
          p.text-small Es un elemento diferenciador del mercado para la organización, ya que permite distinguirse de sus demás competidores.
          
      .col-sm-6.col-lg-3(data-aos="fade-left")
        .tarjeta--boton.color-secundario.p-4.borde-tema1.numero-cuatro
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-14.svg', alt='')
          p.text-small Le permite a la organización entrar a mercados donde el cumplimiento de la norma es un requisito de selección a nivel nacional e internacional.
          

    .row.justify-content-center.align-items-center.mt-5.mb-5(data-aos="fade-right")
      .col-12
        p A continuación se mencionan algunas Normas ISO y las certificaciones más comunes a las que puede optar una organización:
    
    .tarjeta-numerada.color-acento-botones.mt-4(data-aos="fade-down")
      .tarjeta-numerada__numero
        .h4 Certificaciones más comunes
      .row.justify-content-center.align-items-center.mt-5.mb-4(data-aos="fade-right")
        .col-10
          figure
            img(src='@/assets/curso/temas/tema1/tema1-15.svg', alt='')




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

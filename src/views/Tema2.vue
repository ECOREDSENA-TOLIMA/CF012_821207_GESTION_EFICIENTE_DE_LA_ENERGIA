<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Los paradigmas del modelo energético
    .row.justify-content-center.align-items-center.mb-4.cajon.tarjeta.color-acento-contenido(data-aos="fade-left")
      .col-md-8.col-12(data-aos="fade-down")
        p.m-4 La dependencia de las fuentes de energía para el desarrollo de todas las actividades humanas en el mundo moderno ha sido evidente a través de la historia, por ejemplo, la dependencia del petróleo ha provocado varias crisis mundiales como la ocurrida en los años 70 en donde se presentó su escasez y la de sus derivados (gasolina, diesel, crudo, etc.), debido a las decisiones políticas en las regiones de Oriente Medio donde están los grandes productores de este energético. 
      .col-md-4.col-12(data-aos="fade-up")
        img.mb-0.position-relative(src="@/assets/curso/temas/tema2/tema2-01.svg")
    
    figure.mt-0.pt-0.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
    
    .row.mt-5.justify-content-center.align-items-center
      .col-md-6.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-02.png', alt='Los paradigmas del modelo energético')
      .col-md-6.col-12(data-aos="fade-up")
        p Los ejemplos de las crisis energéticas mostrados anteriormente ilustran los impactos que pueden derivarse de una inadecuada gestión de la política energética por parte de los gobiernos. Esta misma situación aplica a las empresas y las organizaciones, las cuales requieren dar una solución óptima a sus necesidades energéticas. 
        p A continuación se muestra lo que indica el plan energético nacional como estrategia nacional, y posteriormente se presenta lo que están haciendo las empresas y las organizaciones frente a los tres paradigmas del modelo energético.

    Separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.1 Panorama nacional
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-md-6.col-12(data-aos="fade-up")
        p La Unidad de Planeación Minero-Energética UPME ha definido la visión a largo plazo para el sector energético colombiano y los planes de acción para alcanzar las metas establecidas durante el horizonte de tiempo 2020 a 2050, lo cual se encuentra plasmado en el documento denominado Plan Energético Nacional 2020-2050 (PEN 2020-2050). Para la elaboración del PEN 2020-2050 se ha tenido en cuenta el análisis de todo el marco normativo del sector energético, los resultados de los programas y los estudios implementados en años anteriores, y las políticas definidas en los documentos del Consejo Nacional de Política Económica y Social — CONPES, relacionados con la energía y el desarrollo sostenible.
        p De acuerdo con la Unidad de Planeación Minero-Energética (2020) los pilares para la visión del sector energético hacia el año 2050 tienen que ver con los paradigmas del modelo energético, en adición de uno más que tiene relación con el conocimiento e innovación:
      .col-md-6.col-12(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-03.png', alt='Panorama nacional')

    .tarjeta.tarjeta--gris.p-4(data-aos="fade-left")
      PasosB.color-primario
        .row(titulo="Pilar 1")
          .col-md-6.mb-4.mb-md-0
            h3 Pilar 1
            p Seguridad y confiabilidad en el abastecimiento. Relaciona las acciones del gobierno que permitan al sistema energético nacional (en todas las cadenas de los energéticos) satisfacer la demanda de energía de manera segura, confiable y eficiente. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-04.png', alt='Pilar 1')
        .row(titulo="Pilar 2")
          .col-md-6.mb-4.mb-md-0
            h3 Pilar 2
            p Mitigación y adaptación al cambio climático. Relaciona las acciones del gobierno encaminadas a que el sistema energético nacional contribuya a la mitigación de los efectos del cambio climático, a través de la reducción de emisiones de gases de efecto invernadero (GEI) y se adapte a las condiciones y variaciones del clima. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-05.png', alt='Pilar 2')
        .row(titulo="Pilar 3")
          .col-md-6.mb-4.mb-md-0
            h3 Pilar 3
            p Competitividad y desarrollo económico. Relaciona las acciones del gobierno encaminadas al uso eficiente de los recursos energéticos, a través de la creación de un entorno de mercado que permita la implementación de las diferentes opciones tecnológicas, con el fin de aumentar la competitividad de los sectores productivos y fortalecer el desarrollo económico del país.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-06.png', alt='Pilar 3')
        .row(titulo="Pilar 4")
          .col-md-6.mb-4.mb-md-0
            h3 Pilar 4
            p Conocimiento e innovación. Relaciona las acciones del gobierno encaminadas al fortalecimiento de las competencias del capital humano en temas de transición energética, incremento de grupos y proyectos de investigación, y estrategias de innovación, desarrollo e investigación (I+D+I).
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-07.png', alt='Pilar 4')

    .row.mt-5(data-aos="fade-left")
      .col-12
        p En la siguiente tabla se describen las actividades y los objetivos específicos del PEN 2020-2050:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-12.titulo-sexto.color-acento-contenido.mt-3
          p.titulo.pb-0.mb-0 <b>Tabla 2.</b> <i>Actividades y objetivos específicos del PEN 2020-2050</i>
      .col-12.px-0
        .tabla-a.color-acento-botones 
          table
            caption Nota. Tomado de la Unidad de Planeación Minero-Energética (2020).
            thead
              tr
                th(style="width:75px") Pilar
                th(style="width:210px") Descripción
                th Alcance
                th(style="width:250px") Objetivos
            tbody
              tr
                td.text-center 1
                td Seguridad y confiabilidad en el abastecimiento
                td 
                  p Acciones encaminadas a contar con:
                  ul.lista-tabla 
                    li La infraestructura para el abastecimiento de energéticos y el acceso a ellos de acuerdo con la demanda esperada.
                    li La infraestructura de transporte y distribución de energéticos de forma suficiente y flexible en su operatividad.
                    li La infraestructura, los dispositivos, los equipos y el capital humano para cumplir con los estándares de calidad establecidos.
                    li Un entorno de negocios atractivo para las inversiones en infraestructura y el desarrollo de programas de investigación y desarrollo.
                    li Precios que reflejen las condiciones de un mercado en competencia, permitan el acceso a los energéticos e induzcan a las decisiones de consumo eficientes.
                td #[p 1. Permitir el acceso a soluciones energéticas confiables, con estándares de calidad y asequibles.] #[p 2. Diversificar la matriz energética.]
              tr
                td.text-center 2
                td Mitigación y adaptación al cambio climático
                td 
                  p Acciones encaminadas a contar con:
                  ul.lista-tabla 
                    li Bajas emisiones de GEI en la producción de energía primaria.
                    li Bajas emisiones de GEI en el consumo de energía.
                    li La información sobre riesgos e impactos climáticos para su integración en la planeación y la normativa del sector.
                    li Una cadena de valor operada desde la perspectiva de gestión de riesgos climáticos y otros eventos externos, en el abastecimiento, el transporte, la distribución y el consumo de energéticos.
                td #[p 3. Contar con un sistema energético resiliente.] #[p 4. Propender por un sistema energético de bajas emisiones de GEI.]
              tr
                td.text-center 3
                td Competitividad y desarrollo económico
                td
                  p Acciones encaminadas a contar con:
                  ul.lista-tabla 
                    li Sistema de información para que los usuarios conozcan los desempeños energéticos y para que las autoridades establezcan los estándares y los requisitos mínimos de eficiencia energética.
                    li Un mercado que incentive la inversión en nuevas tecnologías que habiliten la reducción de costos mediante el uso eficiente de los recursos energéticos.
                    li Un mercado en el que se pueda innovar y crear nuevos esquemas de negocio y la participación de nuevos actores.
                    li Un entorno de mercado que valore la circularidad de los procesos productivos, tanto en la minimización de entrada de materiales vírgenes como en la producción de desechos.
                td #[p 5. Adoptar nuevas tecnologías para el uso eficiente de recursos energéticos.] #[p 6. Promover un entorno de mercado competitivo y la transición hacia una economía circular.]
              tr
                td.text-center 4
                td Conocimiento e innovación
                td
                  p Acciones encaminadas a contar con:
                  ul.lista-tabla 
                    li Programas de capacitación en todos los niveles educativos en las áreas relacionadas con la transformación energética.
                    li Grupos de investigación y capital humano capaces de hacer uso de los más recientes avances tecnológicos y proponer cambios transversales que agreguen valor y resuelvan las problemáticas del sector y la sociedad.
                    li Aumentar los recursos que se invierten en el desarrollo de proyectos de ciencia, tecnología e innovación en el sector energético.
                td #[p 7. Avanzar en la digitalización y uso de datos en el sector energético.] #[p 8. Estimular la investigación e innovación y fortalecer las capacidades del capital humano.]

    Separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.2 Panorama desde las empresas y las organizaciones
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-sm-1.col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-08.svg', alt='Panorama nacional')
      .col-sm-11.col-12(data-aos="fade-down")
        p Los lineamientos consignados en el PEN 2020-2050 sirven a las empresas y a las organizaciones como hoja de ruta para la solución a sus necesidades energéticas. Se debe tener en cuenta que el contexto energético de cada organización y empresa varía dependiendo de la actividad económica que desarrollan, la ubicación de las oficinas o plantas de producción, el número de empleados, los usos de la energía, el tipo de organización y otras más; sin embargo, a continuación se describen algunas acciones comúnmente adoptadas por las empresas, clasificadas de acuerdo con cada paradigma:

    .row.mt-4(data-aos="fade-down")
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-contenido
          .tarjeta.clr--gris.p-4(titulo="Seguridad energética")
            h4 Seguridad energética
            ul.lista-ul.mb-4
              li
                i.fas.fa-angle-right
                | Instalación de plantas solares fotovoltaicas y centrales de cogeneración.
              li
                i.fas.fa-angle-right
                | Instalación de generadores de energía de respaldo como plantas de emergencia.
              li
                i.fas.fa-angle-right
                | Actualización y mantenimiento de las subestaciones eléctricas y redes internas de electricidad.
              li
                i.fas.fa-angle-right
                | Actualización y mantenimiento de las redes de agua, gas y vapor.
              li 
                i.fas.fa-angle-right
                | Compra de energía en niveles de tensión superior o cambio a usuario no regulado (si aplica) para mejorar  la tarifa del servicio de electricidad.
              li 
                i.fas.fa-angle-right
                | Negociación de precios para energéticos como gas natural, carbón, combustibles líquidos, biomasa, etc.

          .tarjeta.clr--gris.p-4(titulo="Cambio climático")
            h4 Cambio climático
            ul.lista-ul.mb-4
              li
                i.fas.fa-angle-right
                | Instalación de plantas solares fotovoltaicas.
              li
                i.fas.fa-angle-right
                | Cuantificación y monitoreo de las emisiones de gases de efecto invernadero (GEI).
              li
                i.fas.fa-angle-right
                | Compra de energía a empresas comercializadoras que ofrecen energía proveniente de fuentes renovables no convencionales.
              li
                i.fas.fa-angle-right
                | Cambio de fuentes de energía para los procesos térmicos y transporte (por ejemplo, cambiar calderas que usan carbón como combustible, por calderas que utilizan gas natural).
              li 
                i.fas.fa-angle-right
                | Compra de vehículos eléctricos para sus procesos de logística.
              li 
                i.fas.fa-angle-right
                | Uso de refrigerantes con menores emisiones de GEI. 
          .tarjeta.clr--gris.p-4(titulo="Competitividad")
            h4 Competitividad
            ul.lista-ul.mb-4
              li
                i.fas.fa-angle-right
                | Implementación de programas y proyectos para el ahorro y uso racional de la energía.
              li
                i.fas.fa-angle-right
                | Implementación de programas y proyectos para el ahorro y uso racional del agua.
              li
                i.fas.fa-angle-right
                | Capacitación del personal en gestión de la energía.
              li
                i.fas.fa-angle-right
                | Realización de auditorías energéticas para la identificación de ahorros potenciales.
              li 
                i.fas.fa-angle-right
                | Implementación de proyectos de eficiencia energética.
              li 
                i.fas.fa-angle-right
                | Cambio de equipos por tecnología con mayor eficiencia.
              li 
                i.fas.fa-angle-right
                | Implementación de buenas prácticas de manufactura.
              li 
                i.fas.fa-angle-right
                | Implementación de sistemas de monitoreo, control y automatización de procesos.

</template>

<script>
export default {
  name: 'Tema2',
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

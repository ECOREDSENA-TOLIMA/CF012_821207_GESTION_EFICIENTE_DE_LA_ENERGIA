<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 9
      h1 Alcance y límites del sistema de gestión de la energía

      
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-md-7.col-12(data-aos="fade-right")
        p Los sistemas de gestión de la energía (SGEn) se pueden implementar en cualquier tipo de organización, independiente de su tamaño, clasificación económica o comercial, lugar de ubicación, número de empleados, tipo de productos o servicios, etc.; sin embargo, dentro cada organización puede implementar el SGEn con unos alcances y límites de acuerdo con sus características y necesidades. Para determinar el alcance y los límites del SGEn se tienen que haber analizado anteriormente el contexto de la organización, las partes interesadas y los requisitos. También es importante reconocer los diagramas productivos para los procesos que involucran el uso y el consumo de los diferentes energéticos.
        p De acuerdo con la Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE (2019) el alcance de un SGEn hace referencia a los procesos o las actividades de la organización que se van a incluir en la implementación del SGEn. Cabe resaltar que no necesariamente se deben incluir todos los procesos o actividades de la organización, sino los que se considera son más significativos o intensivos en el uso y el consumo de la energía. Adicionalmente, los límites para el SGEn hacen referencia a las áreas físicas donde se va a implementar un SGEn.
      .col-md-5.col-12.mt-2(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema9/tema9-01.png', alt='')

    p(data-aos="fade-right") A continuación se describe un ejemplo con dos situaciones diferentes para la definición del alcance y los límites del SGEn:
    p(data-aos="fade-right") Una empresa que comercializa productos cosméticos tiene las siguientes sedes para todas sus operaciones:
      
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-12.titulo-sexto.color-acento-contenido.mt-3(data-aos="fade-left")
          p.titulo.pb-0.mb-0 <b>Tabla 11.</b> <i>Listado de sedes</i>
      .col-12.px-0(data-aos="fade-down")
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th Nombre
                th Ciudad
                th Actividad / procesos
                th Uso de la energía
            tbody
              tr
                td.text-center Sede 1
                td.text-center Bogotá
                td Sede corporativa y comercial. Edificio de oficinas.
                td Electricidad.
              tr
                td.text-center Sede 2
                td.text-center Bucaramanga
                td Fabricación de cosméticos.
                td 
                  p.mb-0 Electricidad para el proceso.
                  p.mb-0 Gas natural para la generación de vapor de proceso.
                  p #[i Diesel] para la flota de camiones.
              tr
                td.text-center Sede 3
                td.text-center Medellín
                td Fabricación de empaques.
                td
                  p.mb-0 Electricidad.
                  p Gas natural para la generación de vapor de proceso.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down")
      .row(titulo="Situación 1")
        .col-md-7.col-lg-8.col-12.mb-4.mb-md-0
          p.mb-0 La empresa decide implementar el sistema de gestión de la energía (SGEn) en todos sus procesos y sedes.
          p.mb-0 Alcance: todos los energéticos en los diferentes procesos de la organización.
          p Límite: sede 1, sede 2 y sede 3.
          p.mb-0 En esta situación el alcance del SGEn quedaría definido de la siguiente forma:
          p El alcance del SGEn aplica para todas las actividades, las instalaciones, los procesos y los usos energéticos de la organización, en todas las instalaciones y sedes de la compañía.
        .col-md-5.col-lg-4.col-12
          figure
            img(src='@/assets/curso/temas/tema9/tema9-02.png', alt='')

      .row(titulo="Situación 2")
        .col-md-7.col-lg-8.col-12.mb-4.mb-md-0
          p.mb-0 La empresa está convencida de los beneficios de la implementación de un SGEn, pero decide iniciar solo con la sede 2 de Bucaramanga, ya que es la que reporta los mayores costos energéticos del total de las sedes. Además, decide no involucrar el proceso de transporte porque piensa vender la flota de camiones y tercerizar este servicio.
          p.mb-0 Alcance: ectricidad y gas natural para los procesos de producción.
          p Límite: sede 2.
          p.mb-0 En esta situación el alcance del SGEn quedaría definido de la siguiente forma:
          p El alcance del SGEn aplica para las actividades, los procesos de producción y los usos energéticos de electricidad y generación de vapor que se realizan en la sede No. 2, ubicada en la ciudad de Bucaramanga.
          p Una vez sea definido el alcance del SGEn, este debe quedar documentado.
        .col-md-5.col-lg-4.col-12
          figure
            img(src='@/assets/curso/temas/tema9/tema9-03.png', alt='')

</template>

<script>
export default {
  name: 'Tema9',
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

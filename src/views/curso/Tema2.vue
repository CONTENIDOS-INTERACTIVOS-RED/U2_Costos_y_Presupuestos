<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Clasificación de costos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade-left").mb-4 Los costos se clasifican con dos criterios principales:

    .titulo-figura.mb-4
      h5 Figura 2. 
      span Clasificación de los costos
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4
        figure
          img(src="@/assets/curso/tema2/1.svg", data-aos="zoom-in")
        

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Clasificación de costos, según el volumen 

    p(data-aos="fade-left").mb-4 La clasificación de los costos, según el volumen de producción, se divide en <b>costos fijos y costos variables</b>, los cuales se diferencian por su comportamiento frente a los cambios en la actividad o nivel de producción.

    TabsC.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Costos fijos")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Costos fijos
            p Permanecen constantes en total, independientemente del nivel de producción. Varían por unidad, según la cantidad producida. Ejemplo: el alquiler mensual de una fábrica. 
            p.mb-0 Características: 
            p.mb-0 ● No dependen del volumen total. 
            p.mb-0 ● Varían por unidad, según el nivel de producción. 
            p.mb-0 ● Son constantes en un periodo.

        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/2.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Costos variables")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Costos variables
            p Cambian proporcionalmente, según el nivel de actividad o producción. A mayor producción, mayor será el costo total, y viceversa. Ejemplo: el costo de la materia prima, como madera para sillas.
            p.mb-0 Características: 
            p.mb-0 ● Proporcionales al nivel de producción. 
            p.mb-0 ● Fáciles de calcular, según el volumen de producción.

        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Clasificación de costos, según su aplicación

    p.mb-5 Según su relación directa o indirecta con el producto, los costos se clasifican en <b>costos directos y costos indirectos.</b>

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.order-lg-2.mb-3
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7.order-lg-1
              h5 Costos directos
              p Se asocian directamente a un producto, servicio o departamento específico. Ejemplo: el sueldo de un operario que ensambla autos, fácilmente rastreable al proceso de fabricación de cada vehículo. 
              p.mb-0 Características: 
              p.mb-0 ● Fácilmente asignables y medibles. 
              p.mb-0 ● Relacionados directamente con el producto o servicio.

          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.order-lg-2.mb-3
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.order-lg-1
              h5 Costos indirectos
              p No pueden asociarse directamente a un solo producto o servicio, sino que afectan la operación general de la empresa. Ejemplo: el consumo de electricidad para iluminar toda una planta de producción. 
              p.mb-0 Características: 
              p.mb-0 ● Necesitan procesos de asignación para distribuirlos. 
              p.mb-0 ● No son rastreables a un solo objeto de costo.
      
    .row.mb-5.bg-color-6.p-4.align-items-center.justify-content-center
      .col-lg.order-2
        p.mb-0 La correcta identificación y clasificación de los costos, según el volumen o su aplicación, es fundamental para la gestión financiera y estratégica de una empresa. Permite una mejor toma de decisiones y una asignación precisa de recursos, asegurando la sostenibilidad y competitividad en el mercado.
      .col-auto.order-1.mb-3
        figure
          img(src="@/assets/curso/tema2/6.svg", data-aos="zoom-in")

    



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/206/20663246011/html/" target="_blank" rel="noopener noreferrer") Rincón-Soto, C. A., Sánchez-Mayorga, X. & Cardona-Restrepo, L. M. (2019). Clasificación teórica de los costos. Revista EAN, 87, pp. 193-206.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/116368?page=39" target="_blank" rel="noopener noreferrer") Cárdenas y Nápoles, R. A. (2016). Costos 1. Instituto Mexicano de Contadores Públicos.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.contabilidadfinanciera.com/clasificacion-costos" target="_blank" rel="noopener noreferrer") ContabilidadFinanciera.com. (s.f.). Clasificación de los costos según su comportamiento. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://mig-now.com/" target="_blank" rel="noopener noreferrer") SAP S/4HANA


            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/2DTiQstayrQ?si=-hElVFSXsT8vENCk" target="_blank" rel="noopener noreferrer") Jhoshimar Marca. (2022). Elementos del costo de producción.
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

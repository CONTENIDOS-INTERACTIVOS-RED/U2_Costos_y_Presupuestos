<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Metodología para la elaboración de presupuestos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.mb-3
        figure
          img(src="@/assets/curso/tema2/1.png", alt="").mb-4.mb-lg-0
      .col-lg-8.bg-color-6.p-4
        p.mb-0 La metodología para la elaboración de presupuestos, es un proceso sistemático que permite a las organizaciones planificar, organizar y controlar sus recursos financieros con el fin de alcanzar sus objetivos estratégicos. Este proceso es necesario para garantizar una gestión eficiente de los recursos, proporcionar la base para la toma de decisiones y permitir un control efectivo del desempeño financiero. A continuación, se describen las principales etapas que conforman esta metodología: 

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Determinación de las características empresariales

    p.mb-5(data-aos="fade-right") Se debe iniciar por la realización del diagnóstico interno; este constituye un elemento necesario en la planificación estratégica, y debe ser reflejado en términos monetarios, a través del presupuesto. Para asegurar que los presupuestos diseñados cuenten con una perspectiva cuantitativa y monetaria adecuada, es imprescindible considerar ciertas variables esenciales, descritas a continuación:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.order-lg-2.mb-3
              figure
                img(src="@/assets/curso/tema2/2.png")
            .col-lg-7.order-lg-1
              h5 Situación financiera
              p Analiza el balance general, considerando el endeudamiento, liquidez, valorización de activos y los índices de rentabilidad. Una imagen financiera sólida facilita la obtención de capital, créditos y negociación con proveedores. Condiciona decisiones estratégicas en investigación, desarrollo y proyectos de crecimiento, asegurando el avance o la continuidad operativa.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.order-lg-2.mb-3
              figure
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-7.order-lg-1
              h5 Eficiencia y productividad
              p La eficiencia reduce los tiempos entre la adquisición de insumos y la comercialización de productos. La productividad mide el rendimiento de la mano de obra o maquinaria. Factores claves incluyen avance tecnológico, distribución eficiente de planta y capacitación del personal. La logística, inventarios, transporte y procedimientos administrativos, impactan los costos y precios de venta.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.order-lg-2.mb-3
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7.order-lg-1
              h5 Actualización tecnológica
              p El desarrollo tecnológico influye en costos, calidad de productos y necesidad de reprocesos. Afecta la competitividad en precios y estándares de calidad, siendo esencial para la planificación presupuestaria.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.order-lg-2.mb-3
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.order-lg-1
              h5 Políticas gerenciales
              p Las decisiones gerenciales sobre financiamiento, amortización de capital, dividendos y pago de intereses, dependen de la planificación financiera. Las políticas de inventarios afectan presupuestos de compras y producción, mientras que sueldos, créditos y cobranzas, impactan nómina, <em>marketing</em> y flujo de caja.
      
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Evaluación del entorno de la empresa 
    
    p(data-aos="fade-right").mb-5 Ninguna empresa puede operar al margen del entorno que la rodea. Por esta razón, las características del contexto externo, deben integrarse en la planificación y elaboración de presupuestos. Entre los factores más relevantes se encuentran: el desempeño de los competidores tanto locales como internacionales, las prácticas comerciales definidas por los canales de abastecimiento, las políticas crediticias establecidas por las instituciones financieras, así como el comportamiento de variables económicas como la inflación, la devaluación y las tasas de interés. También deben considerarse las normativas gubernamentales, relacionadas con impuestos, salarios mínimos, seguridad social y las condiciones del comercio exterior.

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.px-5.mb-3.order-2
          p.mb-0  En el ámbito comercial, el análisis de la competencia adquiere un papel central. Este análisis implica evaluar aspectos como la percepción de la marca, las preferencias y las tendencias de consumo, las capacidades de la fuerza de ventas, y la relación entre calidad y el precio de los productos.

        .col-lg-auto.order-1.mb-3
          figure
            img(src='@/assets/curso/tema2/6.png', alt='')
    
    p.mb-5(data-aos="fade-right") Resulta esencial considerar el prestigio de la empresa, tanto en el mercado nacional como en el internacional, junto con las tendencias de participación en los sectores en los que la organización tiene presencia.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4
        .titulo-figura.mb-4
          h5 Figura 3. 
          span Diagnóstico empresarial
        figure
          img(src="@/assets/curso/tema2/7.svg", data-aos="zoom-in")
        
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Organización del trabajo 
    
    p.mb-5 La organización del trabajo presupuestal, requiere una asignación clara de actividades para cada participante en el proceso de elaboración del presupuesto. Es fundamental establecer reglas que regulen el flujo de información, definan la secuencia de pasos a seguir y aseguren una adecuada coordinación entre las partes involucradas. Esto permite que el presupuesto se elabore dentro de los plazos establecidos y con la participación activa de todos los niveles de la empresa.

    .row.mb-5.justify-content-center.mb-4
      .col-md-10.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/8.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-1.bg-color-4.p-4.align-content-center
        p.mb-0 La estructura de esta organización varía, según la magnitud de las operaciones de la empresa, dado que las necesidades y los recursos disponibles influyen directamente en el enfoque y la distribución de responsabilidades. Un trabajo presupuestal bien planificado, garantiza que todas las áreas colaboren de manera eficiente, para cumplir con los objetivos establecidos.

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Etapas para la elaboración de los presupuestos
    
    p.mb-5 A partir de lo expuesto por Rincón (2011), el presupuesto es una herramienta necesaria en la planificación financiera, porque permite prever y organizar los recursos de manera eficiente para alcanzar objetivos. Su elaboración es un proceso que exige análisis detallado, proyección de escenarios y la integración de diversos datos para garantizar su viabilidad. Comprender las diferentes etapas de este proceso, permite anticipar necesidades, minimizar riesgos y optimizar la toma de decisiones. A continuación, se identifican dichas etapas.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10.col-lg-5
        .titulo-figura.mb-4
          h5 Figura 4. 
          span Etapas para elaborar presupuestos
        figure
          img(src="@/assets/curso/tema2/9.svg", data-aos="zoom-in")
        figcaption.mt-2.text-center.mb-4 Nota. Rincón (2011).

    p.mb-5.bg-color-6.p-4 La imagen presenta un diagrama que describe las etapas cíclicas del proceso de elaboración de un presupuesto, representadas de manera gráfica en un esquema que sugiere un ciclo continuo. Las etapas se distribuyen en dos arcos consecutivos y reflejan un enfoque iterativo, del proceso presupuestario.

    h2 Reiniciación

    p La reiniciación es el punto de partida donde se establecen los <b>objetivos generales y específicos, las necesidades y las restricciones iniciales.</b> En esta etapa, se define el propósito del presupuesto y se recopila información preliminar para la toma de decisiones.
    p.mb-5 Una vez definidos los objetivos específicos, se procede con la asignación de los recursos necesarios, especialmente en proyectos de inversión, como:

    .row.mb-5.align-items-center
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8.bg-color-12.p-4.align-content-center
        ul.lista-ul
          li.mb-0
            i.lista-ul__vineta
            | Desarrollo de nuevos productos.
          li.mb-0
            i.lista-ul__vineta
            | Ampliación de la capacidad instalada.
          li.mb-0
            i.lista-ul__vineta
            | Adquisiciones empresariales.
          li.mb-0
            i.lista-ul__vineta
            | Renovación tecnológica.
          li.mb-0
            i.lista-ul__vineta
            | Implementación de sistemas.
    
    h3(data-aos="fade-right") Estrategias y políticas

    p(data-aos="fade-right").mb-5 A partir de los objetivos, se diseñan estrategias y políticas que faciliten su cumplimiento. Por ejemplo:

    .row.align-items-start.mb-5.justify-content-center
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Aumentar las ventas")
            p Extender plazos de pago, ofrecer mayores descuentos, explorar nuevos mercados.

          .div(titulo="Mejorar productos")
            p Optimizar calidad, tiempos de entrega y reforzar la inversión en publicidad..

          .div(titulo="Adquirir activos")
            p Evaluar opciones de financiamiento: aportes de accionistas, créditos o leasing.
          .div(titulo="Reducir costos de almacenamiento")
            p Analizar el efecto en costos de pedidos al priorizar la disminución de inventarios.
          
    h2(data-aos="fade-right") Comunicación y coordinación

    p.mb-5(data-aos="fade-right") Las <b>estrategias y políticas</b> definidas por la dirección y su comité asesor, se comunican al personal administrativo y operativo. Los responsables de cada área, elaboran planes específicos que deben:

    .bg-full-width.bg-fondo-1   
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/12.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 Estar <b>coordinados</b> dentro de sus departamentos.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/13.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 Mantener <b>alineación</b> entre todas las áreas de la organización.
    
    p.mb-5(data-aos="fade-right") Finalmente, los planes consolidados son <b>revisados y aprobados</b> por la alta dirección, asegurando una <b>integración coherente</b> de los esfuerzos organizacionales.

    h2(data-aos="fade-right") Elaboración

    p.mb-5(data-aos="fade-right") La fase de elaboración presupuestaria es crucial para la asignación eficiente de recursos en una organización. A continuación, se detallan los aspectos más relevantes de esta fase, para cada área funcional.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/lFRXAiwrHbM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    h3(data-aos="fade-right") Función presupuestaria y consolidación

    p.mb-5(data-aos="fade-right") La función presupuestaria recopila información de las operaciones regulares y de programas que demandan inversiones adicionales. El proceso incluye:

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-4.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema2/14.svg"
            alt=""
            style="width: 90px"
          )
          p.text-center <b>Presentación del presupuesto consolidado ante la dirección general</b>, acompañado de recomendaciones y observaciones.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-4.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema2/15.svg"
            alt=""
            style="width: 90px"
          )
          p.text-center <b>Análisis y discusión</b> para realizar los ajustes necesarios.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-4.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema2/16.svg"
            alt=""
            style="width: 90px"
          )
          p.text-center <b>Aprobación y publicación</b>, seguido de la comunicación oficial a toda la organización.
    
    h2(data-aos="fade-right") Ejecución

    p(data-aos="fade-right").mb-4 En esta fase, el presupuesto aprobado se pone en práctica, implementando las actividades planificadas, mediante el uso eficiente de los recursos asignados.

    p.mb-5(data-aos="fade-right") La ejecución consiste en llevar a cabo los planes establecidos, con el objetivo de alcanzar las metas planteadas. Aquí, el comité de presupuestos juega un papel central como principal impulsor del proceso. Si sus miembros garantizan el uso adecuado de los recursos físicos, financieros y humanos disponibles, se aumentan las probabilidades de lograr los resultados propuestos.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/17.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-1.bg-color-4.p-4.align-content-center
        p El <b>director de Presupuestos</b>, tiene la responsabilidad de:
        p.mb-0 ●	Apoyar a las gerencias en la implementación de los objetivos definidos.
        p.mb-0 ●	Elaborar y presentar informes periódicos sobre la ejecución, adaptados a las necesidades de cada área o departamento y alineados con las metas generales.
    
    h2(data-aos="fade-right") Control

    p.mb-5(data-aos="fade-right") Durante esta fase, se monitorea la ejecución del presupuesto para garantizar que las actividades se mantengan dentro de los límites establecidos. El control es fundamental para detectar desviaciones y tomar medidas correctivas, cuando sea necesario. El presupuesto funciona como un <b>termómetro</b> que mide el cumplimiento de las actividades empresariales. Sin embargo, su eficacia sería limitada si no incluyera una etapa de control. Este proceso implica:

    div.bg-color-6.p-4(data-aos="fade-right").mb-4 
      p.text-bold.mb-0 Monitoreo y seguimiento en tiempo real
      p Permite comparar los resultados reales con las proyecciones iniciales.
      p.text-bold.mb-0 Supervisión de desviaciones	
      p.mb-0 Se analizan las diferencias detectadas, solicitando explicaciones a los responsables.
    
    p.text-bold.mb-5 Las actividades claves del control, son:
  
    .row.align-items-start.mb-5.justify-content-center
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Elaborar informes de ejecución presupuestal")
            ul.lista-ul
              li.d-flex
                i.lista-ul__vineta
                | Realización de reportes, por áreas o departamentos.
              li.d-flex
                i.lista-ul__vineta
                | Presentación de cifras acumuladas que reflejen valores reales y presupuestados, en términos absolutos y porcentuales.
          .div(titulo="Comparación en proyectos de inversión")
            ul.lista-ul
              li.d-flex
                i.lista-ul__vineta
                | Evaluar el avance físico de las obras y las compras realizadas.
              li.d-flex
                i.lista-ul__vineta
                | Integrar información financiera y detalles sobre los contratos firmados.
          .div(titulo="Análisis de variaciones")
            ul.lista-ul
              li.d-flex
                i.lista-ul__vineta
                | Identificar y explicar las diferencias entre lo planificado y lo ejecutado.
              li.d-flex
                i.lista-ul__vineta
                | Enfocar el análisis en desviaciones mayores al <b>10 %</b>, ya sea por exceso o por defecto.
          .div(titulo="Tomar medidas correctivas")
            ul.lista-ul
              li.d-flex
                i.lista-ul__vineta
                | Aplicar sanciones por incumplimientos de lineamientos presupuestarios.
              li.d-flex
                i.lista-ul__vineta
                | Ajustar el presupuesto ante cambios imprevistos, como inflación, tasas de interés o devaluación.
              li.d-flex
                i.lista-ul__vineta
                p Considerar variables adicionales, especialmente si los presupuestos se manejan en <b>moneda extranjera</b>.
    
    h2(data-aos="fade-right") Evaluación

    p.mb-5(data-aos="fade-right") La etapa de evaluación se centra en revisar los resultados obtenidos al finalizar el periodo presupuestado y compararlos con los objetivos iniciales.

    .row.bg-color-6.p-4.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg.mb-3
        p.text-bold El <b>informe de evaluación</b> elaborado al cierre del ciclo, analiza las siguientes áreas:
        p.mb-0 ●	<b>Identificación de desviaciones:</b> se detallan las diferencias entre lo planificado y lo ejecutado.
        p.mb-0 ●	<b>Análisis del desempeño:</b> se examina el rendimiento de cada función y actividad de la empresa, identificando tanto logros como deficiencias.
      .col-auto.align-content-center
        figure
          img(src="@/assets/curso/tema2/19.svg", data-aos="zoom-in")

    p.mb-5(data-aos="fade-right") La importancia de la evaluación es:

    .bg-full-width.bg-fondo-1   
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/20.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 Permite ofrecer <b>retroalimentación</b> sobre su desempeño, a todos los departamentos.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/21.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 Facilita la <b>identificación de áreas de mejora</b> y la implementación de acciones correctivas.
    
    h2(data-aos="fade-right") Ciclo continuo

    p.mb-5(data-aos="fade-right") Después de la evaluación, el proceso, vuelve al punto de reiniciación para incorporar las lecciones aprendidas y ajustar el presupuesto para futuros períodos. Esto garantiza una mejora constante y una mayor precisión en la gestión financiera.

    .row.justify-content-center.mb-5
      .col-lg-8
        .bg-color-white.shadow-soft.p-3.px-lg-4
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/template/icon-yt2.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p #[b Etapas para la elaboración del presupuesto]
                  p Para profundizar los conocimientos sobre la metodología de las etapas, para la elaboración del presupuesto, se sugiere revisar el siguiente video:

                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/FWruEThjBNQ?si=RX3gUu0fA9PuoleD" target="_blank")
                    span Ver video
                    i.fas.fa-arrow-right
    
    h2(data-aos="fade-right") Análisis y ajustes presupuestales

    p.mb-5(data-aos="fade-right") El análisis y ajuste presupuestal es un proceso en la gestión financiera que permite evaluar el desempeño real frente a las proyecciones presupuestarias, con el fin de garantizar que los recursos se utilicen de manera eficiente y alineada con los objetivos organizacionales. Este proceso implica identificar desviaciones, analizar sus causas y, si es necesario, realizar ajustes, para mantener el control financiero y mejorar la toma de decisiones.

    .bg-full-width.bg-color-2
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Análisis presupuestal
            p.mb-4(data-aos="fade-right") Se invita a conocer el <b>análisis presupuestal</b>, un proceso clave para identificar y corregir desviaciones entre resultados reales y estimados. Factores internos y externos, pueden generar variaciones, por lo que ajustar el presupuesto mediante <b>reasignación de recursos y medidas correctivas</b>, optimiza la operación y asegura decisiones estratégicas para la sostenibilidad financiera.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Análisis presupuestal.

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/22.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/219237?page=9" target="_blank" rel="noopener noreferrer") Buitrago Ibáñez, J. V. (2021). Presupuestos en Excel. Editorial UPTC.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/116614?page=7" target="_blank" rel="noopener noreferrer") Mendoza Roca, C. (2017). Presupuestos para empresas de manufactura. Universidad del Norte.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://hector.marinruiz.com.mx/wp-content/uploads/YMCAECP02052513.pdf " target="_blank" rel="noopener noreferrer") Marín Ruiz, H. (s.f.). Metodología para la elaboración de un presupuesto.  
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/xO6g3TKWEOw?si=3WRXm2DjAS95wxA0" target="_blank" rel="noopener noreferrer") UA Costos y Control de Gestión FCEA UDELAR. (2021). Contabilidad Gerencial Presupuesto parte 3. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/FWruEThjBNQ?si=RX3gUu0fA9PuoleD" target="_blank" rel="noopener noreferrer") Campus Virtual. (2019). Presupuesto etapas para su elaboración. 

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

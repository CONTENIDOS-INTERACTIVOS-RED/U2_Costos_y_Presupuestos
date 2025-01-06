<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Concepto de costos y su importancia en las organizaciones'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.align-items-center
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-7.bg-color-1
        .p-5(data-aos="fade-left")
          p(data-aos="fade-left").mb-0 Los presupuestos son herramientas claves en la gestión financiera de las organizaciones. Se dividen en <b>operativos, financieros y de inversión</b>, cada uno con un propósito y enfoque específicos. A continuación, se detallan sus características:

    h2 Definición de presupuestos

    p Según Rincón (2011), el presupuesto es un análisis sistemático que evalúa los recursos requeridos (inputs) y los resultados esperados (outputs), en procesos productivos y financieros, considerando dinero, tiempo, materiales, espacio, entre otros elementos. Proporciona indicadores financieros esenciales para planificar, anticipar problemas y asegurar el cumplimiento de los objetivos trazados.
    p.mb-5 Los tipos de presupuestos son: 


    TabsC.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Presupuesto operativo")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Presupuesto operativo
            p Planifica las actividades diarias, como costos de producción, mano de obra y gastos operativos.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/2.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Presupuesto financiero")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Presupuesto financiero
            p Proyecta y controla los recursos monetarios, enfocándose en flujos de efectivo y análisis financiero.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/3.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Presupuesto de inversión")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Presupuesto de inversión
            p Se orienta a proyectos a largo plazo, como adquisiciones o mejoras de infraestructura.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/4.png', alt='')

    p.mb-5 La importancia del presupuesto es: 

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/5.svg"
            alt=""
            style="width: 90px"
          )
          p.text-center.text-bold Anticipa problemas
          p.mb-0.text-center Permite prever necesidades financieras y puntos críticos.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/6.svg"
            alt=""
            style="width: 90px"
          )
          p.text-center.text-bold Facilita la toma de decisiones
          p.mb-0.text-center Proporciona datos precisos sobre recursos y resultados.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/7.svg"
            alt=""
            style="width: 90px"
          )
          p.text-center.text-bold Controla el desempeño
          p.mb-0.text-center Actúa como un mecanismo de control, para cumplir metas establecidas.

    p.mb-5 El presupuesto, en esencia, permite a las organizaciones planificar y controlar sus procesos productivos y financieros, optimizando recursos y garantizando la sostenibilidad de las operaciones.

    .row.justify-content-center.mb-3
      .col-lg-2.align-items-center
        p.h-100.mb-0.bg-color-10.p-4.align-content-center.text-center Preveer circunstancias inciertas.
      .col-lg-2.align-items-center
        p.h-100.mb-0.bg-color-11.p-4.align-content-center.text-center Trabajar con rumbo definido.
      .col-lg-2.align-items-center
        p.h-100.mb-0.bg-color-10.p-4.align-content-center.text-center Planear metas razonables.
    .row.justify-content-center.mb-3
      .col-lg-2
        p.h-100.mb-0.bg-color-11.p-4.align-content-center.text-center Procurar obtener resultados.
      .col-lg-2
        p.h-100.mb-0.bg-color-10.p-4.align-content-center.text-center Anticiparse al futuro.
      .col-lg-2
        p.h-100.mb-0.bg-color-11.p-4.align-content-center.text-center Prever el futuro.
    .row.justify-content-center.mb-5
      .col-lg-2
        p.h-100.mb-0.bg-color-11.p-4.align-content-center.text-center Idear mecanismo para obtener los logros.
      .col-lg-2
        p.h-100.mb-0.bg-color-10.p-4.align-content-center.text-center Analizar estrategias.
      
    p.mb-5.bg-color-4.p-4 A continuación, se presentan los beneficios fundamentales de una gestión financiera eficiente, destacando su capacidad para anticiparse a circunstancias inciertas y riesgos potenciales. Esta práctica permite establecer metas alcanzables y mecanismos que faciliten su cumplimiento, asegurando un rumbo claro y estratégico.

    .row.align-items-start.mb-5.justify-content-center
      .col.md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/8.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-1
        AcordionA(tipo="b")
          .div(titulo="Prever circunstancias inciertas")
            p Permite anticipar riesgos financieros e imprevistos, como fluctuaciones del mercado, cambios en costos o emergencias, preparando respuestas adecuadas.

          .div(titulo="Trabajar con rumbo definido")
            p Establece límites claros para ingresos y gastos, proporcionando una guía para alinear las decisiones financieras con los objetivos establecidos.

          .div(titulo="Planear metas razonables")
            p Facilita la definición de metas financieras alcanzables, basadas en recursos disponibles y proyecciones realistas.
          .div(titulo="Procurar obtener resultados")
            p Permite hacer un seguimiento continuo del desempeño, evaluando si las estrategias implementadas generan los efectos deseados y ajustando cuando sea necesario.
          .div(titulo="Anticiparse al futuro")
            p Ayuda a prever futuros gastos, ingresos y necesidades de inversión, promoviendo una gestión proactiva en lugar de reactiva.
          .div(titulo="Prever el futuro")
            p Proyecta la evolución financiera, evaluando posibles escenarios a corto, mediano y largo plazo.
          .div(titulo="Idear mecanismos para obtener logros")
            p Permite diseñar estrategias específicas y asignar recursos adecuados para alcanzar los objetivos deseados.
          .div(titulo="Analizar estrategias")
            p Funciona como herramienta de control y análisis, evaluando qué estrategias funcionan mejor y realizando ajustes, para optimizar resultados.
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .bg-color-white.shadow-soft.py-3.px-lg-4
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/template/icon-yt2.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small <b>El concepto de presupuesto</b>
                  p.text-small Para ampliar más sobre el concepto de presupuesto, se sugiere revisar el siguiente video:

                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/SZ0mCNIXkwQ?si=UATuiByfZ0C2IJoB" target="_blank")
                    span.text-small Ver video
                    i.fas.fa-arrow-right
    
    p.mb-5 El presupuesto es una guía continua que debe ser controlado y evaluado permanentemente. Cada año debe evaluarse el presupuesto anterior y planificar el nuevo presupuesto.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-6
        .titulo-figura.mb-4
          h5 Figura 1. 
          span Enfoques de tiempos de la información productiva y financiera
        figure
          img(src="@/assets/curso/tema1/9.svg", data-aos="zoom-in")
        figcaption.mt-2.text-center.mb-4 Nota. Rincón (2011). Presupuestos empresariales.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Recursos a tenerse en cuenta en la elaboración de presupuestos

    p.mb-5 La elaboración de un presupuesto, requiere identificar, conocer y gestionar diversos recursos que son necesarios para asegurar que el proceso sea realista, eficiente y alineado con los objetivos organizacionales. A continuación, se describen los principales recursos a tener en cuenta:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-10
        .titulo-figura.mb-4
          h5 Figura 2. 
          span Recursos a tenerse en cuenta en la elaboración de presupuestos
        figure
          img(src="@/assets/curso/tema1/10.svg", data-aos="zoom-in")

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Clasificación de los presupuestos

    .bg-full-width.bg-fondo-1   
      .px-4.px-md-5.pb-md-3
        p.mb-5 Teniendo en cuenta a Vásquez Rojas, (2021), la clasificación de los presupuestos, pueden realizarse desde diferentes perspectivas, dependiendo del enfoque o la finalidad que se persiga. A continuación, se presentan algunas de las categorías más relevantes:

        .row.justify-content-center.mb-5
          .col-11.col-md-4.col-xl-5.pe-xl-8
            figure.mb-4.mb-md-0
              img(src='@/assets/curso/tema1/11.png', alt='Texto que describa la imagen')
          .col-11.col-md-8.col-xl-7
            SlyderF(columnas="col-12 col-lg-6")
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  img(src='@/assets/curso/tema1/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Licencia sanitaria
                  p.text-center Obtención de una licencia que certifique las condiciones de higiene y seguridad alimentaria del establecimiento.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  img(src='@/assets/curso/tema1/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Permiso de funcionamiento
                  p.text-center Autorización local que garantice la operación del negocio en conformidad con las normativas municipales.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  img(src='@/assets/curso/tema1/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Etiquetado de productos
                  p.text-center Desarrollo de etiquetas claras con ingredientes, información nutricional y advertencias sobre alérgenos.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  img(src='@/assets/curso/tema1/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Certificaciones
                  p.text-center Certificaciones de terceros, como sin gluten u orgánico, para garantizar la calidad y confianza del producto.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  img(src='@/assets/curso/tema1/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Contratación de personal
                  p.text-center Contratos laborales en cumplimiento con las normativas locales, incluyendo formación en higiene y seguridad.

    p.mb-5 A continuación, se presenta su descripción detallada:

    h2.mb-5 Según la naturaleza del ente que lo elabora

    h3 Presupuestos públicos

    p.mb-5 Son elaborados por entidades gubernamentales o estatales. Estos presupuestos permiten planificar y distribuir los recursos públicos, con el fin de garantizar transparencia y control.

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.px-5.mb-3
          p.mb-0  <b>Ejemplo</b>. El Presupuesto General de la Nación en Colombia, detalla los ingresos y los egresos del país, asignando recursos a diferentes áreas y proyectos.

        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/17.png', alt='')
    
    h3 Presupuestos privados

    p Corresponden a empresas u organizaciones del sector privado. Su objetivo es optimizar recursos, maximizar beneficios y garantizar la eficiencia operativa. También se incluyen presupuestos personales para la administración de finanzas individuales o familiares.

    .row.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/18.png', alt='')
      .col-lg-8
        p.align-content-center.p-4.bg-color-9.h-100 <b>Ejemplo</b>. El presupuesto anual de una empresa para producción, <em>marketing</em> y recursos humanos.
    
    h3 Según su estructura

    p Los presupuestos, según su estructura, permiten organizar y controlar los recursos financieros de una organización.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema1/19.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Presupuesto maestro
            p.mb-0 Consolida los presupuestos de todas las áreas o departamentos, ofreciendo una visión global.
      .col-lg-6.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema1/20.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Presupuestos auxiliares	
            p.mb-0 Desglosan los presupuestos individuales por áreas o departamentos, detallando costos específicos.
    
    div.bg-color-8.p-5.mb-5
      p.text-bold Ejemplo práctico:
      p.mb-0 ●	<b>El presupuesto maestro</b> de una empresa, incluye áreas como recursos humanos, producción y ventas.
      p.mb-0 ●	<b>El presupuesto auxiliar</b> de recursos humanos, detalla sueldos, capacitaciones y beneficios del personal.

    h2 Según su flexibilidad
    
    p La flexibilidad de los presupuestos determina su capacidad de adaptación, frente a cambios internos o externos.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.order-lg-2.mb-3
              figure
                img(src="@/assets/curso/tema1/21.png")
            .col-lg-7.order-lg-1
              h5 Presupuestos fijos
              p Se mantienen inalterables durante un período determinado, sin importar los cambios en las condiciones externas. 
              p <b>Ejemplo</b>. Un presupuesto fiscal anual en entidades públicas, donde los rubros se establecen y no se modifican.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.order-lg-2.mb-3
              figure
                img(src="@/assets/curso/tema1/22.png")
            .col-lg-7.order-lg-1
              h5 Presupuestos flexibles
              p Se ajustan de acuerdo con variaciones internas o externas, adaptándose a situaciones imprevistas. 
              p <b>Ejemplo</b>. La revisión de presupuestos por empresas durante la pandemia del 2020 ante la caída en ventas y producción.

    h3 Según su método de elaboración

    .row.mb-5
      .col-lg-3
        figure
          img(src="@/assets/curso/tema1/23.png")
      .col-lg-9
        p Los presupuestos, según su método de elaboración, se clasifican en estimados y estándares. Esta distinción facilita una proyección financiera adaptada a las necesidades y capacidades de cada organización.
        .row.bg-color-6.p-4.justify-content-center
          .col-lg.mb-3
            p.text-bold.mb-0 Presupuestos estimados o empíricos
            p Se basan en datos históricos y experiencias previas para realizar proyecciones financieras.
            p.text-bold.mb-0 Presupuestos estándar o científicos	
            p.mb-0 Utilizan métodos analíticos, estadísticos y rigurosos para reducir el margen de error en cálculos.
          .col-auto
            figure
              img(src="@/assets/curso/tema1/24.svg", data-aos="zoom-in")

    .row.mb-5.align-items-center
      .col-lg-8
        div.bg-color-4.p-5
          p.text-bold Ejemplo práctico:
          p.mb-0 ●	Una empresa proyecta su presupuesto basado en los gastos de los últimos años (estimado).
          p.mb-0 ●	Una industria aplica análisis estadísticos para prever costos y ventas con mayor precisión (estándar).
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/25.png", data-aos="zoom-in")
    
    h2 Presupuesto base cero

    p.mb-5 El <b>presupuesto base cero</b> no utiliza datos históricos ni referencias previas para su elaboración. Se parte desde cero, realizando una justificación detallada de cada gasto propuesto.

    .row.align-items-start.mb-5.justify-content-center
      .col.md-8.col-lg-4
        figure
          img(src="@/assets/curso/tema1/26.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Aplicaciones")
            p Es útil para nuevos negocios, donde no existen datos previos, o en situaciones de alta volatilidad económica.

          .div(titulo="Errores comunes")
            p Asumir que no se pueden estimar gastos con precisión, puede generar una planificación ineficiente.

    p.mb-5 <b>Reflexión clave.</b> Aunque no haya antecedentes, el uso de herramientas como análisis de mercado y proyecciones razonables, permite obtener estimaciones realistas que eviten la subestimación de costos o problemas operativos.  

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.pb-md-3.pt-md-5
        .row.mb-5.align-items-center
          .col-lg-5.mb-3.order-2
            figure
              img(src='@/assets/curso/tema1/27.png', alt='')
          .col-lg-7.order-1
            h2 Análisis presupuestal
            p Se invita a conocer el <b>análisis presupuestal</b>, un proceso clave para identificar y corregir desviaciones entre resultados reales y estimados. Factores internos y externos. pueden generar variaciones, por lo que ajustar el presupuesto mediante <b>reasignación de recursos y medidas correctivas</b>, optimiza la operación y asegura decisiones estratégicas para la sostenibilidad financiera.
            .bg-color-white.shadow-soft.py-3.px-lg-4
              .row.justify-content-around.align-items-center
                .col-auto
                  img(src="@/assets/template/icon-yt2.svg", style="width: 45px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.text-small.align-content-center.mb-0 <b>Video.</b> Análisis presupuestal
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/VTGK3O5NsRU?si=zK1Lq66RzXHkPFls " target="_blank")
                        span.text-small Ver video
                        i.fas.fa-arrow-right
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Tipos de presupuestos
  
    p.mb-5 La planificación presupuestaria abarca diferentes áreas de la organización, cada una con objetivos y características particulares. Los presupuestos se pueden clasificar en tres grandes categorías: operativos, financieros y de inversión. A continuación, se describen sus características y aplicaciones.

    h2.mb-5 Presupuestos operativos

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/28.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        p Son fundamentales para la gestión eficaz de las operaciones diarias de una organización, porque proporcionan una visión detallada de las proyecciones financieras relacionadas con las actividades operativas, ayudando a anticipar y controlar los ingresos y los gastos. 
        p Su principal objetivo es el de optimizar los recursos disponibles, asegurando que se utilicen de manera eficiente para minimizar costos, mientras que, al mismo tiempo, se busca maximizar los ingresos a través de una planificación estratégica y bien estructurada.
        p.mb-0.bg-color-9.p-4 Además, el presupuesto operativo establece límites claros y pautas para los gastos, promoviendo un control financiero riguroso y una cultura organizacional basada en la responsabilidad económica.
     
    p.mb-5.text-bold Dentro de sus componentes esenciales, encontramos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/29.svg', alt='', style="max-width: 1106px;").mx-auto

          .bg-color-4.tarjeta.box-shadow.p-3(x="8%" y="18%" numero="+")
            h5 Presupuesto de ventas
            p Se enfoca en la proyección de los ingresos esperados por la venta de bienes o servicios. Implica un análisis de la demanda del mercado, estrategias de precios y políticas comerciales. Es la base para otros presupuestos operativos, determinando el volumen de producción necesario y los recursos asociados.

          .bg-color-4.tarjeta.box-shadow.p-3(x="92%" y="18%" numero="+")
            h5 Presupuesto de producción
            p Detalla los costos relacionados con la fabricación de productos, incluyendo materias primas, mano de obra directa y costos indirectos de producción. Asegura la producción necesaria para satisfacer la demanda proyectada, evitando problemas de sobreproducción o desabastecimiento..

          .bg-color-4.tarjeta.box-shadow.p-3(x="50%" y="92%" numero="+")
            h5 Presupuesto de gastos operativos
            p Incluye todos los costos necesarios para mantener las operaciones diarias. Abarca gastos administrativos (sueldos, suministros), mantenimiento (reparación de equipos e instalaciones) y costos generales (transporte, servicios públicos) imprescindibles para el funcionamiento continuo de la empresa.
    
    h3 Elaborar un presupuesto operativo, ofrece múltiples beneficios. 

    .row.mb-5
      .col-lg-9
        p Permite a la organización planificar, de manera estratégica, sus actividades diarias, al tiempo que facilita la toma de decisiones informada, identificando áreas de mejora o posibles recortes de costos. 
        p.mb-0.bg-color-6.p-4 Este tipo de presupuesto es importante para medir el desempeño, porque permite comparar las proyecciones con los resultados reales y tomar medidas correctivas si es necesario; asimismo, contribuye a una mejor gestión del flujo de efectivo, ayudando con el anticipo de necesidades financieras y evitando problemas de liquidez.
      .col-lg-3
        figure
          img(src="@/assets/curso/tema1/30.png", alt="").mb-4.mb-lg-0
    
    h3.mb-5 Presupuestos financieros

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/31.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        p Los presupuestos financieros se centran en la proyección y gestión de los recursos monetarios de una organización, desempeñando un papel crucial en la planificación estratégica, para garantizar su estabilidad económica. Este tipo de presupuesto permite a la empresa anticipar sus necesidades de financiamiento, así como planificar cuidadosamente los flujos de efectivo, de modo que pueda cumplir con sus obligaciones financieras sin contratiempos. El objetivo principal es mantener un equilibrio financiero saludable, asegurando que la organización disponga de suficientes recursos para enfrentar tanto sus compromisos inmediatos como sus objetivos a largo plazo.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.order-lg-2.mb-3
              figure
                img(src="@/assets/curso/tema1/32.png")
            .col-lg-7.order-lg-1
              h5 Presupuesto de caja
              p Proyecta las entradas y salidas de efectivo, con el propósito de garantizar la liquidez. Permite prever momentos de déficits de efectivo y tomar medidas anticipadas, como buscar financiamiento temporal o ajustar el calendario de pagos.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.order-lg-2.mb-3
              figure
                img(src="@/assets/curso/tema1/33.png")
            .col-lg-7.order-lg-1
              h5 Presupuesto de ingresos y egresos
              p Ofrece una visión global de todas las fuentes de ingresos previstos y los pagos que deben realizarse durante un período específico. Incluye ingresos operativos y no operativos, así como gastos asociados y compromisos financieros. Permite controlar, con precisión, las finanzas y evitar desequilibrios.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.order-lg-2.mb-3
              figure
                img(src="@/assets/curso/tema1/34.png")
            .col-lg-7.order-lg-1
              h5 Presupuesto de capital o financiamiento
              p Detalla las necesidades de financiamiento externo o interno, analizando opciones como préstamos, emisión de acciones o aportes de capital de los socios. Es relevante para proyectos de expansión, adquisición de activos fijos o desafíos financieros importantes.

    p.mb-5.bg-color-6.p-4.mb-0 En conjunto, los presupuestos financieros ayudan a la organización a mantenerse solvente y la preparan para aprovechar oportunidades estratégicas o responder con agilidad, ante posibles crisis económicas. La clave para su efectividad radica en su constante monitoreo y en la capacidad de ajustarse a las variaciones del entorno financiero, lo que permite a la empresa mantener una posición sólida y competitiva en el mercado.

    h3 Presupuestos de inversión

    p.mb-5 Son herramientas para maximizar el rendimiento de las inversiones y asegurar el crecimiento sostenido de la organización. Estos presupuestos se enfocan en la planificación y evaluación de proyectos de inversión a mediano y largo plazo, con el objetivo de tomar decisiones informadas que generen valor y contribuyan al desarrollo estratégico de la empresa.

    TabsC.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Inversiones en activos fijos")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Inversiones en activos fijos
            p Relacionado con la adquisición o mejora de activos fijos, como maquinaria, tecnología e infraestructura. Incrementa la capacidad productiva y mejora la eficiencia operativa. Requiere una cuidadosa planificación para optimizar recursos y garantizar que los beneficios superen los costos iniciales.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/35.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Proyectos de expansión")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Proyectos de expansión
            p Iniciativas enfocadas en abrir nuevas unidades de negocio, incursionar en nuevos mercados o ampliar operaciones existentes. Son esenciales para fortalecer la posición competitiva, diversificar ingresos y aprovechar oportunidades de crecimiento.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/36.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Evaluación de viabilidad")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Evaluación de viabilidad
            p Incluye el análisis de indicadores financieros claves como: retorno sobre la inversión (ROI), valor presente neto (VPN) y tasa interna de retorno (TIR). Estos indicadores ayudan a comparar alternativas de inversión y seleccionar las más rentables y estratégicas.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/37.png', alt='')
    
 

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

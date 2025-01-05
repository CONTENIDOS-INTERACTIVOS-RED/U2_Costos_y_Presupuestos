<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Concepto de costos y su importancia en las organizaciones'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 La estimación de los costos en una organización, es de total importancia para el éxito económico, dado que permite evaluar la eficiencia operativa, optimizar recursos y tomar decisiones informadas. El análisis de costos apoya la planificación y el control, y fomenta la competitividad. 

    .row.mb-5.align-items-center
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-7.order-1
        .bg-color-2.p-4(data-aos="fade-left")
          p(data-aos="fade-left").mb-0 Comprender los costos permite a las empresas identificar áreas de mejora, establecer precios adecuados y garantizar la sostenibilidad financiera, a largo plazo. Su correcta gestión es necesaria para adaptarse a los cambios del mercado, maximizando beneficios y minimizando riesgos en la consecución de sus objetivos organizacionales.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Definición de costos

    p Según Vásquez Rojas (2021), "el costo es un procedimiento para calcular lo que cuesta hacer algo; es la suma de esfuerzos (mano de obra) y recursos (materiales y otros de la fábrica), que se han invertido para producir una cosa".
    p.mb-5 Los costos permiten evaluar los recursos empleados en la producción de bienes o servicios. En diferentes sectores, estos sistemas se aplican para calcular el costo de sus operaciones:
     
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-11.col-md-8.col-lg-4.col-xl-5.pe-xl-8
            figure.mb-4.mb-md-0
              img(src='@/assets/curso/tema1/2.png', alt='Texto que describa la imagen')
          .col-11.col-lg-8.col-xl-7
            SlyderF(columnas="col-12 col-md-6")
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  img(src='@/assets/curso/tema1/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  p.text-center En el sector bancario, para determinar la rentabilidad y costos de operaciones.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  img(src='@/assets/curso/tema1/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  p.text-center En hospitales, para estimar el costo por paciente.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  p.text-center En colegios y universidades, para calcular el gasto por estudiante.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  img(src='@/assets/curso/tema1/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  p.text-center En empresas industriales, para identificar el costo de la fabricación de productos.
              
    p.mb-5 El costo también se define como un desembolso o equivalente que generará un beneficio futuro, por lo que es capitalizable. Este proceso incluye:

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.px-5.mb-3
          p.mb-0 ●	La obtención de materias primas.
          p.mb-0 ●	La transformación en productos terminados.
          p.mb-0 ●	El almacenamiento y entrega al cliente final.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/7.png', alt='')

    p.mb-5 Las empresas, según su actividad, requieren procedimientos específicos para estimar costos. Por ejemplo, no es igual costear un producto fabricado desde cero, que calcular los costos de un producto adquirido para ser comercializado directamente. Conocer el manejo productivo de la empresa, es esencial para realizar un costeo adecuado.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Diferencia entre empresas industriales y comerciales
    
    p.mb-5 Es importante mencionar primero que, en Colombia, existen tres grandes sectores de la economía.

    .row.mb-5.justify-content-center
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/8.svg', alt='')
    
    p.mb-5 A partir de estos tres grandes macro sectores, se dividen los siguientes subsectores.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema1/9.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Sector Real
            p.mb-0 Conjunto de actividades económicas relacionadas con la producción, distribución y consumo de bienes y servicios.
      .col-lg-6.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema1/10.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Sector Financiero
            p.mb-0 Instituciones, mercados e instrumentos que gestionan el dinero y las inversiones.
    
    p.mb-5.bg-color-4.p-4 El Sector Financiero está compuesto por diversas entidades como bancos, corporaciones financieras, aseguradoras, cooperativas financieras, fondos de pensiones, compañías de leasing, empresas de <em>factoring</em>, almacenes generales de depósito y comisionistas de bolsa, entre otros. Estas organizaciones desempeñan un papel fundamental en la administración, generación y distribución de recursos económicos, en la sociedad.

    p.mb-5 Por otro lado, el Sector Real agrupa diferentes tipos de empresas, destacándose:

    .row.align-items-start.mb-5.justify-content-center
      .col-md-8.col-lg-4
        figure
          img(src="@/assets/curso/tema1/11.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") El enfoque colaborativo tiene múltiples beneficios en la resolución de conflictos:

        AcordionA(tipo="b")
          .div(titulo="Empresas comerciales")
            p Su actividad principal es la compra y venta de bienes, sin realizar transformación alguna.

          .div(titulo="Empresas de servicios")
            p Se especializan en ofrecer servicios a los clientes.

          .div(titulo="Empresas industriales")
            p Constituyen el enfoque principal, al transformar materias primas en productos terminados, mediante procesos productivos.

    p.mb-5 A continuación, se presenta un resumen de las diferencias más relevantes entre estos tipos de empresas, en el contexto de su gestión contable:

   
    .titulo-figura.mb-4
      h5 Tabla 1. 
      span Diferencias claves entre empresas comerciales e industriales

    .tabla-a.color-terciario.mb-5 
      table
        thead
          tr
            th.bg-color-5 Aspecto
            th.bg-color-5 Empresas comerciales
            th.bg-color-5 Empresas industriales
        tbody
          tr.bg-color-6
            td.text-bold Actividad principal
            td Compra y venta de bienes sin transformación.
            td Adquisición de materias primas, transformación y venta.
            
          tr.bg-color-6
            td.text-bold Inventarios en balance general
            td Inventario de mercancías.
            td Inventario de materiales, productos en proceso y terminados.
           
          tr.bg-color-6
            td.text-bold Cálculo de Utilidad Bruta
            td Ventas Netas (VN) - Costo de Mercancía Vendida (CMV).
            td Ventas Netas (VN) - Costo de Productos Manufacturados y Vendidos (CPMV).
             
          tr.bg-color-6
            td.text-bold Fórmula del costo principal
            td CMV = Inventario inicial + Compras netas - Inventario final.
            td CPMV incluye costos de materiales, mano de obra directa e indirecta y productos en proceso.
    
    h2 Cálculo de la utilidad bruta

    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-3
        figure
          img(src="@/assets/curso/tema1/12.png", alt="").mb-4.mb-lg-0
      .col-lg-9
        p En la contabilidad, las empresas comerciales e industriales, presentan diferencias significativas en la forma de calcular sus costos y manejar sus inventarios. Estas particularidades reflejan las actividades propias de cada tipo de organización y su enfoque operativo. A continuación, se presentan los aspectos principales:
        .row.bg-color-1.p-4.align-items-center.justify-content-center
          .col-lg.mb-3
            p.text-bold.mb-0 ●	Empresas comerciales:
            p.mb-0 Ventas Netas (VN) – Costo de Mercancía Vendida (CMV).
            p Fórmula del CMV: Inventario Inicial + Compras Netas - Inventario Final.
            p.text-bold.mb-0 ●	Empresas industriales:
            p.mb-0 Ventas Netas (VN) – Costo de Productos Manufacturados y Vendidos (CPMV).
          .col-auto
            figure
              img(src="@/assets/curso/tema1/13.svg", alt="").mb-4.mb-lg-0
    
    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.px-5
          p.text-bold El CPMV incluye:
          p.mb-0 ●	<b>Costos de materiales.</b> Materias primas empleadas en la producción.
          p.mb-0 ●	<b>Mano de obra directa.</b> Trabajo directamente involucrado en la fabricación.
          p.mb-0 ●	<b>Costos indirectos de fabricación.</b> Gastos relacionados con el proceso productivo.
          p ●	<b>Control de productos en proceso y terminados.</b> Seguimiento del flujo de inventarios.
          p Estas diferencias reflejan las características únicas de cada tipo de empresa, su estructura y la manera en que gestionan sus operaciones productivas y contables.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/14.png', alt='')
    
    p.mb-5 En el ámbito de la producción y comercialización, el costeo es una herramienta esencial para la toma de decisiones informadas y estratégicas. A través de ejemplos prácticos, se puede comprender cómo identificar y distribuir los costos directos e indirectos en cada etapa del proceso, permitiendo determinar precios adecuados, mejorar la rentabilidad y optimizar los recursos disponibles. Estos ejemplos facilitan el análisis de situaciones reales y acercan la teoría a la práctica, favoreciendo una gestión más eficiente de los negocios.

    .bg-full-width.bg-color-2
      .px-4.px-md-5.pb-md-3.pt-md-5
        .row.mb-5.align-items-center
          .col-lg-5.mb-3
            figure
              img(src='@/assets/curso/tema1/15.png', alt='')
          .col-lg-7
            h2 Ejemplos prácticos de costeo en la producción y comercialización
            p Se invita a explorar <b>ejemplos prácticos de costeo en la producción y comercialización</b>, ilustrando cómo se calculan los costos totales en distintos escenarios. En la producción de un pastel, se destacan los costos de materia prima, mano de obra y costos indirectos de fabricación, ofreciendo un panorama completo del proceso. Asimismo, en la comercialización de una camisa, se analizan factores como el costo de compra, transporte, etiquetado, publicidad y almacenamiento. Estos ejemplos brindan herramientas útiles para comprender y aplicar estrategias de costeo en diversas actividades económicas.
            .bg-color-white.shadow-soft.py-3.px-lg-4
              .row.justify-content-around.align-items-center
                .col-auto
                  img(src="@/assets/template/bg-icono-pdf.svg", style="width: 45px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.text-small <b>Anexo.</b> Ejemplos prácticos de costeo en la producción y comercialización
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")
                        span.text-small Descargar
                        i.fas.fa-arrow-right

    #t_1_3.titulo-segundo(data-aos="flip-up").mt-5
      h2 #[span 1.3] Objetivos del costo
    
    p.mb-5 Entre los objetivos fundamentales que se persiguen con la gestión de costos, se destacan los siguientes:

    .row.align-items-start.mb-5.justify-content-center
      .col.md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/16.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-1
        AcordionA(tipo="b")
          .div(titulo="Establecimiento de precios de venta")
            p Los costos sirven como referencia para determinar precios competitivos y rentables, en el mercado.

          .div(titulo="Herramienta de gestión para la administración")
            p Los costos son fundamentales para la toma de decisiones, especialmente en el área de producción, permitiendo optimizar recursos y procesos.

          .div(titulo="Valoración contable de inventarios")
            p A través de diversos métodos contables, los costos permiten calcular con precisión, el valor real de los inventarios de la empresa, garantizando un registro adecuado de los activos.
          .div(titulo="Control eficiente de la producción")
            p El seguimiento de los costos ayuda a supervisar y reducir materiales desperdiciados durante los procesos de producción, mejorando la eficiencia.
          .div(titulo="Monitoreo del tiempo de mano de obra")
            p Facilita un seguimiento constante de los tiempos empleados por la mano de obra en la fabricación de productos, permitiendo identificar posibles mejoras en la productividad.
          .div(titulo="Políticas de negociación con proveedores")
            p Los costos permiten establecer estrategias claras y eficientes para negociar con los proveedores, optimizando la adquisición de materias primas y otros recursos esenciales.


    #t_1_4.titulo-segundo(data-aos="flip-up").mt-5
      h2 #[span 1.4] Elementos del costo
      
    p.mb-5 Los elementos del costo, son los componentes fundamentales que conforman el valor total (costo) de un bien o servicio producido. Estos elementos representan los recursos económicos necesarios para llevar a cabo la producción y están clasificados en tres categorías principales:

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/17.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center.text-bold Materia prima
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/18.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center.text-bold Mano de obra
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/19.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center.text-bold Costos indirectos de fabricación

    h2.mb-5 La materia prima

    p.mb-5 Las materias primas son los elementos que, tras pasar por distintas fases de transformación, se convierten en productos terminados. Estas materias primas se dividen en dos categorías principales:

    TabsC.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Materiales directos")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Materiales directos
            p Son aquellos que forman parte esencial y visible del producto final. Estos materiales se identifican fácilmente, en cada unidad fabricada. Ejemplo: el cuero empleado para fabricar sandalias.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/20.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Materiales indirectos")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Materiales indirectos
            p Son materiales utilizados en el proceso de producción, pero cuyo costo es difícil de asignar a cada unidad específica o es tan bajo que no justifica su clasificación como material directo. Ejemplo: el pegamento usado en la fabricación de sandalias de cuero.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/21.png', alt='')

    p.mb-5 Esta distinción permite un manejo más preciso de los costos, durante el proceso productivo, asegurando una correcta asignación y control financiero en la empresa.

    h2 Mano de obra
    p.mb-5 El desempeño físico e intelectual en un proceso de manufactura, está representado por el esfuerzo de las personas que contribuyen a completar la fabricación de un producto. Este elemento del costo se divide en dos categorías principales:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.order-lg-2.mb-3
              figure
                img(src="@/assets/curso/tema1/22.png")
            .col-lg-7.order-lg-1
              h5 Mano de obra directa
              p Incluye las actividades realizadas por los trabajadores involucrados directamente en el proceso de transformación del producto. Ejemplo: el salario pagado a la persona que corta el cuero, en la fabricación de sandalias.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-md-8.col-lg-5.order-lg-2.mb-3
              figure
                img(src="@/assets/curso/tema1/23.png")
            .col-lg-7.order-lg-1
              h5 Mano de obra indirecta
              p Comprende las tareas realizadas por empleados cuyo trabajo es necesario para la producción, pero no está directamente relacionado con la fabricación de cada unidad específica. Ejemplo: el sueldo pagado a la persona encargada del mantenimiento de las máquinas.
    
    h2 Costos indirectos de fabricación

    p.mb-5 Los costos indirectos son aquellos gastos necesarios para la fabricación de productos, pero que no se relacionan directamente con los materiales o la mano de obra, empleados en cada unidad específica. Aunque no se pueden atribuir a un producto en particular, son esenciales para el funcionamiento general de la manufactura.

    p.text-bold Ejemplos de costos indirectos:

    .row.align-items-start.mb-5.justify-content-center
      .col-md-8.col-lg-4
        figure
          img(src="@/assets/curso/tema1/24.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Seguros de la fábrica")
            p Protección ante imprevistos, relacionados con las operaciones de la planta.

          .div(titulo="Depreciación de maquinaria")
            p Desgaste y uso de herramientas y equipos utilizados en la manufactura.

          .div(titulo="Electricidad y calefacción")
            p Energía y acondicionamiento necesarios para mantener las instalaciones.
    
    p.mb-5 Una correcta asignación de los costos indirectos permite reflejar el costo real de producción, proporcionando información coherente para la gestión de la empresa.

    #t_1_5.titulo-segundo(data-aos="flip-up").mt-5
      h2 #[span 1.5] Definición de gasto
    
    div.bg-color-4.p-4.mb-5
      p Según Vásquez Rojas (2021), “El gasto es un desembolso o su equivalente que reporta un beneficio para un solo período, por consiguiente, no es capitalizable. Afecta a la función tiempo y no al producto”.
      p.text-bold Los gastos se clasifican en tres categorías principales:
    
    h2 Gastos de venta

    p.mb-5 Representan los costos adicionales asociados al traslado de los productos desde la empresa hasta el consumidor final.

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/25.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Publicidad	
          p.mb-0.text-center Costos destinados a promover productos o servicios.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/26.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Comisiones
          p.mb-0.text-center Pagos a vendedores, según las ventas realizadas.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/27.svg"
            alt=""
            style="width: 90px"
          )
          h4.text-center Fletes o transporte	
          p.mb-0.text-center Gastos relacionados con el traslado de mercancías.

    h2 Gastos de administración

    p.mb-5 Incluyen los costos derivados de las actividades de gestión, supervisión y operación de la empresa.

    .row.mb-5
      .col-lg-8.bg-color-4.p-4
        p.mb-0 ●	Sueldos administrativos. Remuneración del personal encargado de la administración.
        p.mb-0 ●	Servicios. Pagos por teléfono, Internet u otros servicios necesarios.
        p.mb-0 ●	Impuestos. Tributos distintos al impuesto sobre la renta.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/28.png", alt="").mb-4.mb-lg-0
    
    h2 Gastos financieros

    p.mb-5 Son los relacionados con la obtención y administración de recursos financieros.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema1/29.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Intereses de préstamos
            p.mb-0 Costo por el uso de recursos financieros obtenidos.
      .col-lg-6.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema1/30.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Costos financieros	
            p.mb-0 Otros gastos vinculados con actividades de financiación.
    
    p.mb-5 Esta clasificación facilita la correcta identificación y gestión de los gastos en las operaciones empresariales.


    .titulo-figura.mb-4
      h5 Figura 1. 
      span Costos y gastos operacionales
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4
        figure
          img(src="@/assets/curso/tema1/31.svg", data-aos="zoom-in")
        figcaption.mt-2.text-center.mb-4 Nota.  Tomado y adaptado de Vásquez Rojas (2021), Costos y Presupuestos para financieros junior.


    #t_1_6.titulo-segundo(data-aos="flip-up").mt-5
      h2 #[span 1.6] Importancia de los costos en las organizaciones

    .row.mb-5.bg-color-6.p-4.justify-content-center
      .col-lg.mb-3
        p.mb-0 La estimación precisa de los costos, es crucial para la gestión eficiente de cualquier organización, pues afecta directamente la rentabilidad, competitividad y sostenibilidad. Los costos son la base para tomar decisiones estratégicas, planificar presupuestos, evaluar el desempeño operativo y garantizar el cumplimiento normativo. A continuación, se detallan sus implicaciones clave mediante una combinación de texto, ítems y tablas:
      .col-auto
        figure
          img(src="@/assets/curso/tema1/32.svg", data-aos="zoom-in")

    h2 Toma de decisiones estratégicas

    p.mb-5 Los costos permiten establecer precios mínimos de venta que garanticen rentabilidad y analizar la viabilidad de nuevos proyectos o inversiones. También ayudan a identificar los productos o servicios más rentables, priorizando recursos en las áreas de mayor impacto.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/33.svg', alt='', style="max-width: 1106px;").mx-auto

          .bg-color-white.box-shadow.p-3(x="12%" y="28%" numero="+")
            h5 Fijación de precios mínimos
            p Determinar el precio base para un nuevo producto en un mercado competitivo.

          .bg-color-white.box-shadow.p-3(x="88%" y="28%" numero="+")
            h5 Priorización de esfuerzos
            p Concentrar recursos en productos con mayor margen de ganancia.

          .bg-color-white.box-shadow.p-3(x="50%" y="2%" numero="+")
            h5 Análisis de viabilidad
            p Evaluar la rentabilidad por abrir una nueva línea de producción.
    
    h2 Planeación y presupuestación

    .row.mb-5.align-items-center
      .col-lg-3.mb-3
        figure
          img(src="@/assets/curso/tema1/34.png", data-aos="zoom-in")
      .col-lg-9
        p Una correcta estimación de costos, permite diseñar presupuestos realistas, asignar recursos óptimamente y evitar desperdicios. Los costos históricos se utilizan como base para prever escenarios futuros, ayudando a trazar metas estratégicas y operativas.
        .row.bg-color-1.p-4.justify-content-center
          .col-lg.mb-3
            p.mb-0 ●	Diseñar presupuestos que aseguren la disponibilidad de los recursos.
            p.mb-0 ●	Evitar el desperdicio mediante límites de gasto, claramente definidos.
            p.mb-0 ●	Anticipar necesidades futuras con base en costos históricos.
          .col-auto
            figure
              img(src="@/assets/curso/tema1/35.svg", data-aos="zoom-in")
    
    h2 Control y evaluación de desempeño

    p.mb-5 El análisis detallado de los costos, permite comparar cifras reales con los presupuestadas, facilitando la detección de áreas de mejora y la optimización de procesos. Además, indicadores como el margen de ganancia y la relación costo-beneficio, reflejan la salud financiera de la organización.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema1/36.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Detección de áreas de mejora	
            p.mb-0 Identificar altos costos en una línea de producción y proponer ajustes.
      .col-lg-6.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema1/37.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Medición de eficiencia		
            p.mb-0 Comparar costos presupuestados, con costos reales en proyectos claves.
    
    h2 Competitividad en el mercado

    p.mb-5 Una gestión eficiente de costos, mejora procesos, reduce tiempos y elimina desperdicios, aumentando la productividad y permitiendo ofrecer precios competitivos. Esto no solo incrementa la eficiencia interna, sino que fortalece la posición de la organización en el mercado.

    .row.mb-5.align-items-center
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/38.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-0 ●	Incrementar la productividad mediante la optimización de recursos.
        p.mb-0 ●	Ofrecer precios más competitivos en mercados sensibles al precio.
        p.mb-0 ●	Desarrollar tecnologías y métodos innovadores, que reduzcan los costos operativos.

    h2 Sostenibilidad y responsabilidad social

    .row.mb-5.alin
      .col-lg-8.bg-color-8.p-5
        p.mb-0 Evaluar costos relacionados con el uso de recursos y la gestión de residuos, permite operar de manera más sostenible y responsable. Esto no solo beneficia a la empresa, sino también a sus partes interesadas, como empleados, proveedores y clientes.
      .col-lg-4 
        figure
          img(src="@/assets/curso/tema1/39.png", data-aos="zoom-in")
    
    h2 Cumplimiento normativo y tributario

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/40.png", data-aos="zoom-in")
      .col-lg-8
        p El cálculo adecuado de los costos, es necesario para cumplir con regulaciones fiscales y normativas, garantizando reportes financieros claros y precisos, que reflejen la realidad económica de la organización.
        p.bg-color-4.p-4.mb-0 En conclusión, los costos son un pilar fundamental en la gestión empresarial, aportando herramientas para tomar decisiones informadas, optimizar recursos y mantener la competitividad. Su correcta administración permite a las organizaciones, alcanzar sus objetivos estratégicos y garantizar su sostenibilidad en el tiempo.


          








    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/280/28011681007.pdf " target="_blank" rel="noopener noreferrer") Polimeni, R. S., Hansen, D. R. & Mowen, M. M. (2003). Gestión de costos de producción en el sector metalmecánico de la región zuliana. Redalyc. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/journal/6219/621977181004/html/ " target="_blank" rel="noopener noreferrer") Zegarra Quesada, G. M. (2023). Influencia de la gestión de costos en la toma de decisiones en las Mypes. Revista de Investigación en Contabilidad y Administración. Universidad Nacional Mayor de San Marcos. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.gerencie.com/clasificacion-de-los-costos.html#google_vignette" target="_blank" rel="noopener noreferrer") Gerencie.com. (s.f.). ¿Qué son los costos y cómo se clasifican?.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer") ChatGPT. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://app.powerbi.com/ " target="_blank" rel="noopener noreferrer") Power BI. 
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/2PiXMCD9CU4?si=CvkYDYzShtBdQ6ma " target="_blank" rel="noopener noreferrer") Escuela de Emprendimiento y Negocios. (2021). ¿Qué son los costos?. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

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

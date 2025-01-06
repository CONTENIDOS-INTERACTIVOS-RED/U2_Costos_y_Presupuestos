export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Presupuestos empresariales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tipos de presupuestos: operativos, financieros y de inversión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Recursos a tenerse en cuenta en la elaboración de presupuestos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación de los presupuestos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de presupuestos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Metodología para la elaboración de presupuestos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Determinación de las características empresariales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Evaluación del entorno de la empresa',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Organización del trabajo',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Etapas para la elaboración de los presupuestos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Mateo Pacheco, M. (2023). Contabilidad previsional: ADGN0108. IC Editorial.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/229801?page=6 ',
    },
    {
      referencia:
        'Pacheco Coello, C. E. (2015). Presupuestos: un enfoque gerencial. Instituto Mexicano de Contadores Públicos.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/116416?page=310 ',
    },
    {
      referencia:
        'Rincón Soto, C. A. (2011). Presupuestos empresariales. Ecoe Ediciones.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/69162?page=19 ',
    },
    {
      referencia:
        'Rivero Zanatta, J. P. (2013). Costos y presupuestos: reto de todos los días. Universidad Peruana de Ciencias Aplicadas (UPC).',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/41311?page=8 ',
    },
    {
      referencia:
        'Vásquez Rojas, F. A. (2021). Costos y presupuestos para financieros junior. Grupo Editorial Nueva Legislación SAS.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/160288?page=13 ',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de variaciones',
      significado:
        'Proceso de comparar los presupuestos planificados, con los resultados reales, con el fin de identificar desviaciones y corregir acciones para mejorar la eficiencia y efectividad financiera.',
    },
    {
      termino: 'Capacidad presupuestaria',
      significado:
        'Límite máximo de gasto que una entidad puede financiar sin superar sus recursos disponibles, considerando las proyecciones de ingresos y las necesidades de inversión y operación.',
    },
    {
      termino: 'Clases de presupuestos',
      significado:
        'Los presupuestos pueden clasificarse como operativos, de inversión, financieros, estáticos, flexibles, entre otros, dependiendo de su propósito y la naturaleza de las actividades que cubren.',
    },
    {
      termino: 'Control presupuestario',
      significado:
        'Proceso de seguimiento continuo de los resultados financieros, frente a lo presupuestado, permitiendo realizar ajustes oportunos y garantizar el cumplimiento de los objetivos financieros establecidos.',
    },
    {
      termino: 'Elaboración del presupuesto',
      significado:
        'Fase en la que se diseñan las proyecciones de ingresos y egresos de una entidad, basándose en análisis previos y en las expectativas de recursos, para el período fiscal.',
    },
    {
      termino: 'Estimación de ingresos',
      significado:
        'Proceso de proyectar los ingresos esperados durante un período determinado, basándose en estudios de mercado, análisis de tendencias y antecedentes históricos.',
    },
    {
      termino: 'Evaluación presupuestaria',
      significado:
        'Examen de los resultados obtenidos tras la ejecución del presupuesto, comparando lo planificado con lo real, para determinar el desempeño y realizar mejoras en futuros presupuestos.',
    },
    {
      termino: 'Presupuesto base cero',
      significado:
        'Método en el que todas las partidas de gastos deben justificar su necesidad, desde cero, sin basarse en presupuestos anteriores, permitiendo optimizar el uso de los recursos disponibles.',
    },
    {
      termino: 'Presupuesto de caja',
      significado:
        'Herramienta que proyecta los flujos de efectivo entrantes y salientes, durante un período, ayudando a la empresa a garantizar la liquidez suficiente para cubrir sus obligaciones financieras.',
    },
    {
      termino: 'Presupuesto de capital',
      significado:
        'Planificación financiera a largo plazo, para proyectos de inversión, donde se detallan los gastos de adquisición de activos fijos y el financiamiento requerido para llevar a cabo, estos proyectos.',
    },
  ],
}

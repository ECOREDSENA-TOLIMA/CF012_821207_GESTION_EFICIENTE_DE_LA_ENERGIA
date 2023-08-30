export default {
  global: {
    componenteFormativo:
      'Características de los sistemas de gestión de la energía',
    descripcionCurso:
      'La gestión de la energía es una de las herramientas impulsadas por los gobiernos y las organizaciones a nivel mundial para solucionar los desafíos que plantean la seguridad energética, el cambio climático y la competitividad. La sostenibilidad económica y ambiental de las empresas y organizaciones es uno de los beneficios de la implementación de los sistemas de gestión de la energía (SGEn).',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Panorama de los sistemas de gestión y ciclo PHVA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Generalidades de los sistemas de gestión',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'El ciclo PHVA',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Certificación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Los paradigmas del modelo energético',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Panorama nacional',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Panorama desde las empresas y las organizaciones',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas de gestión de la energía (SGEn)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Beneficios de la implementación de los sistemas de gestión de la energía',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Familia de normas asociadas a la gestión de la energía',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Estructura y terminología utilizada para los sistemas de gestión de la energía (SGEn)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Desempeño energético',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Estructura de los SGEn de acuerdo con la normativa ',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Terminología utilizada para los sistemas de gestión de la energía (SGEn) ',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo:
          'Contexto de la organización en los sistemas de gestión de la energía',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Partes interesadas y requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Necesidades y expectativas de las partes interesadas',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Requisitos legales y otros requisitos',
            hash: 't_8_2',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Alcance y límites del sistema de gestión de la energía',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Liderazgo y compromiso',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Política energética',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Roles, responsabilidades y autoridades en la organización',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_012.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Sistema de gestión de eficiencia energética ',
      referencia:
        'Procem Consultores. <i>ISO 50001 - Sistema de gestión de eficiencia energética</i> [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hmxEKsQg0OI',
    },
  ],
  glosario: [
    {
      termino: 'GTC',
      significado: 'Sigla de Guía Técnica Colombiana',
    },
    {
      termino: 'IDEn',
      significado: 'Sigla del Indicador de Desempeño Energético',
    },
    {
      termino: 'ISO',
      significado: 'Sigla de Organización Internacional de Normalización',
    },
    {
      termino: 'LBEn',
      significado: 'Sigla de Línea de Base Energética',
    },
    {
      termino: 'NTC',
      significado: 'Sigla de Norma Técnica Colombiana',
    },
    {
      termino: 'PHVA',
      significado: 'Sigla de Planear, Hacer, Verificar, Actuar',
    },
    {
      termino: 'SGEn',
      significado: 'Sigla de Sistema de Gestión de la Energía',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia de Sostenibilidad Energética. (2018). <i>Guía de implementación de sistemas de gestión de la energía basados en ISO 50001.</i> Cuarta edición. Agencia de Sostenibilidad Energética. ',
      link:
        'https://drive.google.com/file/d/1OBbFU1XgjCcUt4r8gt79EVubc-oLsHAY/view',
    },
    {
      referencia:
        'CONUEE. (2016). <i>Manual para la implementación de un sistema de gestión de la energía.</i> Segunda edición. CONUEE. ',
      link:
        'https://www.gob.mx/cms/uploads/attachment/file/119159/Manual_SGEn_Conuee_2da_Edicion.compressed.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2019). <i>Norma técnica colombiana. Sistemas de gestión de la energía. Requisitos con orientación para su uso (NTC-ISO 50001:2019).</i> Instituto Colombiano de Normas Técnicas y Certificación. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Minas y Energía. (2019). <i>Informe de impacto Programa EEI Colombia</i> Upme. ',
      link:
        'https://www1.upme.gov.co/DemandaEnergetica/EEIColombia/Impacto_proyecto_EEI.pdf',
    },
    {
      referencia:
        'Organización Internacional de Normalización-ISO. (2010). <i>Progresar rápidamente. Organismos Nacionales de Normalización en Países en Desarrollo.</i> ISO. ',
      link:
        'https://www.iso.org/files/live/sites/isoorg/files/archive/pdf/en/fast_forward-es.pdf',
    },
    {
      referencia:
        'Red Colombiana de Conocimiento en Eficiencia Energética - RECIEE. (2019). <i>Implementación de un sistema de gestión de la energía - Guía con base en la Norma ISO 50001:2018.</i> Segunda versión. RECIEE. ',
      link:
        'https://www1.upme.gov.co/DemandaEnergetica/EEIColombia/Guia_estructura_ISO50001.pdf',
    },
    {
      referencia:
        'Unidad de Planeación Minero-Energética. (2020). <i>Plan Energético Nacional 2020-2050. </i> Upme.',
      link:
        'https://www1.upme.gov.co/DemandayEficiencia/Documents/PEN_2020_2050/Resumen_Ejecutivo_PEN_2020_2050.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Marlon Augusto Villamizar Morales',
          cargo: 'Experto Técnico',
          centro: 'Global Green Growth Institute (GGGI)',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suarez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

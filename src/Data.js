



const data = {


    
    status: "success",
    items: [
       {
        id: 1,
        title: "Software para Desarrollo de Aplicaciones",
        category: "Soluciones de Software",
        cantidad: 1,
        definicion: "comprende las herramientas que ayudan a crear sistemas y/o aplicaciones para dispositivos móviles de manera fácil e intuitiva, permitiendo a personal con conocimientos básicos de sistemas generar sus propias aplicaciones para ofrecer una solución integral. ",
       },
       {
        id: 2,
        title: "Middleware",
        category: "Soluciones de Software",
        cantidad: 2,
        definicion: "es una incorporación relativamente reciente en la computación. Obtuvo popularidad en los 80´s como una solución al problema de cómo conectar nuevas aplicaciones con viejos sistemas. De todas maneras, el término ha sido usado desde 1968. El Middleware es un software de conectividad que ofrece un conjunto de servicios que hacen posible el funcionamiento de aplicaciones distribuidas sobre plataformas heterogéneas.",
       },
       {
        id: 3,
        title: "MDM o Mobile Device Management",
        category: "Soluciones de Software",
        cantidad: 3,
        definicion: "es un software que como su nombre lo indica permite administrar remotamente el equipamiento de la organización, donde desde una central es posible controlar, instalar, bloquear, dar mantenimiento, etc. a aplicaciones y recursos del dispositivo sin necesidad de hacerlo físicamente.",
       },
       {
        id: 4,
        title: "Software de Aprovechamiento de Recursos ",
        category: "Soluciones de Software",
        cantidad: 4,
        definicion: "son todas aquellas licencias generalmente empaquetadas que se instalan en la PC o Servidores que permiten utilizar los equipos y explotar al máximo sus capacidades, un ejemplo muy claro de estos son los softwares de diseño e impresión de etiquetas y credenciales. ",
       },
       {
        id: 5,
        title: "Software Especializado por Mercado Vertical ",
        category: "Soluciones de Software",
        cantidad: 5,
        definicion: "son todos aquellos sistemas desarrollados por ISVs (Independent Software Vendor - Fabricante de Software Independiente) que se han enfocado en entender las necesidades de un Mercado Vertical específico con el objetivo de solucionar a través de la tecnología los principales retos que enfrentan en la operación diaria. ",
       },
       {
        id: 6,
        title: "Power Query ",
        category: "Business Intelligence",
        cantidad: 6,
        definicion: "tecnología de conexión de datos que permite descubrir, conectar, combinar y refinar los orígenes de éstos para poder analizarlos con mayor precisión y profundidad. ",
       },
       {
        id: 7,
        title: "Power Pivot ",
        category: "Business Intelligence",
        cantidad: 7,
        definicion: "es un tecnología de modelado de datos que permite crear modelos, establecer relaciones y crear cálculos. Se puede trabajar con conjuntos de datos de gran tamaño, establecer amplias relaciones y crear cálculos tanto simples como complejos.",
       },
       {
        id: 8,
        title: "Power View ",
        category: "Business Intelligence",
        cantidad: 8,
        definicion: "es la tecnología de visualización de datos que permite crear gráficos usuales e interactivos, mapas y otros elementos visuales que dinamizan sus datos.",
       },
       {
        id: 9,
        title: "Captación de clientes ",
        category: "Business Intelligence",
        cantidad: 9,
        definicion: "gracias al poder disponer rápidamente de informes actualizados de la situación de potenciales clientes.",
       },
       {
        id: 10,
        title: "Fidelización de clientes: ",
        category: "Business Intelligence",
        cantidad: 10,
        definicion: "gracias a la posibilidad de crear, actualizar y disponer de gráficos acerca de la evolución de la relación de estos con la empresa en relación a estado de pedidos, posibles incidencias, motivos de las mismas.",
       },
       {
        id: 11,
        title: "Detección de desviaciones presupuestarias: ",
        category: "Business Intelligence",
        cantidad: 11,
        definicion: "pudiendo ser éstas subsanadas a tiempo y sin mayor repercusión.",
       },
       {
        id: 12,
        title: "Gestión de la facturación de la organización ",
        category: "Business Intelligence",
        cantidad: 12,
        definicion: "Pudiendo observar fácilmente información acerca de facturas impagadas, en curso o pendientes de emisión. Con lo que podemos obtener datos de ingresos previsibles, posibles situaciones de falta de disponible en caja, etcétera.",
       },
       {
        id: 14,
        title: "Optimización de los niveles de stock ",
        category: "Business Intelligence",
        cantidad: 14,
        definicion: "Pudiendo contar, en todo momento, con informes actualizados y digitalizados de la situación del estocaje por productos. Así como conocer la evolución de ventas para evitar roturas de stock, mermas y pérdidas de productos en cada período.",
       },
       {
        id: 15,
        title: "Control del absentismo ",
        category: "Business Intelligence",
        cantidad: 15,
        definicion: "Manteniendo una Base de Datos actualizada, podemos obtener, de manera rápida y sencilla, reportes relativos a la evolución del absentismo por períodos, trabajadores, departamentos, centros de trabajo… Gracias a lo que se pueden detectar motivos que hayan propiciado un incremento en los niveles de absentismo propiciado por un mal liderazgo, falta de motivación, problemas de PRL, etcétera.",
       },
       {
        id: 15,
        title: "Agilidad en la Gestión de la formación ",
        category: "Business Intelligence",
        cantidad: 15,
        definicion: "Facilitando el control del desarrollo de las diferentes acciones formativas o cursos necesarios, como los relacionados con PRL, para asegurar que siempre cumplimos tanto con las directrices internas como con la normativa vigente.",
       },
       {
        id: 16,
        title: "iBuild App ",
        category: "Desarrollo móvil",
        cantidad: 16,
        definicion: "Consiste en un sistema de plantillas preestablecidas con las que puedes crear aplicaciones móviles para Android y iOS, tiene múltiples opciones, en las que incluso puedes elegir insertar publicidad en la app o pagar. Excelente para crear bocetos si tus conocimientos en el lenguaje de programación no son muy extensos.",
       },

       {
        id: 17,
        title: "Appcelerator Titanium",
        category: "Desarrollo móvil",
        cantidad: 17,
        definicion: "Es una plataforma creada por Appcelerator, la cual emplea JavaScript y se encarga de traducir automáticamente la programación al resto de sistemas. Es muy fácil de usar y cuenta con servicios en la nube, por lo que posibilita desarrollar apps interconectadas con el software y el hardware, permitiendo el uso del micro, la cámara o el GPS. Una desventaja es que no cuenta con lenguaje HTML, por lo que maquetar podría ser un poco complicado.",
       },
       {
        id: 18,
        title: "PhoneGap",
        category: "Desarrollo móvil",
        cantidad: 18,
        definicion: "Este software está pensado para desarrollar aplicaciones multiplataforma empleando exclusivamente HTML5, CS33 y JavaScript, es el que soporta más plataformas. Posibilita el acceso a parte de los elementos de los smartphone como cámara, contactos, etcétera, además permite preestablecer la navegación a través del buscador que decidamos como Chrome o Firefox. Cabe destacar que para cada sistema utiliza una plataforma distinta (Xcode para Mac y Eclipse para Android).",
       },
       {
        id: 19,
        title: "jQuery Mobile ",
        category: "Desarrollo móvil",
        cantidad: 19,
        definicion: "Es una herramienta basada en un framework que utiliza HTML5 optimizado para móviles táctiles, si estás familiarizado con este lenguaje la encontrarás muy fácil de usar. Las apps creadas con este software no se comparan con aplicaciones nativas, aunque el manejo del CSS es algo complejo de manejar.",
       },
       {
        id: 20,
        title: "appery.io ",
        category: "Desarrollo móvil",
        cantidad: 20,
        definicion: "Antes Tiggzi, esta platforma utiliza tecnologías de código libre de otras plataformas como JQuery Mobile o PhoneGap para crear interfaces de usuario para apps móviles. Su uso es muy sencillo al sólo arrastrar elementos y cajas, por lo que es su mayor ventaja, aunado a que cuentan con una versión gratuita para probar las herramientas.",
       },
       {
        id: 21,
        title: "DroidEdit",
        category: "Desarrollo web",
        cantidad: 21,
        definicion: "Esta aplicación es un editor de texto para editar archivos. Entre sus características más destacadas se encuentran que resalta el texto de gran cantidad de lenguajes, se pueden abrir y guardar archivos directamente desde Dropbox y tiene infinitos niveles de deshacer y rehacer.",
       },
       {
        id: 22,
        title: "Turbo Client",
        category: "Desarrollo web",
        cantidad: 22,
        definicion: "Una vez editados los archivos necesitas subirlos al servidor. Con Turbo Client podrás realizar esta tarea de manera fácil e intuitiva ya que tiene un diseño Holo. Permite guardar una lista de servidores y solo tendrás que elegir a cual quieres conectarte en cada momento. Por seguridad es recomendable no guardar la contraseña y hacer que la pida en cada conexión, aunque tiene la opción de guardarla.",
       },

       {
        id: 23,
        title: "JuiceSSH ",
        category: "Desarrollo web",
        cantidad: 23,
        definicion: "Es evidente que lo más seguro en las conexiones (sean del tipo que sean) es no guardar las contraseñas, aunque si gestionas muchos sitios y/o servidores recordarlas todas puede resultar complicado. Para ello contamos con KeePassDroid, es una implementación para Android de KeePass Password Safe (Linux, Windows, Mac, etc) con soporte de lectura y escritura para .kdb y KeePass 1 y 2.",
       },

       {
        id: 24,
        title: "KeePassDroid ",
        category: "Desarrollo web",
        cantidad: 24,
        definicion: "En ocasiones necesitas hacer pruebas de conectividad básicas y aquí es donde Fing puede ayudarte. Aunque sus posibilidades son enormes (escanear dispositivos conectados a la red, Wake On Lan, escanear servicios de la red, etc), lo más importante para nuestro caso es que puedes ejecutar comandos como ping o traceroute y hacer búsquedas DNS.",
       },

       {
        id: 25,
        title: "Fing - Escáner de red ",
        category: "Desarrollo web",
        cantidad: 25,
        definicion: "Este post está enfocado a webs que ya están funcionando y que necesitan una intervención puntual para solucionar un problema o realizar un pequeño cambio. Más adelante os contaré como poder usar vuestro PC de sobremesa o portátil como servidor casero para poder trabajar en proyectos nuevos desde cualquier lugar y tener siempre sincronizados los archivos en todos los dispositivos que tengas. De momento, os animo a probar estas aplicaciones y comentarnos vuestras experiencias.",
       },
       {
        id: 26,
        title: "Moqups ",
        category: "Diseño web",
        cantidad: 26,
        definicion: "Esta aplicación ofrece un dashboard con el que puedes realizar varios bocetos de tu diseño web y presentárselos a tu cliente. Puedes subir fotos, poner enlaces, botones… Está disponible online y lo mejor de todo, es gratuita.",
       },
       {
        id: 27,
        title: "Colllor ",
        category: "Diseño web",
        cantidad: 27,
        definicion: "Esta aplicación es fantástica para saber qué variaciones cromáticas combinan con el logotipo de tu cliente o los colores que desees darle a tus diseños. Introduces el código de color y automáticamente sabrás qué tonalidades combinan mejor con el color escogido.",
       },
       {
        id: 28,
        title: "SimpleGrid ",
        category: "Diseño web",
        cantidad: 28,
        definicion: "Esta aplicación te ayuda a crear grids fluidos para tus webs responsive. Con licencia MIT License, puedes descargarte el programa e instalarlo en tu PC o portátil.",
       },
       {
        id: 29,
        title: "Adobe Ideas ",
        category: "Diseño web",
        cantidad: 29,
        definicion: "Una aplicación para bocetar con ilustraciones vectoriales que puedes utilizar desde tu propio smartphone o tablet. Es gratuita y un buen complemento para el Adobe Illustrator o el Photoshop. Disponible para iOS.",
       },
       {
        id: 30,
        title: "Pixlr – Photoshop Online ",
        category: "Diseño web",
        cantidad: 30,
        definicion: "Es el editor de fotografía online de Photoshop. Es muy básico pero permite realizar las funciones principales de esta herramienta de Adobe. Es gratuita y no necesita instalación.",
       },
       {
        id: 31,
        title: "Snapseed ",
        category: "Diseño web",
        cantidad: 31,
        definicion: "Es una aplicación gratuita para móviles con sistema iOS y Android. Te permite hacer curiosos retoques fotográficos desde tu propio smartphone.",
       },
       {
        id: 32,
        title: "Web Designer Depot",
        category: "Diseño web",
        cantidad: 32,
        definicion: "Puedes descargarte esta aplicación a tu smartphone o tablet Android de forma gratuita y utilizar todos los recursos que ofrecen para diseñadores web en un nivel amateur. Fuentes, tutoriales de photoshop, plugins de wordpress, plantillas, etc. ",
       },
       {
        id: 33,
        title: "Tayasui Sketches ",
        category: "Diseño web",
        cantidad: 33,
        definicion: "Si en alguna ocasión tienes que hacer algún dibujo a mano para bocetar o realizar alguna creatividad, esta aplicación gratuita para iOS te vendrá de maravilla.",
       },
       {
        id: 34,
        title: "Graphic Design idea gallery  LW ",
        category: "Diseño web",
        cantidad: 34,
        definicion: "Por si algún día no estás inspirado y necesitas ojear algunas ideas, esta aplicación para Android trae decenas de actuales diseños para no perderlos de vista.",
       },
       {
        id: 35,
        title: "MyFont ",
        category: "Diseño web",
        cantidad: 35,
        definicion: "Más que una aplicación para diseñadores es un capricho con el que puedes instalar decenas de fuentes en tu smarphone y utilizar en algún documento, presentación o composición que hagas con tu móvil o tablet. Está disponible en Android, aunque para iOS existen otras tantas apps como Fonts.",
       }




    ]
}

export default data;
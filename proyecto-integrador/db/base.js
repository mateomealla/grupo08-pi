const db = {
  usuario: {
    email: "elpapu@gmail.com",
    usuario: "papu123",
    contraseña: "papu123",
    fechaDeNacimiento: "1990-01-01",
    nroDeDocumento: 47200101,
    fotoDePerfil: "/images/users/profile1.jpg",
    productos: "10",
    seguidores: "1027",
    comentarios: "113"

  },
  productos: [
    {
      id: 1,
      imagen: [
        "/images/products/pendrive-sandisk-128gb.webp",
        "/images/products/pendrive-sandisk-128gb-2.webp",
      ],
      nombre: "Pendrive SanDisk Ultra 128GB USB 3.0",
      descripcion:
        "Almacenamiento rápido y confiable para tus archivos personales, con velocidad de transferencia hasta 10 veces mayor que USB 2.0. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.",
      descripcionCorta:
        "Almacenamiento rápido y confiable para tus archivos personales, con velocidad.",
      comentarios: [
        {
          nombreDeUsuario: "valentina_rios",
          textoDelComentario:
            "Muy útil para llevar documentos, funciona rápido y sin errores.",
          imagenDePerfil: "/images/users/profile1.jpg",
        },
        {
          nombreDeUsuario: "andres_ferreyra",
          textoDelComentario:
            "Buena relación calidad-precio, lo uso a diario en el trabajo.",
          imagenDePerfil: "/images/users/profile2.jpg",
        },
        {
          nombreDeUsuario: "mauro_castro",
          textoDelComentario:
            "Me hubiese gustado que fuera metálico, pero cumple muy bien.",
          imagenDePerfil: "/images/users/profile3.jpg",
        },
        {
          nombreDeUsuario: "luz_benitez",
          textoDelComentario:
            "Ideal para respaldar fotos y videos. Lo recomiendo.",
          imagenDePerfil: "/images/users/profile4.jpg",
        },
        {
          nombreDeUsuario: "dario_gomez",
          textoDelComentario: "Rápido y compacto. Lo llevo siempre conmigo.",
          imagenDePerfil: "/images/users/profile5.jpg",
        },
      ],
    },
    {
      id: 2,
      imagen: [
        "/images/products/auriculares-jbl-510bt.webp",
        "/images/products/auriculares-jbl-510bt-2.webp",
      ],
      nombre: "Auriculares Inalámbricos JBL Tune 510BT",
      descripcion:
        "Auriculares Bluetooth con sonido JBL Pure Bass, batería de hasta 40 horas y carga rápida. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.",
      descripcionCorta:
        "Auriculares Bluetooth con sonido JBL Pure Bass, batería de hasta.",
      comentarios: [
        {
          nombreDeUsuario: "carla_mendez",
          textoDelComentario:
            "Excelente sonido y muy cómodos, los uso para entrenar.",
          imagenDePerfil: "/images/users/profile6.jpg",
        },
        {
          nombreDeUsuario: "ramiro_fernandez",
          textoDelComentario:
            "Buena batería, aunque se siente un poco plástico.",
          imagenDePerfil: "/images/users/profile7.jpg",
        },
        {
          nombreDeUsuario: "sabrina_lopez",
          textoDelComentario:
            "Perfectos para escuchar música y atender llamadas.",
          imagenDePerfil: "/images/users/profile8.jpg",
        },
        {
          nombreDeUsuario: "franco_molina",
          textoDelComentario:
            "Me sorprendió la calidad del audio, vale la pena.",
          imagenDePerfil: "/images/users/profile9.jpg",
        },
        {
          nombreDeUsuario: "natalia_rodriguez",
          textoDelComentario:
            "Livianos y con buena conexión, no se corta el bluetooth.",
          imagenDePerfil: "/images/users/profile10.jpg",
        },
      ],
    },
    {
      id: 3,
      imagen: [
        "/images/products/notebook-lenovo-ideapad.webp",
        "/images/products/notebook-lenovo-ideapad-2.webp",
      ],
      nombre: "Notebook Lenovo IdeaPad 3 15.6 Ryzen 5",
      descripcion:
        "Portátil potente y versátil con procesador AMD Ryzen 5, ideal para trabajo y estudio diario. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.",
      descripcionCorta:
        "Portátil potente y versátil con procesador AMD Ryzen 5, ideal.",
      comentarios: [
        {
          nombreDeUsuario: "lucas_suarez",
          textoDelComentario:
            "Muy rápida para tareas cotidianas. Se calienta un poco con juegos.",
          imagenDePerfil: "/images/users/profile11.jpg",
        },
        {
          nombreDeUsuario: "micaela_fernandez",
          textoDelComentario: "Perfecta para clases online y ofimática.",
          imagenDePerfil: "/images/users/profile12.jpg",
        },
        {
          nombreDeUsuario: "emanuel_vazquez",
          textoDelComentario:
            "Buena compra por el precio. Windows ya preinstalado.",
          imagenDePerfil: "/images/users/profile13.jpg",
        },
        {
          nombreDeUsuario: "paula_rios",
          textoDelComentario:
            "Pantalla nítida y teclado cómodo. Ideal para escribir.",
          imagenDePerfil: "/images/users/profile14.jpg",
        },
        {
          nombreDeUsuario: "tomas_garcia",
          textoDelComentario: "Cumple con todo lo que necesito. Buena batería.",
          imagenDePerfil: "/images/users/profile15.jpg",
        },
      ],
    },
    {
      id: 4,
      imagen: [
        "/images/products/apple-pencil-2.webp",
        "/images/products/apple-pencil-2-2.webp",
      ],
      nombre: "Apple Pencil 2da Generación",
      descripcion:
        "Lápiz digital preciso y sensible a la presión, ideal para artistas y diseñadores que usan iPad Pro. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.",
      descripcionCorta:
        "Lápiz digital preciso y sensible a la presión, ideal para.",
      comentarios: [
        {
          nombreDeUsuario: "carolina_morales",
          textoDelComentario:
            "Increíble precisión, lo uso para ilustrar en Procreate.",
          imagenDePerfil: "/images/users/profile1.jpg",
        },
        {
          nombreDeUsuario: "damian_lopez",
          textoDelComentario: "Carga magnética muy práctica. Funciona genial.",
          imagenDePerfil: "/images/users/profile2.jpg",
        },
        {
          nombreDeUsuario: "laura_diaz",
          textoDelComentario:
            "Es costoso, pero vale cada peso si dibujás o tomás notas.",
          imagenDePerfil: "/images/users/profile3.jpg",
        },
        {
          nombreDeUsuario: "federico_ayala",
          textoDelComentario: "Muy cómodo para escribir en iPad. Recomendado.",
          imagenDePerfil: "/images/users/profile4.jpg",
        },
        {
          nombreDeUsuario: "noelia_gomez",
          textoDelComentario:
            "Requiere iPad compatible, ojo con eso. Excelente calidad.",
          imagenDePerfil: "/images/users/profile5.jpg",
        },
      ],
    },
    {
      id: 5,
      imagen: [
        "/images/products/iphone-16.webp",
        "/images/products/iphone-16-2.webp",
      ],
      nombre: "iPhone 16 256GB",
      descripcion:
        "Último modelo de Apple con cámara mejorada, pantalla ProMotion y chip A18 Bionic. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.",
      descripcionCorta:
        "Último modelo de Apple con cámara mejorada, pantalla ProMotion y.",
      comentarios: [
        {
          nombreDeUsuario: "ivan_carrizo",
          textoDelComentario:
            "Va rapidísimo, la cámara nocturna es otro nivel.",
          imagenDePerfil: "/images/users/profile6.jpg",
        },
        {
          nombreDeUsuario: "sofia_mansilla",
          textoDelComentario: "Muy caro pero la experiencia es única. Amo iOS.",
          imagenDePerfil: "/images/users/profile7.jpg",
        },
        {
          nombreDeUsuario: "bruno_torres",
          textoDelComentario:
            "Lo tengo hace una semana y ya no quiero volver a Android.",
          imagenDePerfil: "/images/users/profile8.jpg",
        },
        {
          nombreDeUsuario: "martina_acevedo",
          textoDelComentario:
            "Gran duración de batería, y Face ID muy preciso.",
          imagenDePerfil: "/images/users/profile9.jpg",
        },
        {
          nombreDeUsuario: "gustavo_paz",
          textoDelComentario:
            "Un lujo. Lo uso para todo, incluso edición de video.",
          imagenDePerfil: "/images/users/profile10.jpg",
        },
      ],
    },
    {
      id: 6,
      imagen: [
        "/images/products/ipad-air-5.webp",
        "/images/products/ipad-air-5-2.webp",
      ],
      nombre: "iPad Air 5ta Generación",
      descripcion:
        "Tablet con chip M1 y pantalla Liquid Retina, ideal para creatividad y productividad portátil. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.",
      descripcionCorta:
        "Tablet con chip M1 y pantalla Liquid Retina, ideal para.",
      comentarios: [
        {
          nombreDeUsuario: "lourdes_salinas",
          textoDelComentario:
            "Muy fluida, perfecta para leer, dibujar o editar.",
          imagenDePerfil: "/images/users/profile11.jpg",
        },
        {
          nombreDeUsuario: "julian_ruiz",
          textoDelComentario:
            "Funciona como una mini laptop con teclado y lápiz.",
          imagenDePerfil: "/images/users/profile12.jpg",
        },
        {
          nombreDeUsuario: "camila_paz",
          textoDelComentario:
            "Ligera, potente y con batería que dura todo el día.",
          imagenDePerfil: "/images/users/profile13.jpg",
        },
        {
          nombreDeUsuario: "nicolas_aguirre",
          textoDelComentario: "La pantalla es brillante y se ve increíble.",
          imagenDePerfil: "/images/users/profile14.jpg",
        },
        {
          nombreDeUsuario: "florencia_bustos",
          textoDelComentario:
            "Es mi herramienta principal para estudiar y tomar notas.",
          imagenDePerfil: "/images/users/profile15.jpg",
        },
      ],
    },
    {
      id: 7,
      imagen: [
        "/images/products/iphone-15-pro-max.webp",
        "/images/products/iphone-15-pro-max-2.webp",
      ],
      nombre: "iPhone 15 Pro Max 512GB",
      descripcion:
        "Smartphone premium con estructura de titanio, chip A17 Pro, y cámara teleobjetivo de 5x. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.",
      descripcionCorta:
        "Smartphone premium con estructura de titanio, chip A17 Pro, y.",
      comentarios: [
        {
          nombreDeUsuario: "antonella_mora",
          textoDelComentario:
            "La cámara es impresionante. Fotos como una reflex.",
          imagenDePerfil: "/images/users/profile1.jpg",
        },
        {
          nombreDeUsuario: "facundo_soria",
          textoDelComentario:
            "Más liviano que el 14 Pro Max. Se nota el titanio.",
          imagenDePerfil: "/images/users/profile2.jpg",
        },
        {
          nombreDeUsuario: "jazmin_torres",
          textoDelComentario: "El mejor celular que tuve, rápido y fluido.",
          imagenDePerfil: "/images/users/profile3.jpg",
        },
        {
          nombreDeUsuario: "matias_olivera",
          textoDelComentario: "Excelente para juegos y edición de video.",
          imagenDePerfil: "/images/users/profile4.jpg",
        },
        {
          nombreDeUsuario: "agustina_flores",
          textoDelComentario: "No hay nada igual en Android. Es otra cosa.",
          imagenDePerfil: "/images/users/profile5.jpg",
        },
      ],
    },
    {
      id: 8,
      imagen: [
        "/images/products/samsung-s24-ultra.webp",
        "/images/products/samsung-s24-ultra-2.webp",
      ],
      nombre: "Samsung Galaxy S24 Ultra",
      descripcion:
        "Smartphone Android con cámara de 200 MP, pantalla AMOLED 6.8 y S-Pen integrado. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.",
      descripcionCorta:
        "Smartphone Android con cámara de 200 MP, pantalla AMOLED 6.8.",
      comentarios: [
        {
          nombreDeUsuario: "delfina_romero",
          textoDelComentario:
            "Lo uso para todo, incluso firmar documentos con el lápiz.",
          imagenDePerfil: "/images/users/profile6.jpg",
        },
        {
          nombreDeUsuario: "leandro_varela",
          textoDelComentario:
            "La cámara con zoom es brutal. Ideal para fotos a distancia.",
          imagenDePerfil: "/images/users/profile7.jpg",
        },
        {
          nombreDeUsuario: "celeste_aranda",
          textoDelComentario:
            "Android fluido y muy personalizable. Amo One UI.",
          imagenDePerfil: "/images/users/profile8.jpg",
        },
        {
          nombreDeUsuario: "alejandro_muñoz",
          textoDelComentario: "La batería dura más que otros Samsung que tuve.",
          imagenDePerfil: "/images/users/profile9.jpg",
        },
        {
          nombreDeUsuario: "carina_quinteros",
          textoDelComentario:
            "Muy grande pero me acostumbré rápido. La pantalla se ve hermosa.",
          imagenDePerfil: "/images/users/profile10.jpg",
        },
      ],
    },
    {
      id: 9,
      imagen: [
        "/images/products/apple-watch-4.webp",
        "/images/products/apple-watch-4-2.webp",
      ],
      nombre: "Apple Watch Series 4 GPS 44mm",
      descripcion:
        "Smartwatch con monitor de ritmo cardíaco, seguimiento de actividad y diseño más amplio. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.",
      descripcionCorta:
        "Smartwatch con monitor de ritmo cardíaco, seguimiento de actividad y.",
      comentarios: [
        {
          nombreDeUsuario: "daniel_rojas",
          textoDelComentario:
            "Me ayuda a controlar el ritmo en mis entrenamientos.",
          imagenDePerfil: "/images/users/profile11.jpg",
        },
        {
          nombreDeUsuario: "camila_tapia",
          textoDelComentario:
            "Súper útil para contestar llamadas y ver notificaciones.",
          imagenDePerfil: "/images/users/profile12.jpg",
        },
        {
          nombreDeUsuario: "franco_vidal",
          textoDelComentario:
            "Buen diseño y muy cómodo para llevar todo el día.",
          imagenDePerfil: "/images/users/profile13.jpg",
        },
        {
          nombreDeUsuario: "barbara_acosta",
          textoDelComentario:
            "Ideal para hacer deporte. Se sincroniza perfecto con el iPhone.",
          imagenDePerfil: "/images/users/profile14.jpg",
        },
        {
          nombreDeUsuario: "ignacio_silva",
          textoDelComentario:
            "Ya no puedo vivir sin él. Me motiva a moverme más.",
          imagenDePerfil: "/images/users/profile15.jpg",
        },
      ],
    },
    {
      id: 10,
      imagen: [
        "/images/products/apple-watch-5.webp",
        "/images/products/apple-watch-5-2.webp",
      ],
      nombre: "Apple Watch Series 5 GPS 44mm",
      descripcion:
        "Versión mejorada con pantalla siempre encendida, brújula integrada y almacenamiento aumentado. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.",
      descripcionCorta:
        "Versión mejorada con pantalla siempre encendida, brújula integrada y almacenamiento.",
      comentarios: [
        {
          nombreDeUsuario: "romina_fernandez",
          textoDelComentario:
            "La pantalla siempre encendida es un golazo. Se ve genial al sol.",
          imagenDePerfil: "/images/users/profile1.jpg",
        },
        {
          nombreDeUsuario: "esteban_luna",
          textoDelComentario:
            "Más rápido que el serie 4 y con más espacio para apps.",
          imagenDePerfil: "/images/users/profile2.jpg",
        },
        {
          nombreDeUsuario: "julieta_barrios",
          textoDelComentario:
            "Lo uso para entrenar, controlar la música y hasta dormir.",
          imagenDePerfil: "/images/users/profile3.jpg",
        },
        {
          nombreDeUsuario: "sebastian_ferrari",
          textoDelComentario:
            "Excelente reloj para el día a día. Muy práctico.",
          imagenDePerfil: "/images/users/profile4.jpg",
        },
        {
          nombreDeUsuario: "mariana_paredes",
          textoDelComentario: "Hermoso diseño, y útil para monitoreo de salud.",
          imagenDePerfil: "/images/users/profile5.jpg",
        },
      ],
    },
  ],
};

module.exports = db;

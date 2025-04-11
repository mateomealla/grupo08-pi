const db = {
    usuario: {
        email: "elpapu@gmail.com",
        usuario: "papu123",
        contraseña: "papu123",
        fechaDeNacimiento: "1990-01-01",
        nroDeDocumento: 47200101,
        fotoDePerfil: "/images/usuarios/perfil1.jpg"
    },
    "productos": [
        {
            "imagen": "/images/productos/pendrive-128gb.jpg",
            "nombre": "Pendrive SanDisk Ultra 128GB USB 3.0",
            "descripcion": "Almacenamiento rápido y confiable para tus archivos personales, con velocidad de transferencia hasta 10 veces mayor que USB 2.0.",
            "comentarios": [
                {
                    "nombreDeUsuario": "valentina_rios",
                    "textoDelComentario": "Muy útil para llevar documentos, funciona rápido y sin errores.",
                    "imagenDePerfil": "/images/usuarios/valentina_rios.jpg"
                },
                {
                    "nombreDeUsuario": "andres_ferreyra",
                    "textoDelComentario": "Buena relación calidad-precio, lo uso a diario en el trabajo.",
                    "imagenDePerfil": "/images/usuarios/andres_ferreyra.jpg"
                },
                {
                    "nombreDeUsuario": "mauro_castro",
                    "textoDelComentario": "Me hubiese gustado que fuera metálico, pero cumple muy bien.",
                    "imagenDePerfil": "/images/usuarios/mauro_castro.jpg"
                },
                {
                    "nombreDeUsuario": "luz_benitez",
                    "textoDelComentario": "Ideal para respaldar fotos y videos. Lo recomiendo.",
                    "imagenDePerfil": "/images/usuarios/luz_benitez.jpg"
                },
                {
                    "nombreDeUsuario": "dario_gomez",
                    "textoDelComentario": "Rápido y compacto. Lo llevo siempre conmigo.",
                    "imagenDePerfil": "/images/usuarios/dario_gomez.jpg"
                }
            ]
        },
        {
            "imagen": "/images/productos/auriculares.jpg",
            "nombre": "Auriculares Inalámbricos JBL Tune 510BT",
            "descripcion": "Auriculares Bluetooth con sonido JBL Pure Bass, batería de hasta 40 horas y carga rápida.",
            "comentarios": [
                {
                    "nombreDeUsuario": "carla_mendez",
                    "textoDelComentario": "Excelente sonido y muy cómodos, los uso para entrenar.",
                    "imagenDePerfil": "/images/usuarios/carla_mendez.jpg"
                },
                {
                    "nombreDeUsuario": "ramiro_fernandez",
                    "textoDelComentario": "Buena batería, aunque se siente un poco plástico.",
                    "imagenDePerfil": "/images/usuarios/ramiro_fernandez.jpg"
                },
                {
                    "nombreDeUsuario": "sabrina_lopez",
                    "textoDelComentario": "Perfectos para escuchar música y atender llamadas.",
                    "imagenDePerfil": "/images/usuarios/sabrina_lopez.jpg"
                },
                {
                    "nombreDeUsuario": "franco_molina",
                    "textoDelComentario": "Me sorprendió la calidad del audio, vale la pena.",
                    "imagenDePerfil": "/images/usuarios/franco_molina.jpg"
                },
                {
                    "nombreDeUsuario": "natalia_rodriguez",
                    "textoDelComentario": "Livianos y con buena conexión, no se corta el bluetooth.",
                    "imagenDePerfil": "/images/usuarios/natalia_rodriguez.jpg"
                }
            ]
        },
        {
            "imagen": "/images/productos/notebook.jpg",
            "nombre": "Notebook Lenovo IdeaPad 3 15.6'' Ryzen 5",
            "descripcion": "Portátil potente y versátil con procesador AMD Ryzen 5, ideal para trabajo y estudio diario.",
            "comentarios": [
                {
                    "nombreDeUsuario": "lucas_suarez",
                    "textoDelComentario": "Muy rápida para tareas cotidianas. Se calienta un poco con juegos.",
                    "imagenDePerfil": "/images/usuarios/lucas_suarez.jpg"
                },
                {
                    "nombreDeUsuario": "micaela_fernandez",
                    "textoDelComentario": "Perfecta para clases online y ofimática.",
                    "imagenDePerfil": "/images/usuarios/micaela_fernandez.jpg"
                },
                {
                    "nombreDeUsuario": "emanuel_vazquez",
                    "textoDelComentario": "Buena compra por el precio. Windows ya preinstalado.",
                    "imagenDePerfil": "/images/usuarios/emanuel_vazquez.jpg"
                },
                {
                    "nombreDeUsuario": "paula_rios",
                    "textoDelComentario": "Pantalla nítida y teclado cómodo. Ideal para escribir.",
                    "imagenDePerfil": "/images/usuarios/paula_rios.jpg"
                },
                {
                    "nombreDeUsuario": "tomas_garcia",
                    "textoDelComentario": "Cumple con todo lo que necesito. Buena batería.",
                    "imagenDePerfil": "/images/usuarios/tomas_garcia.jpg"
                }
            ]
        },
        {
            "imagen": "/images/productos/apple-pencil.jpg",
            "nombre": "Apple Pencil 2da Generación",
            "descripcion": "Lápiz digital preciso y sensible a la presión, ideal para artistas y diseñadores que usan iPad Pro.",
            "comentarios": [
                {
                    "nombreDeUsuario": "carolina_morales",
                    "textoDelComentario": "Increíble precisión, lo uso para ilustrar en Procreate.",
                    "imagenDePerfil": "/images/usuarios/carolina_morales.jpg"
                },
                {
                    "nombreDeUsuario": "damian_lopez",
                    "textoDelComentario": "Carga magnética muy práctica. Funciona genial.",
                    "imagenDePerfil": "/images/usuarios/damian_lopez.jpg"
                },
                {
                    "nombreDeUsuario": "laura_diaz",
                    "textoDelComentario": "Es costoso, pero vale cada peso si dibujás o tomás notas.",
                    "imagenDePerfil": "/images/usuarios/laura_diaz.jpg"
                },
                {
                    "nombreDeUsuario": "federico_ayala",
                    "textoDelComentario": "Muy cómodo para escribir en iPad. Recomendado.",
                    "imagenDePerfil": "/images/usuarios/federico_ayala.jpg"
                },
                {
                    "nombreDeUsuario": "noelia_gomez",
                    "textoDelComentario": "Requiere iPad compatible, ojo con eso. Excelente calidad.",
                    "imagenDePerfil": "/images/usuarios/noelia_gomez.jpg"
                }
            ]
        },
        {
            "imagen": "/images/productos/iphone-16.jpg",
            "nombre": "iPhone 16 256GB",
            "descripcion": "Último modelo de Apple con cámara mejorada, pantalla ProMotion y chip A18 Bionic.",
            "comentarios": [
                {
                    "nombreDeUsuario": "ivan_carrizo",
                    "textoDelComentario": "Va rapidísimo, la cámara nocturna es otro nivel.",
                    "imagenDePerfil": "/images/usuarios/ivan_carrizo.jpg"
                },
                {
                    "nombreDeUsuario": "sofia_mansilla",
                    "textoDelComentario": "Muy caro pero la experiencia es única. Amo iOS.",
                    "imagenDePerfil": "/images/usuarios/sofia_mansilla.jpg"
                },
                {
                    "nombreDeUsuario": "bruno_torres",
                    "textoDelComentario": "Lo tengo hace una semana y ya no quiero volver a Android.",
                    "imagenDePerfil": "/images/usuarios/bruno_torres.jpg"
                },
                {
                    "nombreDeUsuario": "martina_acevedo",
                    "textoDelComentario": "Gran duración de batería, y Face ID muy preciso.",
                    "imagenDePerfil": "/images/usuarios/martina_acevedo.jpg"
                },
                {
                    "nombreDeUsuario": "gustavo_paz",
                    "textoDelComentario": "Un lujo. Lo uso para todo, incluso edición de video.",
                    "imagenDePerfil": "/images/usuarios/gustavo_paz.jpg"
                }
            ]
        },
        {
            "imagen": "/images/productos/ipad.jpg",
            "nombre": "iPad Air 5ta Generación",
            "descripcion": "Tablet con chip M1 y pantalla Liquid Retina, ideal para creatividad y productividad portátil.",
            "comentarios": [
                {
                    "nombreDeUsuario": "lourdes_salinas",
                    "textoDelComentario": "Muy fluida, perfecta para leer, dibujar o editar.",
                    "imagenDePerfil": "/images/usuarios/lourdes_salinas.jpg"
                },
                {
                    "nombreDeUsuario": "julian_ruiz",
                    "textoDelComentario": "Funciona como una mini laptop con teclado y lápiz.",
                    "imagenDePerfil": "/images/usuarios/julian_ruiz.jpg"
                },
                {
                    "nombreDeUsuario": "camila_paz",
                    "textoDelComentario": "Ligera, potente y con batería que dura todo el día.",
                    "imagenDePerfil": "/images/usuarios/camila_paz.jpg"
                },
                {
                    "nombreDeUsuario": "nicolas_aguirre",
                    "textoDelComentario": "La pantalla es brillante y se ve increíble.",
                    "imagenDePerfil": "/images/usuarios/nicolas_aguirre.jpg"
                },
                {
                    "nombreDeUsuario": "florencia_bustos",
                    "textoDelComentario": "Es mi herramienta principal para estudiar y tomar notas.",
                    "imagenDePerfil": "/images/usuarios/florencia_bustos.jpg"
                }
            ]
        },{
            "imagen": "/images/productos/iphone-15-pro-max.jpg",
            "nombre": "iPhone 15 Pro Max 512GB",
            "descripcion": "Smartphone premium con estructura de titanio, chip A17 Pro, y cámara teleobjetivo de 5x.",
            "comentarios": [
                {
                    "nombreDeUsuario": "antonella_mora",
                    "textoDelComentario": "La cámara es impresionante. Fotos como una reflex.",
                    "imagenDePerfil": "/images/usuarios/antonella_mora.jpg"
                },
                {
                    "nombreDeUsuario": "facundo_soria",
                    "textoDelComentario": "Más liviano que el 14 Pro Max. Se nota el titanio.",
                    "imagenDePerfil": "/images/usuarios/facundo_soria.jpg"
                },
                {
                    "nombreDeUsuario": "jazmin_torres",
                    "textoDelComentario": "El mejor celular que tuve, rápido y fluido.",
                    "imagenDePerfil": "/images/usuarios/jazmin_torres.jpg"
                },
                {
                    "nombreDeUsuario": "matias_olivera",
                    "textoDelComentario": "Excelente para juegos y edición de video.",
                    "imagenDePerfil": "/images/usuarios/matias_olivera.jpg"
                },
                {
                    "nombreDeUsuario": "agustina_flores",
                    "textoDelComentario": "No hay nada igual en Android. Es otra cosa.",
                    "imagenDePerfil": "/images/usuarios/agustina_flores.jpg"
                }
            ]
        },
        {
            "imagen": "/images/productos/samsung-s24.jpg",
            "nombre": "Samsung Galaxy S24 Ultra",
            "descripcion": "Smartphone Android con cámara de 200 MP, pantalla AMOLED 6.8'' y S-Pen integrado.",
            "comentarios": [
                {
                    "nombreDeUsuario": "delfina_romero",
                    "textoDelComentario": "Lo uso para todo, incluso firmar documentos con el lápiz.",
                    "imagenDePerfil": "/images/usuarios/delfina_romero.jpg"
                },
                {
                    "nombreDeUsuario": "leandro_varela",
                    "textoDelComentario": "La cámara con zoom es brutal. Ideal para fotos a distancia.",
                    "imagenDePerfil": "/images/usuarios/leandro_varela.jpg"
                },
                {
                    "nombreDeUsuario": "celeste_aranda",
                    "textoDelComentario": "Android fluido y muy personalizable. Amo One UI.",
                    "imagenDePerfil": "/images/usuarios/celeste_aranda.jpg"
                },
                {
                    "nombreDeUsuario": "alejandro_muñoz",
                    "textoDelComentario": "La batería dura más que otros Samsung que tuve.",
                    "imagenDePerfil": "/images/usuarios/alejandro_muñoz.jpg"
                },
                {
                    "nombreDeUsuario": "carina_quinteros",
                    "textoDelComentario": "Muy grande pero me acostumbré rápido. La pantalla se ve hermosa.",
                    "imagenDePerfil": "/images/usuarios/carina_quinteros.jpg"
                }
            ]
        },
        {
            "imagen": "/images/productos/apple-watch-4.jpg",
            "nombre": "Apple Watch Series 4 GPS 44mm",
            "descripcion": "Smartwatch con monitor de ritmo cardíaco, seguimiento de actividad y diseño más amplio.",
            "comentarios": [
                {
                    "nombreDeUsuario": "daniel_rojas",
                    "textoDelComentario": "Me ayuda a controlar el ritmo en mis entrenamientos.",
                    "imagenDePerfil": "/images/usuarios/daniel_rojas.jpg"
                },
                {
                    "nombreDeUsuario": "camila_tapia",
                    "textoDelComentario": "Súper útil para contestar llamadas y ver notificaciones.",
                    "imagenDePerfil": "/images/usuarios/camila_tapia.jpg"
                },
                {
                    "nombreDeUsuario": "franco_vidal",
                    "textoDelComentario": "Buen diseño y muy cómodo para llevar todo el día.",
                    "imagenDePerfil": "/images/usuarios/franco_vidal.jpg"
                },
                {
                    "nombreDeUsuario": "barbara_acosta",
                    "textoDelComentario": "Ideal para hacer deporte. Se sincroniza perfecto con el iPhone.",
                    "imagenDePerfil": "/images/usuarios/barbara_acosta.jpg"
                },
                {
                    "nombreDeUsuario": "ignacio_silva",
                    "textoDelComentario": "Ya no puedo vivir sin él. Me motiva a moverme más.",
                    "imagenDePerfil": "/images/usuarios/ignacio_silva.jpg"
                }
            ]
        },
        {
            "imagen": "/images/productos/apple-watch-5.jpg",
            "nombre": "Apple Watch Series 5 GPS 44mm",
            "descripcion": "Versión mejorada con pantalla siempre encendida, brújula integrada y almacenamiento aumentado.",
            "comentarios": [
                {
                    "nombreDeUsuario": "romina_fernandez",
                    "textoDelComentario": "La pantalla siempre encendida es un golazo. Se ve genial al sol.",
                    "imagenDePerfil": "/images/usuarios/romina_fernandez.jpg"
                },
                {
                    "nombreDeUsuario": "esteban_luna",
                    "textoDelComentario": "Más rápido que el serie 4 y con más espacio para apps.",
                    "imagenDePerfil": "/images/usuarios/esteban_luna.jpg"
                },
                {
                    "nombreDeUsuario": "julieta_barrios",
                    "textoDelComentario": "Lo uso para entrenar, controlar la música y hasta dormir.",
                    "imagenDePerfil": "/images/usuarios/julieta_barrios.jpg"
                },
                {
                    "nombreDeUsuario": "sebastian_ferrari",
                    "textoDelComentario": "Excelente reloj para el día a día. Muy práctico.",
                    "imagenDePerfil": "/images/usuarios/sebastian_ferrari.jpg"
                },
                {
                    "nombreDeUsuario": "mariana_paredes",
                    "textoDelComentario": "Hermoso diseño, y útil para monitoreo de salud.",
                    "imagenDePerfil": "/images/usuarios/mariana_paredes.jpg"
                }
            ]
        }
    ]
};

module.exports = db;
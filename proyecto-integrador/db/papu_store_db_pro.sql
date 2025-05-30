create schema papu_store_db_pro;
USE papu_store_db_pro;

create table usuarios(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(500) NOT NULL,
    contraseña VARCHAR(500) NOT NULL,
    fecha DATE NOT NULL,
    dni INT UNSIGNED NOT NULL,
    
    -- En el caso de no subir foto de perfil pone foto predeterminada.
    perfil VARCHAR(500) DEFAULT "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);
create table productos(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    idUsuario INT UNSIGNED NOT NULL,
    imagen VARCHAR(500) NOT NULL,
    imagen2 VARCHAR(500) DEFAULT NULL,
    nombre VARCHAR(500) NOT NULL,
    descripcion VARCHAR(500) NOT NULL,
    descripcionCorta VARCHAR(500) NOT NULL,
    
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);
create table comentarios(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    idProducto INT UNSIGNED NOT NULL,
    idUsuario INT UNSIGNED NOT NULL,
    texto VARCHAR(500) NOT NULL,
    
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (idProducto) REFERENCES productos(id),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

INSERT INTO usuarios (email, contraseña, fecha, dni, perfil)
VALUES 
("julieta.ramirez@gmail.com", "Ramirez2025!", "2000-05-12", 32450128, "profile1.jpg"),
("tomas.alvarez@hotmail.com", "Tomas_A123", "1998-08-21", 40823917, "profile2.jpg"),
("caro.peralta@yahoo.com", "Caro.2025#", "2002-03-10", 36792044, "profile3.jpg"),
("martin.lopez@gmail.com", "Mlopez_89", "1999-11-01", 38015637, "profile4.jpg"),
("agustina.duarte@outlook.com", "AgustinaD*", "2001-02-15", 34776302, "profile5.jpg"),
("valentina.rios@gmail.com", "Valen2025!", "1997-03-24", 33123456, "profile6.jpg"),
("andres.ferreyra@hotmail.com", "Ferreyra_2024", "1995-07-18", 30258741, "profile7.jpg"),
("mauro.castro@yahoo.com", "MauroC*89", "1994-11-30", 28934567, "profile8.jpg"),
("luz.benitez@gmail.com", "LuzB#2023", "2000-06-12", 34123456, "profile9.jpg"),
("dario.gomez@outlook.com", "Dario1234!", "1998-01-25", 31987654, "profile10.jpg"),
("carla.mendez@gmail.com", "CarlaM_2024", "1999-08-15", 35765432, "profile11.jpg"),
("ramiro.fernandez@hotmail.com", "RamiroF@2023", "1996-10-05", 31247896, "profile12.jpg"),
("sabrina.lopez@yahoo.com", "Sabri.2025!", "2001-12-09", 36894512, "profile13.jpg"),
("franco.molina@gmail.com", "FrancoM*22", "1995-05-28", 29567891, "profile14.jpg"),
("natalia.rodriguez@outlook.com", "NatyR#2024", "1997-09-11", 32789145, "profile15.jpg");


INSERT INTO productos (idUsuario, imagen, imagen2, nombre, descripcionCorta, descripcion) VALUES
(1, 'pendrive-sandisk-128gb.webp', 'pendrive-sandisk-128gb-2.webp', 'Pendrive SanDisk Ultra 128GB USB 3.0', 'Almacenamiento rápido y confiable para tus archivos personales, con velocidad.', 'Almacenamiento rápido y confiable para tus archivos personales, con velocidad de transferencia hasta 10 veces mayor que USB 2.0. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.'),
(1, 'auriculares-jbl-510bt.webp', 'auriculares-jbl-510bt-2.webp', 'Auriculares Inalámbricos JBL Tune 510BT', 'Auriculares Bluetooth con sonido JBL Pure Bass, batería de hasta.', 'Auriculares Bluetooth con sonido JBL Pure Bass, batería de hasta 40 horas y carga rápida. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.'),
(2, 'notebook-lenovo-ideapad.webp', 'notebook-lenovo-ideapad-2.webp', 'Notebook Lenovo IdeaPad 3 15.6 Ryzen 5', 'Portátil potente y versátil con procesador AMD Ryzen 5, ideal.', 'Portátil potente y versátil con procesador AMD Ryzen 5, ideal para trabajo y estudio diario. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.'),
(2, 'apple-pencil-2.webp', 'apple-pencil-2-2.webp', 'Apple Pencil 2da Generación', 'Lápiz digital preciso y sensible a la presión, ideal para.', 'Lápiz digital preciso y sensible a la presión, ideal para artistas y diseñadores que usan iPad Pro. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.'),
(3, 'iphone-16.webp', 'iphone-16-2.webp', 'iPhone 16 256GB', 'Último modelo de Apple con cámara mejorada, pantalla ProMotion y.', 'Último modelo de Apple con cámara mejorada, pantalla ProMotion y chip A18 Bionic. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.'),
(3, 'ipad-air-5.webp', 'ipad-air-5-2.webp', 'iPad Air 5ta Generación', 'Tablet con chip M1 y pantalla Liquid Retina, ideal para.', 'Tablet con chip M1 y pantalla Liquid Retina, ideal para creatividad y productividad portátil. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.'),
(4, 'iphone-15-pro-max.webp', 'iphone-15-pro-max-2.webp', 'iPhone 15 Pro Max 512GB', 'Smartphone premium con estructura de titanio, chip A17 Pro, y.', 'Smartphone premium con estructura de titanio, chip A17 Pro, y cámara teleobjetivo de 5x. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.'),
(4, 'samsung-s24-ultra.webp', 'samsung-s24-ultra-2.webp', 'Samsung Galaxy S24 Ultra', 'Smartphone Android con cámara de 200 MP, pantalla AMOLED 6.8.', 'Smartphone Android con cámara de 200 MP, pantalla AMOLED 6.8 y S-Pen integrado. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.'),
(5, 'apple-watch-4.webp', 'apple-watch-4-2.webp', 'Apple Watch Series 4 GPS 44mm', 'Smartwatch con monitor de ritmo cardíaco, seguimiento de actividad y.', 'Smartwatch con monitor de ritmo cardíaco, seguimiento de actividad y diseño más amplio. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.'),
(5, 'apple-watch-5.webp', 'apple-watch-5-2.webp', 'Apple Watch Series 5 GPS 44mm', 'Versión mejorada con pantalla siempre encendida, brújula integrada y almacenamiento.', 'Versión mejorada con pantalla siempre encendida, brújula integrada y almacenamiento aumentado. Diseñado para ofrecer un rendimiento excepcional, este producto combina durabilidad, eficiencia y una experiencia de usuario sobresaliente. Ideal para usuarios exigentes que valoran calidad y funcionalidad en su día a día.');


INSERT INTO comentarios (idProducto, idUsuario, texto) VALUES

(1, 1, 'Muy útil para llevar documentos, funciona rápido y sin errores.'),
(1, 2, 'Buena relación calidad-precio, lo uso a diario en el trabajo.'),
(1, 3, 'Me hubiese gustado que fuera metálico, pero cumple muy bien.'),
(1, 4, 'Ideal para respaldar fotos y videos. Lo recomiendo.'),
(1, 5, 'Rápido y compacto. Lo llevo siempre conmigo.'),


(2, 6, 'Excelente sonido y muy cómodos, los uso para entrenar.'),
(2, 7, 'Buena batería, aunque se siente un poco plástico.'),
(2, 8, 'Perfectos para escuchar música y atender llamadas.'),
(2, 9, 'Me sorprendió la calidad del audio, vale la pena.'),
(2, 10, 'Livianos y con buena conexión, no se corta el bluetooth.'),


(3, 11, 'Muy rápida para tareas cotidianas. Se calienta un poco con juegos.'),
(3, 12, 'Perfecta para clases online y ofimática.'),
(3, 13, 'Buena compra por el precio. Windows ya preinstalado.'),
(3, 14, 'Pantalla nítida y teclado cómodo. Ideal para escribir.'),
(3, 15, 'Cumple con todo lo que necesito. Buena batería.'),


(4, 1, 'Increíble precisión, lo uso para ilustrar en Procreate.'),
(4, 2, 'Carga magnética muy práctica. Funciona genial.'),
(4, 3, 'Es costoso, pero vale cada peso si dibujás o tomás notas.'),
(4, 4, 'Muy cómodo para escribir en iPad. Recomendado.'),
(4, 5, 'Requiere iPad compatible, ojo con eso. Excelente calidad.'),


(5, 6, 'Va rapidísimo, la cámara nocturna es otro nivel.'),
(5, 7, 'Muy caro pero la experiencia es única. Amo iOS.'),
(5, 8, 'Lo tengo hace una semana y ya no quiero volver a Android.'),
(5, 9, 'Gran duración de batería, y Face ID muy preciso.'),
(5, 10, 'Un lujo. Lo uso para todo, incluso edición de video.'),


(6, 11, 'Muy fluida, perfecta para leer, dibujar o editar.'),
(6, 12, 'Funciona como una mini laptop con teclado y lápiz.'),
(6, 13, 'Ligera, potente y con batería que dura todo el día.'),
(6, 14, 'La pantalla es brillante y se ve increíble.'),
(6, 15, 'Es mi herramienta principal para estudiar y tomar notas.'),


(7, 1, 'La cámara es impresionante. Fotos como una reflex.'),
(7, 2, 'Más liviano que el 14 Pro Max. Se nota el titanio.'),
(7, 3, 'El mejor celular que tuve, rápido y fluido.'),
(7, 4, 'Excelente para juegos y edición de video.'),
(7, 5, 'No hay nada igual en Android. Es otra cosa.'),


(8, 6, 'Lo uso para todo, incluso firmar documentos con el lápiz.'),
(8, 7, 'La cámara con zoom es brutal. Ideal para fotos a distancia.'),
(8, 8, 'Android fluido y muy personalizable. Amo One UI.'),
(8, 9, 'La batería dura más que otros Samsung que tuve.'),
(8, 10, 'Muy grande pero me acostumbré rápido. La pantalla se ve hermosa.'),


(9, 11, 'Me ayuda a controlar el ritmo en mis entrenamientos.'),
(9, 12, 'Súper útil para contestar llamadas y ver notificaciones.'),
(9, 13, 'Buen diseño y muy cómodo para llevar todo el día.'),
(9, 14, 'Ideal para hacer deporte. Se sincroniza perfecto con el iPhone.'),
(9, 15, 'Ya no puedo vivir sin él. Me motiva a moverme más.'),


(10, 1, 'La pantalla siempre encendida es un golazo. Se ve genial al sol.'),
(10, 2, 'Más rápido que el serie 4 y con más espacio para apps.'),
(10, 3, 'Lo uso para entrenar, controlar la música y hasta dormir.'),
(10, 4, 'Excelente reloj para el día a día. Muy práctico.'),
(10, 5, 'Hermoso diseño, y útil para monitoreo de salud.');


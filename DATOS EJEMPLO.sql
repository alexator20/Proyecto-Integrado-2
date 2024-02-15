use bbddsempreavant;

INSERT INTO evento (nombre, fecha, numeroparticipantes) VALUES
('Evento 1', '2024-02-14', 50),
('Evento 2', '2024-03-20', 30),
('Evento 3', '2024-04-10', 25),
('Evento 4', '2024-05-05', 40),
('Evento 5', '2024-06-15', 60),
('Evento 6', '2024-07-22', 55),
('Evento 7', '2024-08-18', 70),
('Evento 8', '2024-09-12', 45),
('Evento 9', '2024-10-25', 35),
('Evento 10', '2024-11-08', 20),
('Evento 11', '2024-12-01', 65),
('Evento 12', '2025-01-14', 75),
('Evento 13', '2025-02-28', 80),
('Evento 14', '2025-03-10', 55),
('Evento 15', '2025-04-05', 40),
('Evento 16', '2025-05-20', 30),
('Evento 17', '2025-06-08', 50),
('Evento 18', '2025-07-15', 65),
('Evento 19', '2025-08-29', 70),
('Evento 20', '2025-09-18', 25);


INSERT INTO grupo(nombre,seccion) VALUES
("Lobatos", "Manada"),
("Golondrinas", "Tropa"),
("Panteras", "Tropa"),
("Castores", "Tropa"),
("Lobos", "Tropa"),
("Esculta","Esculta");

INSERT INTO usuario(grupo_perteneciente_id, nombre, edad, rol) VALUES
(1, "Juan", 10, "Usuario"),
(1, "María", 9, "Usuario"),
(1, "Pedro", 11, "Administrador"),
(1, "Ana", 10, "Usuario"),
(2, "Sofía", 12, "Administrador"),
(2, "Diego", 11, "Usuario"),
(2, "Laura", 10, "Usuario"),
(3, "Carlos", 12, "Usuario"),
(3, "Lucía", 9, "Usuario"),
(3, "Elena", 11, "Administrador"),
(4, "Mateo", 9, "Usuario"),
(4, "Julia", 11, "Usuario"),
(4, "Adrián", 10, "Usuario"),
(5, "Isabella", 12, "Administrador"),
(5, "Daniel", 10, "Usuario"),
(5, "Valentina", 11, "Usuario"),
(6, "Alejandro", 12, "Administrador"),
(6, "Paula", 9, "Usuario"),
(6, "Miguel", 10, "Usuario"),
(6, "Carmen", 11, "Usuario");

INSERT INTO rel_grupo_evento (grupo_id, evento_id, puntuacion_evento_grupo) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 1),
(2, 2, 2),
(3, 2, 2),
(4, 2, 2),
(5, 2, 2),
(6, 2, 2),
(1, 3, 3),
(4, 3, 3),
(5, 3, 3),
(1, 6, 6),
(1, 6, 6),
(1, 6, 6),
(1, 6, 6);

const MODULES = [
 {name:"Primeiras consultas",level:"Beginner",topics:"SELECT · FROM · DISTINCT · LIMIT"},
 {name:"Filtragem e ordenação",level:"Beginner → Intermediate",topics:"WHERE · AND · OR · NOT · IN · ORDER BY"},
 {name:"Agregação e agrupamentos",level:"Intermediate",topics:"COUNT · SUM · AVG · MIN · MAX · GROUP BY · HAVING"},
 {name:"Relacionamento entre tabelas",level:"Intermediate → Advanced",topics:"JOIN · INNER JOIN · LEFT JOIN · PK · FK"},
 {name:"Manipulação de dados",level:"Intermediate",topics:"INSERT INTO · VALUES · UPDATE · DELETE"},
 {name:"Estrutura e integração",level:"Advanced",topics:"CREATE TABLE · ALTER TABLE · DROP TABLE · Constraints"}
];
const EXERCISES = [
[
 {title:"Exibir todos os alunos",prompt:"Consulte todas as colunas e todos os registros da tabela de alunos.",starter:"SELECT __BLANK1__\nFROM students;",solution:"SELECT *\nFROM students;",check:"SELECT * FROM students;",hints:["SELECT indica quais colunas serão retornadas. Para todas as colunas, existe um caractere curinga.","Use o símbolo * na lista de colunas.","Substitua __BLANK1__ por * para retornar todas as colunas de students."],difficulty:"Easy"},
 {title:"Exibir nomes dos alunos",prompt:"Retorne somente a coluna name da tabela students.",starter:"SELECT __BLANK1__\nFROM students;",solution:"SELECT name\nFROM students;",check:"SELECT name FROM students;",hints:["Uma consulta pode retornar apenas as colunas necessárias.","Use o nome exato da coluna que contém os nomes.","Substitua __BLANK1__ por name."],difficulty:"Easy"},
 {title:"Nomes e cidades",prompt:"Mostre o nome e a cidade de cada aluno, nessa ordem.",starter:"SELECT __BLANK1__, __BLANK2__\nFROM students;",solution:"SELECT name, city\nFROM students;",check:"SELECT name, city FROM students;",hints:["SELECT aceita uma lista de colunas separadas por vírgulas.","A primeira coluna é name; a segunda é city.","Preencha as lacunas com name e city, nessa ordem."],difficulty:"Easy"},
 {title:"Cidades sem repetição",prompt:"Liste cada cidade uma única vez, sem duplicatas.",starter:"SELECT __BLANK1__ city\nFROM students;",solution:"SELECT DISTINCT city\nFROM students;",check:"SELECT DISTINCT city FROM students;",hints:["Há uma palavra-chave que elimina linhas duplicadas do resultado.","A palavra-chave vem antes do nome da coluna.","Use DISTINCT na primeira lacuna: SELECT DISTINCT city."],difficulty:"Medium"},
 {title:"Limitar a listagem",prompt:"Mostre somente os três primeiros registros de students.",starter:"SELECT *\nFROM students\n__BLANK1__;",solution:"SELECT *\nFROM students\nLIMIT 3;",check:"SELECT * FROM students LIMIT 3;",hints:["SQLite oferece uma cláusula para limitar a quantidade de linhas retornadas.","A cláusula começa com LIMIT e recebe um número.","Substitua __BLANK1__ por LIMIT 3."],difficulty:"Medium"},
 {title:"Desafio do módulo: catálogo de alunos",prompt:"Crie uma listagem com nome e e-mail dos alunos, mostrando no máximo cinco registros.",starter:"SELECT __BLANK1__, __BLANK2__\nFROM students\n__BLANK3__;",solution:"SELECT name, email\nFROM students\nLIMIT 5;",check:"SELECT name, email FROM students LIMIT 5;",hints:["A consulta precisa selecionar duas colunas e limitar a quantidade de linhas.","Use name e email no SELECT; a cláusula de limite vem depois do FROM.","Preencha as lacunas com name, email e LIMIT 5."],difficulty:"Challenge"}
],
[
 {title:"Alunos de uma cidade",prompt:"Retorne os alunos que moram em Lisboa.",starter:"SELECT name, city\nFROM students\nWHERE city = '__BLANK1__';",solution:"SELECT name, city FROM students WHERE city = 'Lisboa';",check:"SELECT name, city FROM students WHERE city = 'Lisboa';",hints:["WHERE filtra as linhas antes de apresentar o resultado.","Compare a coluna city com um texto entre aspas simples.","Preencha a lacuna com Lisboa, sem remover as aspas existentes."],difficulty:"Easy"},
 {title:"Filtro por duas condições",prompt:"Mostre os alunos de Lisboa cujo nome começa por Ana. Use AND.",starter:"SELECT name, city\nFROM students\nWHERE city = 'Lisboa' __BLANK1__ name LIKE 'Ana%';",solution:"SELECT name, city FROM students WHERE city = 'Lisboa' AND name LIKE 'Ana%';",check:"SELECT name, city FROM students WHERE city = 'Lisboa' AND name LIKE 'Ana%';",hints:["Para exigir que as duas condições sejam verdadeiras, combine-as com um operador lógico.","O operador necessário é AND.","Substitua __BLANK1__ por AND."],difficulty:"Medium"},
 {title:"Uma cidade ou outra",prompt:"Liste alunos que moram em Lisboa ou no Porto.",starter:"SELECT name, city\nFROM students\nWHERE city = 'Lisboa' __BLANK1__ city = 'Porto';",solution:"SELECT name, city FROM students WHERE city = 'Lisboa' OR city = 'Porto';",check:"SELECT name, city FROM students WHERE city = 'Lisboa' OR city = 'Porto';",hints:["Basta uma das duas condições ser verdadeira.","Use o operador lógico que significa 'ou'.","Substitua __BLANK1__ por OR."],difficulty:"Medium"},
 {title:"Selecionar cidades com IN",prompt:"Mostre os alunos de Lisboa, Porto ou Coimbra usando IN.",starter:"SELECT name, city\nFROM students\nWHERE city __BLANK1__ ('Lisboa', 'Porto', 'Coimbra');",solution:"SELECT name, city FROM students WHERE city IN ('Lisboa', 'Porto', 'Coimbra');",check:"SELECT name, city FROM students WHERE city IN ('Lisboa', 'Porto', 'Coimbra');",hints:["IN verifica se um valor pertence a uma lista.","A palavra-chave é colocada depois de city.","Substitua __BLANK1__ por IN."],difficulty:"Medium"},
 {title:"Excluir uma cidade",prompt:"Liste alunos que não moram em Lisboa.",starter:"SELECT name, city\nFROM students\nWHERE __BLANK1__ city = 'Lisboa';",solution:"SELECT name, city FROM students WHERE NOT city = 'Lisboa';",check:"SELECT name, city FROM students WHERE NOT city = 'Lisboa';",hints:["NOT inverte o resultado lógico de uma condição.","A condição a negar é city = 'Lisboa'.","Use NOT antes de city."],difficulty:"Medium"},
 {title:"Desafio: ordenar alunos filtrados",prompt:"Mostre os alunos do Porto, ordenados alfabeticamente pelo nome.",starter:"SELECT name, city\nFROM students\nWHERE city = 'Porto'\n__BLANK1__;",solution:"SELECT name, city FROM students WHERE city = 'Porto' ORDER BY name ASC;",check:"SELECT name, city FROM students WHERE city = 'Porto' ORDER BY name ASC;",hints:["WHERE seleciona os alunos da cidade; ORDER BY organiza o resultado.","A cláusula de ordenação usa ORDER BY e o nome da coluna.","Preencha com ORDER BY name ASC."],difficulty:"Challenge"}
],
[
 {title:"Contar alunos",prompt:"Conte quantos registros existem em students.",starter:"SELECT __BLANK1__(*) AS student_count\nFROM students;",solution:"SELECT COUNT(*) AS student_count FROM students;",check:"SELECT COUNT(*) AS student_count FROM students;",hints:["Uma função de agregação pode contar linhas.","A função começa com COUNT e recebe * para contar todas as linhas.","Substitua __BLANK1__ por COUNT."],difficulty:"Easy"},
 {title:"Média das notas",prompt:"Calcule a média das notas registradas em enrollments.",starter:"SELECT __BLANK1__(grade) AS average_grade\nFROM enrollments;",solution:"SELECT AVG(grade) AS average_grade FROM enrollments;",check:"SELECT AVG(grade) AS average_grade FROM enrollments;",hints:["A média aritmética é calculada por uma função de agregação.","A função SQL é AVG.","Substitua __BLANK1__ por AVG."],difficulty:"Easy"},
 {title:"Maior nota",prompt:"Encontre a maior nota registrada.",starter:"SELECT __BLANK1__(grade) AS highest_grade\nFROM enrollments;",solution:"SELECT MAX(grade) AS highest_grade FROM enrollments;",check:"SELECT MAX(grade) AS highest_grade FROM enrollments;",hints:["Para encontrar o maior valor de uma coluna, use uma função de agregação.","A função necessária é MAX.","Substitua __BLANK1__ por MAX."],difficulty:"Easy"},
 {title:"Quantidade por curso",prompt:"Conte quantas matrículas existem para cada course_id.",starter:"SELECT course_id, COUNT(*) AS enrollment_count\nFROM enrollments\nGROUP BY __BLANK1__;",solution:"SELECT course_id, COUNT(*) AS enrollment_count FROM enrollments GROUP BY course_id;",check:"SELECT course_id, COUNT(*) AS enrollment_count FROM enrollments GROUP BY course_id;",hints:["GROUP BY reúne linhas que compartilham o mesmo valor.","Agrupe pela coluna que identifica o curso.","Substitua __BLANK1__ por course_id."],difficulty:"Medium"},
 {title:"Filtrar grupos",prompt:"Mostre apenas os cursos com pelo menos duas matrículas. Use HAVING.",starter:"SELECT course_id, COUNT(*) AS enrollment_count\nFROM enrollments\nGROUP BY course_id\nHAVING COUNT(*) __BLANK1__ 2;",solution:"SELECT course_id, COUNT(*) AS enrollment_count FROM enrollments GROUP BY course_id HAVING COUNT(*) >= 2;",check:"SELECT course_id, COUNT(*) AS enrollment_count FROM enrollments GROUP BY course_id HAVING COUNT(*) >= 2;",hints:["HAVING filtra grupos depois de GROUP BY.","A condição deve manter contagens iguais ou superiores a 2.","Use o operador >= na lacuna."],difficulty:"Medium"},
 {title:"Desafio: resumo de notas",prompt:"Para cada curso, mostre o número de matrículas e a média das notas. Ordene pela média da maior para a menor.",starter:"SELECT course_id, COUNT(*) AS total, AVG(grade) AS average_grade\nFROM enrollments\nGROUP BY course_id\n__BLANK1__;",solution:"SELECT course_id, COUNT(*) AS total, AVG(grade) AS average_grade FROM enrollments GROUP BY course_id ORDER BY average_grade DESC;",check:"SELECT course_id, COUNT(*) AS total, AVG(grade) AS average_grade FROM enrollments GROUP BY course_id ORDER BY average_grade DESC;",hints:["A consulta já agrupa os dados; falta ordenar o resultado final.","Use ORDER BY sobre o alias average_grade.","Preencha com ORDER BY average_grade DESC."],difficulty:"Challenge"}
],
[
 {title:"Alunos e matrículas",prompt:"Combine students e enrollments usando student_id.",starter:"SELECT students.name, enrollments.enrollment_date\nFROM students\n__BLANK1__ enrollments ON students.student_id = enrollments.student_id;",solution:"SELECT students.name, enrollments.enrollment_date FROM students INNER JOIN enrollments ON students.student_id = enrollments.student_id;",check:"SELECT students.name, enrollments.enrollment_date FROM students INNER JOIN enrollments ON students.student_id = enrollments.student_id;",hints:["Para combinar registros correspondentes de duas tabelas, use uma junção.","A junção que retorna apenas correspondências é INNER JOIN.","Substitua __BLANK1__ por INNER JOIN."],difficulty:"Medium"},
 {title:"Cursos e professores",prompt:"Mostre o nome do curso e o nome do professor responsável.",starter:"SELECT courses.course_name, teachers.name\nFROM courses\nJOIN teachers ON courses.teacher_id = teachers.__BLANK1__;",solution:"SELECT courses.course_name, teachers.name FROM courses JOIN teachers ON courses.teacher_id = teachers.teacher_id;",check:"SELECT courses.course_name, teachers.name FROM courses JOIN teachers ON courses.teacher_id = teachers.teacher_id;",hints:["A condição ON compara a chave estrangeira do curso com a chave primária do professor.","A coluna correspondente em teachers é teacher_id.","Substitua __BLANK1__ por teacher_id."],difficulty:"Medium"},
 {title:"Matrículas e cursos",prompt:"Mostre a data da matrícula e o nome do curso correspondente.",starter:"SELECT enrollments.enrollment_date, courses.course_name\nFROM enrollments\nJOIN courses ON enrollments.course_id = courses.__BLANK1__;",solution:"SELECT enrollments.enrollment_date, courses.course_name FROM enrollments JOIN courses ON enrollments.course_id = courses.course_id;",check:"SELECT enrollments.enrollment_date, courses.course_name FROM enrollments JOIN courses ON enrollments.course_id = courses.course_id;",hints:["A matrícula guarda course_id como chave estrangeira.","Compare com a chave primária da tabela courses.","Substitua __BLANK1__ por course_id."],difficulty:"Medium"},
 {title:"Preservar todos os alunos",prompt:"Mostre todos os alunos, mesmo os que não têm matrícula, usando LEFT JOIN.",starter:"SELECT students.name, enrollments.enrollment_id\nFROM students\n__BLANK1__ enrollments ON students.student_id = enrollments.student_id;",solution:"SELECT students.name, enrollments.enrollment_id FROM students LEFT JOIN enrollments ON students.student_id = enrollments.student_id;",check:"SELECT students.name, enrollments.enrollment_id FROM students LEFT JOIN enrollments ON students.student_id = enrollments.student_id;",hints:["A consulta deve preservar todas as linhas da tabela à esquerda.","Use a junção que mantém todas as linhas da tabela students.","Substitua __BLANK1__ por LEFT JOIN."],difficulty:"Medium"},
 {title:"Notas por aluno",prompt:"Liste o nome do aluno e a nota de cada matrícula.",starter:"SELECT students.name, enrollments.grade\nFROM students\nJOIN enrollments ON students.student_id = enrollments.student_id\nORDER BY __BLANK1__;",solution:"SELECT students.name, enrollments.grade FROM students JOIN enrollments ON students.student_id = enrollments.student_id ORDER BY students.name;",check:"SELECT students.name, enrollments.grade FROM students JOIN enrollments ON students.student_id = enrollments.student_id ORDER BY students.name;",hints:["ORDER BY indica qual coluna organiza o resultado.","Ordene pelo nome qualificado da tabela students.","Preencha com students.name."],difficulty:"Medium"},
 {title:"Desafio: curso, professor e matrícula",prompt:"Liste o nome do aluno, o curso e o professor responsável pela matrícula.",starter:"SELECT students.name, courses.course_name, teachers.name AS teacher_name\nFROM enrollments\nJOIN students ON enrollments.student_id = students.student_id\nJOIN courses ON enrollments.course_id = courses.course_id\nJOIN teachers ON courses.teacher_id = teachers.teacher_id\nORDER BY __BLANK1__;",solution:"SELECT students.name, courses.course_name, teachers.name AS teacher_name FROM enrollments JOIN students ON enrollments.student_id = students.student_id JOIN courses ON enrollments.course_id = courses.course_id JOIN teachers ON courses.teacher_id = teachers.teacher_id ORDER BY students.name;",check:"SELECT students.name, courses.course_name, teachers.name AS teacher_name FROM enrollments JOIN students ON enrollments.student_id = students.student_id JOIN courses ON enrollments.course_id = courses.course_id JOIN teachers ON courses.teacher_id = teachers.teacher_id ORDER BY students.name;",hints:["A consulta relaciona quatro tabelas por suas chaves.","O nome do aluno vem da tabela students.","Preencha a lacuna com students.name."],difficulty:"Challenge"}
],
[
 {title:"Inserir um professor",prompt:"Insira um professor com nome 'Taylor Morgan' e especialidade 'Science'.",starter:"INSERT INTO teachers (name, specialty)\nVALUES (__BLANK1__, __BLANK2__);",solution:"INSERT INTO teachers (name, specialty) VALUES ('Taylor Morgan', 'Science');",check:"INSERT INTO teachers (name, specialty) VALUES ('Taylor Morgan', 'Science');",hints:["INSERT INTO indica a tabela e as colunas que receberão os valores.","Textos em SQL devem estar entre aspas simples.","Preencha as lacunas com 'Taylor Morgan' e 'Science'."],difficulty:"Easy"},
 {title:"Inserir um curso",prompt:"Insira o curso 'Astronomy' associado ao professor de teacher_id 1.",starter:"INSERT INTO courses (course_name, teacher_id)\nVALUES (__BLANK1__, __BLANK2__);",solution:"INSERT INTO courses (course_name, teacher_id) VALUES ('Astronomy', 1);",check:"INSERT INTO courses (course_name, teacher_id) VALUES ('Astronomy', 1);",hints:["Os valores devem corresponder à ordem das colunas declaradas.","course_name é texto; teacher_id é um número inteiro.","Use 'Astronomy' na primeira lacuna e 1 na segunda."],difficulty:"Easy"},
 {title:"Atualizar uma especialidade",prompt:"Atualize a especialidade do professor com teacher_id 1 para 'Biology'.",starter:"UPDATE teachers\nSET specialty = __BLANK1__\nWHERE teacher_id = 1;",solution:"UPDATE teachers SET specialty = 'Biology' WHERE teacher_id = 1;",check:"UPDATE teachers SET specialty = 'Biology' WHERE teacher_id = 1;",hints:["UPDATE escolhe a tabela; SET define o novo valor.","O novo valor de specialty é um texto.","Preencha a lacuna com 'Biology'."],difficulty:"Medium"},
 {title:"Atualizar uma nota",prompt:"Altere para 95 a nota da matrícula enrollment_id 1.",starter:"UPDATE enrollments\nSET grade = __BLANK1__\nWHERE enrollment_id = 1;",solution:"UPDATE enrollments SET grade = 95 WHERE enrollment_id = 1;",check:"UPDATE enrollments SET grade = 95 WHERE enrollment_id = 1;",hints:["SET atribui o novo valor à coluna grade.","O valor numérico deve ser escrito sem aspas.","Substitua __BLANK1__ por 95."],difficulty:"Medium"},
 {title:"Excluir um registro específico",prompt:"Remova a matrícula com enrollment_id 12.",starter:"DELETE FROM enrollments\nWHERE enrollment_id = __BLANK1__;",solution:"DELETE FROM enrollments WHERE enrollment_id = 12;",check:"DELETE FROM enrollments WHERE enrollment_id = 12;",hints:["DELETE FROM remove registros da tabela indicada.","WHERE restringe quais registros serão removidos.","Substitua __BLANK1__ por 12."],difficulty:"Medium"},
 {title:"Desafio: inserir e conferir",prompt:"Insira uma nova matrícula para o aluno 1 no curso 2, com data '2026-09-01' e nota 88.",starter:"INSERT INTO enrollments (student_id, course_id, enrollment_date, grade)\nVALUES (__BLANK1__, __BLANK2__, __BLANK3__, __BLANK4__);",solution:"INSERT INTO enrollments (student_id, course_id, enrollment_date, grade) VALUES (1, 2, '2026-09-01', 88);",check:"INSERT INTO enrollments (student_id, course_id, enrollment_date, grade) VALUES (1, 2, '2026-09-01', 88);",hints:["Siga a ordem das quatro colunas entre parênteses.","IDs e nota são números; a data é texto.","Use 1, 2, '2026-09-01' e 88, na ordem apresentada."],difficulty:"Challenge"}
],
[
 {title:"Criar uma tabela simples",prompt:"Crie uma tabela chamada clubs com a coluna club_id do tipo INTEGER.",starter:"CREATE TABLE clubs (\n  club_id __BLANK1__\n);",solution:"CREATE TABLE clubs (club_id INTEGER);",check:"CREATE TABLE clubs (club_id INTEGER);",hints:["CREATE TABLE cria uma nova tabela.","INTEGER é o tipo para números inteiros no SQLite.","Substitua __BLANK1__ por INTEGER."],difficulty:"Easy"},
 {title:"Definir uma chave primária",prompt:"Crie a tabela rooms com room_id como chave primária inteira.",starter:"CREATE TABLE rooms (\n  room_id INTEGER __BLANK1__\n);",solution:"CREATE TABLE rooms (room_id INTEGER PRIMARY KEY);",check:"CREATE TABLE rooms (room_id INTEGER PRIMARY KEY);",hints:["Uma chave primária identifica unicamente cada registro.","A restrição é escrita PRIMARY KEY.","Substitua __BLANK1__ por PRIMARY KEY."],difficulty:"Easy"},
 {title:"Valor padrão",prompt:"Crie a tabela notices com notice_id inteiro e status TEXT com valor padrão 'active'.",starter:"CREATE TABLE notices (\n notice_id INTEGER PRIMARY KEY,\n status TEXT __BLANK1__\n);",solution:"CREATE TABLE notices (notice_id INTEGER PRIMARY KEY, status TEXT DEFAULT 'active');",check:"CREATE TABLE notices (notice_id INTEGER PRIMARY KEY, status TEXT DEFAULT 'active');",hints:["DEFAULT define um valor utilizado quando nenhum valor é informado.","A cláusula recebe o valor padrão após a palavra-chave.","Use DEFAULT 'active'."],difficulty:"Medium"},
 {title:"Aceitar valor ausente",prompt:"Crie a tabela feedback com feedback_id como chave primária e comment como texto que pode ser NULL.",starter:"CREATE TABLE feedback (\n feedback_id INTEGER PRIMARY KEY,\n comment TEXT __BLANK1__\n);",solution:"CREATE TABLE feedback (feedback_id INTEGER PRIMARY KEY, comment TEXT NULL);",check:"CREATE TABLE feedback (feedback_id INTEGER PRIMARY KEY, comment TEXT NULL);",hints:["NULL representa um valor ausente ou desconhecido.","Em SQLite, colunas aceitam NULL por padrão, mas a palavra-chave pode ser escrita explicitamente.","Substitua __BLANK1__ por NULL."],difficulty:"Medium"},
 {title:"Adicionar uma coluna",prompt:"Adicione a coluna phone do tipo TEXT à tabela teachers.",starter:"ALTER TABLE teachers\n__BLANK1__ phone TEXT;",solution:"ALTER TABLE teachers ADD COLUMN phone TEXT;",check:"ALTER TABLE teachers ADD COLUMN phone TEXT;",hints:["ALTER TABLE modifica uma estrutura existente.","Para adicionar uma coluna, use ADD COLUMN.","Substitua __BLANK1__ por ADD COLUMN."],difficulty:"Medium"},
 {title:"Desafio: tabela com restrições",prompt:"Crie uma tabela chamada lab_groups com group_id como chave primária inteira, group_name como texto obrigatório e capacity com valor padrão 20.",starter:"CREATE TABLE lab_groups (\n group_id INTEGER PRIMARY KEY,\n group_name TEXT __BLANK1__,\n capacity INTEGER __BLANK2__\n);",solution:"CREATE TABLE lab_groups (group_id INTEGER PRIMARY KEY, group_name TEXT NOT NULL, capacity INTEGER DEFAULT 20);",check:"CREATE TABLE lab_groups (group_id INTEGER PRIMARY KEY, group_name TEXT NOT NULL, capacity INTEGER DEFAULT 20);",hints:["Uma coluna obrigatória usa uma restrição de nulidade; outra coluna pode ter um valor padrão.","Use NOT NULL para group_name e DEFAULT para capacity.","Preencha com NOT NULL e DEFAULT 20."],difficulty:"Challenge"}
]
];
const CHALLENGES = [
 {title:"Challenge 1 — Student directory",desc:"Combine filtragem, ordenação e seleção de colunas.",prompt:"Liste nome e cidade dos alunos que não moram em Lisboa, ordenados pelo nome.",starter:"SELECT name, city FROM students WHERE city <> '__BLANK1__' ORDER BY __BLANK2__;",solution:"SELECT name, city FROM students WHERE city <> 'Lisboa' ORDER BY name;",check:"SELECT name, city FROM students WHERE city <> 'Lisboa' ORDER BY name;",hints:["Use uma condição de desigualdade e uma ordenação.","O valor excluído é Lisboa e a coluna de ordenação é name.","Preencha com Lisboa e name."],points:5},
 {title:"Challenge 2 — Course report",desc:"Combine JOIN e GROUP BY para produzir um resumo.",prompt:"Mostre o nome de cada curso e o número de matrículas.",starter:"SELECT courses.course_name, COUNT(enrollments.enrollment_id) AS total\nFROM courses LEFT JOIN enrollments ON courses.course_id = enrollments.course_id\nGROUP BY __BLANK1__;",solution:"SELECT courses.course_name, COUNT(enrollments.enrollment_id) AS total FROM courses LEFT JOIN enrollments ON courses.course_id = enrollments.course_id GROUP BY courses.course_id;",check:"SELECT courses.course_name, COUNT(enrollments.enrollment_id) AS total FROM courses LEFT JOIN enrollments ON courses.course_id = enrollments.course_id GROUP BY courses.course_id;",hints:["A consulta já combina as tabelas e conta matrículas.","Agrupe por uma coluna que identifique cada curso.","Use courses.course_id."],points:5},
 {title:"Challenge 3 — Update and verify",desc:"Pratique uma alteração segura em dados.",prompt:"Defina a nota como 90 para a matrícula de ID 2.",starter:"UPDATE enrollments SET grade = __BLANK1__ WHERE enrollment_id = 2;",solution:"UPDATE enrollments SET grade = 90 WHERE enrollment_id = 2;",check:"UPDATE enrollments SET grade = 90 WHERE enrollment_id = 2;",hints:["UPDATE altera dados existentes.","A coluna grade deve receber um valor numérico.","Preencha com 90."],points:5},
 {title:"Challenge 4 — Schema design",desc:"Crie uma tabela com uma chave e um valor padrão.",prompt:"Crie a tabela equipment com equipment_id INTEGER PRIMARY KEY e label TEXT NOT NULL.",starter:"CREATE TABLE equipment (\n equipment_id INTEGER __BLANK1__,\n label TEXT __BLANK2__\n);",solution:"CREATE TABLE equipment (equipment_id INTEGER PRIMARY KEY, label TEXT NOT NULL);",check:"CREATE TABLE equipment (equipment_id INTEGER PRIMARY KEY, label TEXT NOT NULL);",hints:["A chave identifica cada item; o rótulo é obrigatório.","Use PRIMARY KEY e NOT NULL.","Preencha as duas lacunas com PRIMARY KEY e NOT NULL."],points:5}
];
const TABLES = {
 students:{label:"students",desc:"Alunos",columns:[["student_id","INTEGER","PK"],["name","TEXT",""],["birth_date","TEXT",""],["city","TEXT",""],["email","TEXT",""]]},
 teachers:{label:"teachers",desc:"Professores",columns:[["teacher_id","INTEGER","PK"],["name","TEXT",""],["specialty","TEXT",""]]},
 courses:{label:"courses",desc:"Cursos",columns:[["course_id","INTEGER","PK"],["course_name","TEXT",""],["teacher_id","INTEGER","FK → teachers.teacher_id"]]},
 enrollments:{label:"enrollments",desc:"Matrículas",columns:[["enrollment_id","INTEGER","PK"],["student_id","INTEGER","FK → students.student_id"],["course_id","INTEGER","FK → courses.course_id"],["enrollment_date","TEXT",""],["grade","REAL","NULL permitido"]]}
};
let SQL=null, db=null, activeModule=0, activeExercise=0, selectedTable="students", showAll=false, hintStage=0, done=new Set(), scores=new Set(), currentOutput=null, challengeSelected=-1, challengeDone=new Set();
const $=id=>document.getElementById(id);
function seedDb(){
 if(!SQL) return;
 db=new SQL.Database();
 db.run(`PRAGMA foreign_keys = ON;
 CREATE TABLE students(student_id INTEGER PRIMARY KEY, name TEXT NOT NULL, birth_date TEXT, city TEXT, email TEXT);
 CREATE TABLE teachers(teacher_id INTEGER PRIMARY KEY, name TEXT NOT NULL, specialty TEXT);
 CREATE TABLE courses(course_id INTEGER PRIMARY KEY, course_name TEXT NOT NULL, teacher_id INTEGER, FOREIGN KEY(teacher_id) REFERENCES teachers(teacher_id));
 CREATE TABLE enrollments(enrollment_id INTEGER PRIMARY KEY, student_id INTEGER, course_id INTEGER, enrollment_date TEXT, grade REAL, FOREIGN KEY(student_id) REFERENCES students(student_id), FOREIGN KEY(course_id) REFERENCES courses(course_id));
 INSERT INTO students VALUES
 (1,'Ana Silva','2005-03-14','Lisboa','ana.silva@example.edu'),
 (2,'Bruno Costa','2004-11-02','Porto','bruno.costa@example.edu'),
 (3,'Carla Mendes','2005-07-19','Coimbra','carla.mendes@example.edu'),
 (4,'Daniel Rocha','2004-01-28','Lisboa','daniel.rocha@example.edu'),
 (5,'Eva Martins','2005-09-06','Porto','eva.martins@example.edu'),
 (6,'Filipe Sousa','2004-05-22','Braga','filipe.sousa@example.edu'),
 (7,'Ines Ferreira','2005-12-11','Coimbra','ines.ferreira@example.edu'),
 (8,'Joao Pereira','2004-08-30','Lisboa','joao.pereira@example.edu'),
 (9,'Marta Oliveira','2005-02-17','Porto','marta.oliveira@example.edu'),
 (10,'Nuno Almeida','2004-06-09','Braga','nuno.almeida@example.edu');
 INSERT INTO teachers VALUES (1,'Taylor Morgan','Science'),(2,'Alex Kim','Mathematics'),(3,'Jordan Lee','Literature');
 INSERT INTO courses VALUES (1,'Biology',1),(2,'Algebra',2),(3,'Literature',3),(4,'Astronomy',1);
 INSERT INTO enrollments VALUES
 (1,1,1,'2026-02-01',88),(2,1,2,'2026-02-03',92),(3,2,1,'2026-02-04',76),
 (4,2,3,'2026-02-05',81),(5,3,2,'2026-02-06',95),(6,4,1,'2026-02-08',NULL),
 (7,5,4,'2026-02-10',84),(8,6,2,'2026-02-11',73),(9,7,3,'2026-02-12',90),
 (10,8,4,'2026-02-13',87),(11,9,1,'2026-02-14',79),(12,10,3,'2026-02-15',91);`);
}
function query(sql){const res=db.exec(sql);if(!res.length)return {columns:["Status"],values:[["Query executed successfully."]],changes:db.getRowsModified()};return {columns:res[0].columns,values:res[0].values,changes:db.getRowsModified()};}
function normalizeRows(r){return JSON.stringify({columns:r.columns,values:r.values.map(row=>row.map(v=>v===null?null:v)).sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)))})}
function renderNav(){
 $("moduleNav").innerHTML=MODULES.map((m,i)=>`<button class="module-btn ${i===activeModule?'active':''}" data-module="${i}"><span class="module-num">${i+1}</span><span><span class="module-name">${m.name}</span><span class="module-meta">${m.topics}</span></span></button>`).join("");
 document.querySelectorAll("[data-module]").forEach(b=>b.onclick=()=>{activeModule=+b.dataset.module;activeExercise=0;showChallenges(false);renderAll();});
}
function renderExerciseList(){
 $("exerciseList").innerHTML=EXERCISES[activeModule].map((e,i)=>{const key=`${activeModule}-${i}`;return `<button class="exercise-pick ${done.has(key)?'done':''} ${i===activeExercise?'current':''}" data-ex="${i}">${done.has(key)?'✓ ':''}${i+1}. ${i===5?'Challenge': 'Exercise'}</button>`}).join("");
 document.querySelectorAll("[data-ex]").forEach(b=>b.onclick=()=>{activeExercise=+b.dataset.ex;renderExercise();renderExerciseList();});
}
function renderExercise(){
 const e=EXERCISES[activeModule][activeExercise],key=`${activeModule}-${activeExercise}`;
 $("moduleEyebrow").textContent=`MODULE ${activeModule+1} · ${MODULES[activeModule].topics.toUpperCase()}`;
 $("moduleHeading").textContent=MODULES[activeModule].name;
 $("levelPill").textContent=MODULES[activeModule].level;
 $("exerciseKicker").textContent=`EXERCISE ${activeExercise+1} OF 6`;
 $("exerciseTitle").textContent=e.title;
 $("exercisePrompt").textContent=e.prompt;
 $("sqlEditor").value=e.starter;
 $("exerciseStatus").textContent=done.has(key)?"Completed":"Not Started";
 $("exerciseStatus").className="pill "+(done.has(key)?"good":"");
 $("feedback").className="feedback";$("feedback").innerHTML="<strong>Ready to practice</strong>Complete the SQL and select Run Query.";
 $("hintArea").innerHTML="";hintStage=0;currentOutput=null;
 $("prevBtn").disabled=activeExercise===0;
 $("nextBtn").textContent=activeExercise===5?(activeModule===5?"Course complete ✓":"Next module →"):"Next →";
 renderExplorer();
}
function renderExplorer(){
 const t=TABLES[selectedTable];
 $("tablePick").innerHTML=Object.keys(TABLES).map(k=>`<button class="tab ${k===selectedTable?'active':''}" data-table="${k}">${k}</button>`).join("");
 document.querySelectorAll("[data-table]").forEach(b=>b.onclick=()=>{selectedTable=b.dataset.table;renderExplorer();});
 $("schemaArea").innerHTML=`<div class="pill active">${t.desc} · ${t.label}</div><div style="overflow:auto;margin-top:8px"><table class="schema-table"><thead><tr><th>Column</th><th>Type</th><th>Key / Constraint</th></tr></thead><tbody>${t.columns.map(c=>`<tr><td><code>${c[0]}</code></td><td>${c[1]}</td><td>${c[2]||'—'}</td></tr>`).join("")}</tbody></table></div>`;
 try{let r=query(`SELECT * FROM ${selectedTable} ${showAll?'':'LIMIT 4'}`);$("recordsArea").innerHTML=renderTable(r)}catch(e){$("recordsArea").textContent=e.message}
 $("showAllBtn").textContent=showAll?"Show sample":"Show all records";
 $("relationsArea").innerHTML=`<div class="relation"><strong>students</strong><span class="rel-arrow">1 → N</span><strong>enrollments</strong><br>Um aluno pode ter várias matrículas; cada matrícula aponta para um aluno.</div><div class="relation"><strong>courses</strong><span class="rel-arrow">1 → N</span><strong>enrollments</strong><br>Um curso pode aparecer em várias matrículas.</div><div class="relation"><strong>teachers</strong><span class="rel-arrow">1 → N</span><strong>courses</strong><br>Um professor pode ser responsável por vários cursos.</div>`;
}
function renderTable(r){if(!r||!r.values.length)return '<div class="empty">No records found.</div>';return `<table><thead><tr>${r.columns.map(c=>`<th>${c}</th>`).join("")}</tr></thead><tbody>${r.values.map(row=>`<tr>${row.map(v=>`<td>${v===null?'<span style="color:var(--warn)">NULL</span>':esc(String(v))}</td>`).join("")}</tr>`).join("")}</tbody></table>`}
function esc(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function runExercise(){
 const e=EXERCISES[activeModule][activeExercise],key=`${activeModule}-${activeExercise}`,sql=$("sqlEditor").value;
 if(/__BLANK\d+__/.test(sql)){showFeedback("bad","Incomplete answer","Replace all __BLANK markers before running the query.");return}
 try{
  // Rebuild a clean database for every attempt; mutation exercises cannot affect other attempts.
  seedDb();
  const result=query(sql);
  currentOutput=result;
  $("resultsPlaceholder");
  let expected;
  try{seedDb();expected=query(e.check);}catch(err){expected=null}
  if(expected && normalizeRows(result)===normalizeRows(expected)){
    done.add(key);scores.add(key);
    $("exerciseStatus").textContent="Completed";$("exerciseStatus").className="pill good";
    showFeedback("good","Correct!","Your query produced the expected result. Exercise completed.");
  }else if(expected && result.columns.length===expected.columns.length && result.values.length===expected.values.length && JSON.stringify(result.values)===JSON.stringify(expected.values)){
    done.add(key);scores.add(key);$("exerciseStatus").textContent="Completed";$("exerciseStatus").className="pill good";showFeedback("good","Correct!","Your query produced the expected result.");
  }else{
    showFeedback("bad","Result does not match","The query ran, but the result differs from the expected answer. Review the columns, values, filters or ordering, then try again.");
    hintStage=Math.max(hintStage,0);
  }
  $("resultsArea");
  renderResultCard(result);
 }catch(err){showFeedback("bad","SQL execution error",err.message||"Check the SQL syntax and try again.");renderResultCard(null)}
 updateProgress();renderExerciseList();renderExplorer();
}
function renderResultCard(r){
 let el=document.getElementById("queryResultCard");
 if(!el){el=document.createElement("section");el.className="card";el.id="queryResultCard";el.style.marginTop="17px";el.innerHTML='<div class="card-head"><h3>Query Results</h3><span class="pill" id="resultCount">Output</span></div><div class="results" id="resultTable"></div>';document.querySelector(".layout").after(el);}
 $("resultCount").textContent=r?`${r.values.length} row(s)`:"No output";
 $("resultTable").innerHTML=r?renderTable(r):'<div class="empty">No results to display.</div>';
}
function showFeedback(type,title,msg){$("feedback").className="feedback "+type;$("feedback").innerHTML=`<strong>${esc(title)}</strong>${esc(msg)}`}
function getHint(){
 const e=EXERCISES[activeModule][activeExercise];
 if(hintStage>=3){$("hintArea").innerHTML='<div class="hint-box"><h4>All hints viewed</h4><p>You can request the complete solution at any time.</p></div>';return}
 hintStage++;
 const labels=["Hint 1 · Concept","Hint 2 · Command / Clause","Hint 3 · Specific Guidance"];
 $("hintArea").innerHTML=`<div class="hint-box"><h4>${labels[hintStage-1]}</h4><p>${esc(e.hints[hintStage-1])}</p></div>`;
}
function showSolution(){
 const e=EXERCISES[activeModule][activeExercise];$("sqlEditor").value=e.solution;
 showFeedback("warn","Solution revealed","The complete solution is now in the editor. Run it to inspect the result.");
}
function resetCode(){$("sqlEditor").value=EXERCISES[activeModule][activeExercise].starter;hintStage=0;$("hintArea").innerHTML="";showFeedback("","Editor reset","Starter code restored.");}
function updateProgress(){
 const pct=Math.round(done.size/36*100);
 $("headerProgress").textContent=pct+"%";$("sidePct").textContent=pct+"%";$("sideBar").style.width=pct+"%";
 $("headerScore").textContent=`${scores.size*10} / 360`;
}
function showChallenges(show){$("workArea").classList.toggle("hidden",show);$("challengesArea").classList.toggle("hidden",!show);if(show)renderChallenges();}
function renderChallenges(){
 $("challengeGrid").innerHTML=CHALLENGES.map((c,i)=>`<button class="challenge" data-challenge="${i}" style="text-align:left"><h4>${challengeDone.has(i)?'✓ ':''}${c.title}</h4><p>${c.desc}</p><p style="margin-top:8px;color:var(--accent)">${c.points} bonus points</p></button>`).join("");
 document.querySelectorAll("[data-challenge]").forEach(b=>b.onclick=()=>{challengeSelected=+b.dataset.challenge;renderChallengeWorkspace()});
}
function renderChallengeWorkspace(){
 const c=CHALLENGES[challengeSelected];
 $("challengeWorkspace").innerHTML=`<div class="card"><div class="card-head"><h3>${c.title}</h3><span class="pill">${c.points} bonus points</span></div><div class="card-body"><p>${c.prompt}</p><textarea class="editor" id="challengeEditor">${esc(c.starter)}</textarea><div class="actions" style="margin-top:10px"><button class="primary" id="challengeRun">Run Challenge</button><button id="challengeHint">Get Hint</button><button id="challengeSolution">Show Solution</button></div><div class="feedback" id="challengeFeedback" style="margin-top:12px">Complete the code and run the challenge.</div><div id="challengeHints"></div><div id="challengeResult" class="results" style="margin-top:12px"></div></div></div>`;
 let hs=0;
 $("challengeRun").onclick=()=>{try{if(/__BLANK\d+__/.test($("challengeEditor").value))throw new Error("Replace all __BLANK markers first.");seedDb();let got=query($("challengeEditor").value);seedDb();let exp=query(c.check);if(normalizeRows(got)===normalizeRows(exp)){challengeDone.add(challengeSelected);$("challengeFeedback").className="feedback good";$("challengeFeedback").innerHTML="<strong>Correct!</strong>Challenge completed. Bonus points awarded.";renderChallenges()}else{$("challengeFeedback").className="feedback bad";$("challengeFeedback").innerHTML="<strong>Not quite</strong>The result differs from the expected answer. Review and try again."}$("challengeResult").innerHTML=renderTable(got)}catch(e){$("challengeFeedback").className="feedback bad";$("challengeFeedback").innerHTML="<strong>SQL execution error</strong>"+esc(e.message)}};
 $("challengeHint").onclick=()=>{if(hs<3)hs++;$("challengeHints").innerHTML=`<div class="hint-box"><h4>Hint ${hs}</h4><p>${esc(c.hints[hs-1])}</p></div>`};
 $("challengeSolution").onclick=()=>{$("challengeEditor").value=c.solution};
}
function renderAll(){renderNav();renderExerciseList();renderExercise();updateProgress();showChallenges(false);}
$("runBtn").onclick=runExercise;$("hintBtn").onclick=getHint;$("solutionBtn").onclick=showSolution;$("resetCodeBtn").onclick=resetCode;
$("prevBtn").onclick=()=>{if(activeExercise>0){activeExercise--;renderExercise();renderExerciseList()}};
$("nextBtn").onclick=()=>{if(activeExercise<5){activeExercise++}else if(activeModule<5){activeModule++;activeExercise=0}else{showFeedback("good","Course completed","You have reached the end of the six core modules.");}renderAll()};
$("showAllBtn").onclick=()=>{showAll=!showAll;renderExplorer()};
$("explorerToggle").onclick=()=>{$("explorerBody").classList.toggle("hidden");$("explorerToggle").textContent=$("explorerBody").classList.contains("hidden")?"Expand":"Collapse"};
$("challengesNav").onclick=()=>showChallenges(true);
$("resetBtn").onclick=()=>{if(confirm("Reset all progress and points for this session?")){done.clear();scores.clear();challengeDone.clear();activeModule=0;activeExercise=0;seedDb();renderAll();}};
async function init(){
 renderNav();renderExerciseList();renderExplorer();renderExercise();renderChallenges();
 if(!window.initSqlJs){showFeedback("bad","SQLite engine unavailable","The SQL engine could not be loaded. Check your internet connection and reload this page.");return}
 try{SQL=await initSqlJs({locateFile:file=>`https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${file}`});seedDb();renderExplorer();showFeedback("good","SQLite ready","The training database is ready. Complete the first SQL exercise to begin.");}
 catch(e){showFeedback("bad","SQLite initialization failed","Check your internet connection and reload the page.");}
}
init();

  /*==========================================
 TRAVAR A CÓPIA CONTEÚDO COM REF. AUTOR 
      bY: IRAÊ CÉSAR BRANDÃO - 05-2026
 ==========================================*/


//---------- BLOQUEAR CLIQUE DIREITO ----------
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Bloqueia o menu do botão direito
    alert("Copiar conteúdo não é permitido sem referência ao autor '© 2026 Iraê César Brandão' .");
});

// ---------- BLOQUEAR CTRL+C E CTRL+X ----------
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'x')) {
        e.preventDefault(); // Bloqueia copiar e recortar
        alert("Copiar/Recortar desativado. Cite o autor! '© 2026 Iraê César Brandão'");
    }
});

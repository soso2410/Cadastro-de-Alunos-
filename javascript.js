

var students = [];

var courses = [
    { id: 1, name: "Direito" },
    { id: 2, name: "TI" },
    { id: 3, name: "Psicologia" }
];

// Load all students
function loadStudents() {
    for (let student of students) {
        addNewRow(student);
    }
}

// OnLoad
window.onload = function () {
    loadStudents();
};

// Add new row to the table
function addNewRow(student) {
    console.log (student)
    var table = document.getElementById("studentsTable");
    var newRow = table.insertRow();

    // ID
    newRow.insertCell().appendChild(document.createTextNode(student.id));

    // Nome
    newRow.insertCell().appendChild(document.createTextNode(student.name));

    // Email
    newRow.insertCell().appendChild(document.createTextNode(student.email));

    // Telefone formatado
    var telStr = student.tel.toString();
    var telFormatado = `(${telStr.slice(0, 2)}) ${telStr.slice(2, 7)}-${telStr.slice(7)}`;
    newRow.insertCell().appendChild(document.createTextNode(telFormatado));

    // Curso
    var courseName = courses[student.course - 1].name;
    newRow.insertCell().appendChild(document.createTextNode(courseName));

    // Turno
    var shiftBadge = "";
    if (student.shift == "manha") {
        shiftBadge = "<span class='badge bg-success'>M</span>";
    } else if (student.shift == "tarde") {
        shiftBadge = "<span class='badge bg-primary'>T</span>";
    } else if (student.shift == "noite") {
        shiftBadge = "<span class='badge bg-danger'>N</span>";
    }
    newRow.insertCell().innerHTML = shiftBadge; 
}

// Função para cadastrar aluno
function cadastrarAluno() {
    var name = document.getElementById("inputName").value;
    var email = document.getElementById("inputEmail").value;
    var tel = document.getElementById("tel").value.replace(/\D/g, ''); 
    var course = document.getElementById("Selectcourse").value;
    var shift = document.querySelector('input[name="radioDefault"]:checked').value; 
    console.log (shift)

    var newStudent = {
        id: students.length + 1,
        name: name,
        email: email,
        tel: tel,
        course: parseInt(course),
        shift: shift 
    };

    students.push(newStudent);
    addNewRow(newStudent);
}



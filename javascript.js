var students = [];

var courses = [
    { id: 1, name: "Direito" },
    { id: 2, name: "TI" },
    { id: 3, name: "Psicologia" }
];

// OnLoad
window.onload = function () {
    loadStudents();
};

// Load all students
function loadStudents() {
    // Limpa o corpo da tabela (exceto cabeçalho)
    var tabela = document.getElementById("studentsTable");
    while (tabela.rows.length > 1) {
        tabela.deleteRow(1);
    }
    
    for (let student of students) {
        addNewRow(student);
    }
}

// Add new row to the table
function addNewRow(student) {
    var table = document.getElementById("studentsTable");
    var newRow = table.insertRow(-1); // Insere no final

    // ID
    newRow.insertCell(0).textContent = student.id;

    // Nome
    newRow.insertCell(1).textContent = student.name;

    // Email
    var emailCell = newRow.insertCell(2);
    emailCell.className = 'd-none d-md-table-cell';
    emailCell.textContent = student.email;

    // Telefone formatado
    var telStr = student.tel.toString();
    var telFormatado = `(${telStr.slice(0, 2)}) ${telStr.slice(2, 7)}-${telStr.slice(7)}`;
    var telCell = newRow.insertCell(3);
    telCell.className = 'd-none d-md-table-cell';
    telCell.textContent = telFormatado;

    // Curso
    var courseName = courses.find(c => c.id === student.course).name;
    var courseCell = newRow.insertCell(4);
    courseCell.className = 'd-none d-md-table-cell';
    courseCell.textContent = courseName;

    // Turno
    var shiftCell = newRow.insertCell(5);
    shiftCell.className = 'd-none d-md-table-cell';
    var shiftBadge = document.createElement('span');
    shiftBadge.className = 'badge';
    
    if (student.shift === "manha") {
        shiftBadge.classList.add('bg-success');
        shiftBadge.textContent = 'M';
    } else if (student.shift === "tarde") {
        shiftBadge.classList.add('bg-primary');
        shiftBadge.textContent = 'T';
    } else if (student.shift === "noite") {
        shiftBadge.classList.add('bg-danger');
        shiftBadge.textContent = 'N';
    }
    
    shiftCell.appendChild(shiftBadge);
}

// Função para cadastrar aluno
function cadastrarAluno() {
    var name = document.getElementById("inputName").value;
    var email = document.getElementById("inputEmail").value;
    var tel = document.getElementById("tel").value.replace(/\D/g, '');
    var course = document.getElementById("Selectcourse").value;
    var shift = document.querySelector('input[name="radioDefault"]:checked').value;

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

    document.getElementById("formStudents").reset();
}


document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.querySelector('.btn');
    const studentOutput = document.getElementById('studentOut');
    let classList = JSON.parse(localStorage.getItem('classList')) || [];

    function updateClassList() {
        studentOutput.innerHTML = '';
        for (const student of classList) {
            const studentCard = document.createElement('div');
            studentCard.classList.add('col-4');
            studentCard.innerHTML = `
              <div class="card" style="width: 100%;">
                <div class="card-body">
                  <h5 class="card-title">${student.firstName} ${student.lastName}</h5>
                  <p>Student Number: ${student.studentNumber}</p>
                  <p>Year: ${student.year}</p>
                  <p>Choice One: ${student.subOne}</p>
                  <p>Choice Two: ${student.subTwo}</p>
                </div>
              </div>
            `;
            studentOutput.appendChild(studentCard);
          }

          localStorage.setItem('classList', JSON.stringify(classList));
  }
      
function logStudent() {
    const firstName = document.getElementById('first').value;
    const lastName = document.getElementById('last').value;
    const studentNumber = document.getElementById('number').value;
    const subOne = document.getElementById('subOne').value;
    const subTwo = document.getElementById('subTwo').value;
    let year = '';

    const yearRadios = document.getElementsByName('baseRadio')
    for (const radio of yearRadios) {
        if (radio.checked) {
            year = radio.value;
            break;
        }
    }

    const student = {
        firstName,
        lastName,
        studentNumber,
        subOne,
        subTwo,
        year
    };
    classList.push(student);
    
    document.getElementById('first').value = '';
    document.getElementById('last').value = '';
    document.getElementById('number').value = '';
    document.getElementById('subOne').selectedIndex = 0;
    document.getElementById('subTwo').selectedIndex = 0;
    for (const radio of yearRadios) {
      radio.checked = false;
    }
    updateClassList();
}

registerBtn.addEventListener('click', logStudent);

updateClassList();
});
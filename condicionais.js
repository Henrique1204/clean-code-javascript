// Evit utilizar ! pare inverter valores de variáveis
const isUserYoungerThan18Years = true;
const doesUserLivesOutsideBrazil = true;

if (isUserYoungerThan18Years && doesUserLivesOutsideBrazil) {
}

// Evite utilizar apenas early return, em alguns caso o else ajuda a manter a semântica do código.
// Evite aninhar condicionais.

// Exerício
const necessaryGradeToBeApproved = 7;
const studentGrade = 10;

const numberOfAbsensesToFailSchool = 100;
const studentNumberOfAbsenses = 109;

function checkIfStudentPassedTheSchoolYear() {
  const studentGradeIsBelowTheNecessary =
    studentGrade < necessaryGradeToBeApproved;

  if (studentGradeIsBelowTheNecessary) {
    return {
      error: true,
      message:
        "Student was not approved because his grade was below the necessary.",
    };
  }

  const studentAbsencesIsGreaterThanSchoolAbsenceLimit =
    studentNumberOfAbsenses > numberOfAbsensesToFailSchool;

  if (studentAbsencesIsGreaterThanSchoolAbsenceLimit) {
    return {
      error: true,
      message: "Student was not approved because of his absenses",
    };
  }

  return { error: false, message: "Student was approved :)" };
}

console.log(checkIfStudentPassedTheSchoolYear());

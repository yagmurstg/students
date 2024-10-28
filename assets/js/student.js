

let students = [
  { id: 1, name: "Atakan", lastname: "Arıkan", gender: "Erkek", section: "Frontend", role: "Öğrenci" },
  { id: 2, name: "Busenur", lastname: "Savaş", gender: "Kadın", section: "Frontend", role: "Öğrenci" },
  { id: 3, name: "Ece", lastname: "Kubilay", gender: "Kadın", section: "Frontend", role: "Öğrenci" },
  { id: 4, name: "Elif Yağmur", lastname: "Şahin", gender: "Kadın", section: "Frontend", role: "Öğrenci" },
  { id: 5, name: "Gaye", lastname: "Dinç", gender: "Kadın", section: "Frontend", role: "Öğrenci" },
  { id: 6, name: "Gökdeniz", lastname: "Keleş", gender: "Erkek", section: "Frontend", role: "Öğrenci" },
  { id: 7, name: "Hilal", lastname: "Baran", gender: "Kadın", section: "Frontend", role: "Öğrenci" },
  { id: 8, name: "Mehmet Akif", lastname: "Küçükyılmaz", gender: "Erkek", section: "Frontend", role: "Öğrenci" },
  { id: 9, name: "Merve", lastname: "Özel", gender: "Kadın", section: "Frontend", role: "Öğrenci" },
  { id: 10, name: "Muhammet Ali", lastname: "Şafak", gender: "Erkek", section: "Frontend", role: "Öğrenci" },
  { id: 11, name: "Ömer", lastname: "Kuluç", gender: "Erkek", section: "Frontend", role: "Öğrenci" }
];

function displayStudents() {
  const femaleContainer = document.getElementById("femaleStudents");
  const maleContainer = document.getElementById("maleStudents");

  let femaleCount = 0;
  let maleCount = 0;

  students.forEach(student => {
      const studentDiv = document.createElement("div");
      studentDiv.classList.add("student-item");
      studentDiv.innerHTML = `${student.name} ${student.lastname} - ${student.section}`;

      if (student.gender === "Kadın") {
          femaleContainer.appendChild(studentDiv);
          femaleCount++;
      } else if (student.gender === "Erkek") {
          maleContainer.appendChild(studentDiv);
          maleCount++;
      }
  });

  document.getElementById("femaleCount").textContent = `Kadın Öğrenci Sayısı: ${femaleCount}`;
  document.getElementById("maleCount").textContent = `Erkek Öğrenci Sayısı: ${maleCount}`;
}

displayStudents();

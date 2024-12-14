
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // two students
  const student1: Student = {
    firstName: 'Tonia',
    lastName: 'Elohor',
    age: 21,
    location: 'Lagos',
  };
  
  const student2: Student = {
    firstName: 'Oke',
    lastName: 'Frank',
    age: 27,
    location: 'Ibadan',
  };
  
  // array of students
  const studentsList: Student[] = [student1, student2];
  
  // rendering table
  const renderTable = () => {
    const table = document.createElement('table');
    table.setAttribute('border', '1');
  
    // table header
    const header = table.createTHead();
    const headerRow = header.insertRow();
    headerRow.insertCell().textContent = 'First Name';
    headerRow.insertCell().textContent = 'Location';
  
    // student data rows
    const tbody = table.createTBody();
    studentsList.forEach(student => {
      const row = tbody.insertRow();
      row.insertCell().textContent = student.firstName;
      row.insertCell().textContent = student.location;
    });
  
    // appending the table to the body
    document.body.appendChild(table);
  };
  
  // calling the function to render the table
  renderTable();
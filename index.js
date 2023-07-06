// run `node index.js` in the terminal

// Sample array of student objects
const students = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },

  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

// Sorting function
const sortByMarks = (a, b) => {
  // First priority: Total marks
  if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
    return -1;
  }
  if (a.chemistryMarks + a.biologyMarks < b.chemistryMarks + b.biologyMarks) {
    return 1;
  }

  // Second priority: Biology marks
  if (a.biologyMarks > b.biologyMarks) {
    return -1;
  }
  if (a.biologyMarks < b.biologyMarks) {
    return 1;
  }

  // Third priority: Date of birth (in format DD-MM-YYYY)
  const aDobParts = a.dob.split('-');
  const bDobParts = b.dob.split('-');

  const aDob = new Date(aDobParts[2], aDobParts[1] - 1, aDobParts[0]);
  const bDob = new Date(bDobParts[2], bDobParts[1] - 1, bDobParts[0]);

  return aDob - bDob;
};

// Sort the array of student objects
students.sort(sortByMarks);

// Print sorted array of student objects
console.log(students);

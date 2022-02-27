// // LAB 3

let submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2019-04-22", passed: true },
];

function addSubmission(array, newName, newScore, newDate) {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: true,
  };
  if (newSubmission.score >= 60) {
    newSubmission.passed = true;
  } else {
    newSubmission.passed = false;
  }
  array.push(newSubmission);
  console.log(submissions);
}

// addSubmission(submissions, "David", 85, "2022-02-23");
// addSubmission(submissions, "kyle", 55, "2022-02-23");

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
  console.log(submissions);
}
// deleteSubmissionByIndex(submissions, 2);

function deleteSubmissionByName(array, name) {
  let findIndex = array.findIndex(function (people) {
    return people.name === name;
  });
  array.splice(findIndex, 1);
  console.log(submissions);
}
// deleteSubmissionByName(submissions, 'Jill');

function editSubmission(array, index, score) {
  array[index].score = score;
  if (score >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
  console.log(submissions);
}
// editSubmission(submissions, 3, 15);

function findSubmissionByName(array, name) {
  let findName = array.find(function (people) {
    return people.name === name;
  });
  console.log(findName);
}

// findSubmissionByName(submissions, 'Jill')

function findLowestScore(array) {
  let lowestScore = 100;
  array.forEach(function (people) {
    if (people.score < lowestScore) {
      lowestScore = people.score;
    }
  });
  // console.log(lowestScore); option 2***
  return lowestScore;
}

// console.log(findLowestScore(submissions));

// findLowestScore(submissions); option 2***

function findAverageScore(array) {
  let average = 0;
  // let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i].score;
    average += currentNum;
  }
  average = average / array.length; 
  return average;
}

// console.log(findAverageScore(submissions));

function filterPassing(array) {
  let passingGrade = array.filter(function(people) { 
  return (people.score >= 60);
  });
  console.log(passingGrade);
}

// filterPassing(submissions);

function filter90AndAbove(array) {
  let passingGrade = array.filter(function(people) { 
  return (people.score >= 90);
  });
  console.log(passingGrade);
}

// filter90AndAbove(submissions);
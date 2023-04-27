  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];

let sum = nums.reduce((acc, curr) => acc + curr, 0); // always specify the initial value

// let sum = nums.reduce((acc, curr) => {
//   console.log(
//     'Accumulator:', acc,
//     'Current Value:', curr,
//     'Total:', acc+curr
//   );
//   return acc + curr;
// }, 10); // always specify the initial value
console.log(sum);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Mark',
    profession: 'Manager',
    yrsExperience: 10
  }
];

// Totaling a specific object property

let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
// wanting result => {Developer: 12, Designer: 4}

let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});


let namesByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = [curr.name];
  } else {
    acc[key].push(curr.name);
  }
  return acc;
}, {});

let developerWithMostExperience = teamMembers.reduce((acc, curr) => {
  let profession = 'Developer';
  if (curr.profession == profession) {
    if (acc[1] < curr.yrsExperience) {
      acc[0] = curr.name;
      acc[1] = curr.yrsExperience;
    }
  }
  return acc;
  
}, ['', 0]);
console.log(experienceByProfession);
console.log(namesByProfession);
console.log(developerWithMostExperience);
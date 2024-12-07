/*

// problem 1
// დაწერეთ ფუნქცია რომელიც პარამეტრად მიცემული მაისივიდან დააბრუნებს მომხმარებლების საშუალო ასაკს.

function calculateAverageAge(users) {
  if (users.length === 0) return 0;

  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

const averageAge = calculateAverageAge(data);
console.log(`საშუალო ასაკი: ${averageAge}`);

*/

// problem 2
// დაწერეთ ფუნქცია რომელიც პარამეტრად მიღებული მაისივიდან დააბრუნებს ახალ მასივს
// სადაც იქნება მომხმარებლები რომლებიც არიან 20 წელზე მეტის.

/*

function filterUsersAbove20(users) {
  return users.filter(user => user.age > 20);
}

const usersAbove20 = filterUsersAbove20(data);
console.log(usersAbove20);


*/

/*

// problem 3
// დაწერეთ ფუნქცია რომელიც დააბრუნებს მასივს სადაც იქნება მხოლოდ მომხმარებლების Email.

function getUserEmails(users) {
  return users.map(user => user.email);
}

const userEmails = getUserEmails(data);
console.log(userEmails);

*/

/*

// problem 4
// დაწერეთ ფუნქცია რომელიც დააბრუნებს რამდენი ქალი და რამდენი კაცია გადაცემულ მასივში.

function countGenders(users) {
  return users.reduce(
    (counts, user) => {
      if (user.gender === "Female") {
        counts.female++;
      } else if (user.gender === "Male") {
        counts.male++;
      }
      return counts;
    },
    { female: 0, male: 0 }
  );
}

const genderCounts = countGenders(data);
console.log(`ქალები: ${genderCounts.female}, კაცები: ${genderCounts.male}`);

*/

/*

// problem 5
// დაწერეთ ფუნქცია რომელიც დააბრუნებს პირველ მომხმარებელს რომელის ასაკიც 40 წელზე მეტია.

function findFirstUserAbove40(users) {
  return users.find(user => user.age > 40);
}

const firstUserAbove40 = findFirstUserAbove40(data);
console.log(firstUserAbove40);

*/

/*

// problem 6
// დაწერეთ ფუნქცია რომელიც დააბრუნებს მასივს, რომელშიც იქნება პირველი 5 მომხმარებელი.

function getFirstFiveUsers(users) {
  return users.slice(0, 5);
}

const firstFiveUsers = getFirstFiveUsers(data);
console.log(firstFiveUsers);

*/

/*

// problem 7
// დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს მომხმარებლის სახელს და დააბრუნებს ინდექს თუ მერამდენე ელემენტია მასივში.
// თუ მოცემული სახელი არ არსებობს დააბრუნეთ უარყოფითი რიცხვი, თუ რამდენიმე არსებობს დააბრუნეთ მხოლოდ პირველი მომხმარებელი.

function findUserIndexByName(users, name) {
  const index = users.findIndex(user => user.firstname === name);
  return index !== -1 ? index : -1; 
}

const userIndex = findUserIndexByName(data, "Molly");
console.log(userIndex);

*/

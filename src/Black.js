alert('Hi');

const inventors = [
  {
    first: 'Mary',
    last: 'Johnson',
    year: 1921,
    passed: 2005,
  },
  {
    first: 'Lewis',
    last: 'Latimer',
    year: 1848,
    passed: 1928,
  },
  {
    first: 'Marie',
    last: 'Van Brittan Brown',
    year: 1922,
    passed: 1999,
  },
  {
    first: 'Otis',
    last: 'Boykin',
    year: 1920,
    passed: 1982,
  },
  {
    first: 'Jan',
    last: 'Ernst Matzeliger',
    year: 1852,
    passed: 1889,
  },
  {
    first: 'Garret',
    last: 'Morgan',
    year: 1877,
    passed: 1963,
  },
  {
    first: 'Charles Richard',
    last: 'Drew',
    year: 1904,
    passed: 1950,
  },
  {
    first: 'Frederick',
    last: 'Jones',
    year: 1893,
    passed: 1961,
  },
  {
    first: 'Daniel',
    last: ' Hale Williams',
    year: 1815,
    passed: 1852,
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905,
  },
  {
    first: 'Edward',
    last: 'Bouchet',
    year: 1852,
    passed: 1918,
  },
  {
    first: 'Charles W.',
    last: 'Chappelle',
    year: 1872,
    passed: 1941,
  },
];
const people = [
  'Alcorn, George Edward, Jr',
  'Alexander, Archie',
  'Amos, Harold',
  'Andrews, James J.',
  'Bailey, Leonard C.',
  'Ball, Alice Augusta',
  'Banneker, Benjamin',
  'Banyaga, Augustin',
  'Bashen, Janet',
  'Bath, Patricia',
  'Beard, Andrew',
  'Bell, Earl S.',
  'Benjamin, Miriam',
  'Berry, Leonidas',
  'Bharucha-Reid, Albert T.',
  'Black, Keith',
  'Blackwell, David',
  'Blair, Henry',
  'Boahen, Kwabena',
  'Boone, Sarah',
  'Bouchet, Edward',
  'Bowman, James',
  'Brady, St. Elmo',
  'Branson, Herman',
  'Bernhard, Sandra',
  'Brooks, Charles',
  'Brooks, Phil',
  'Burr, John Albert',
  'Brown, Oscar E.',
  'Cardozo, P. William',
  'Carver, George Washington',
  'Fournier de Pescay, François',
  'Sylvain, Yvonne',
  'Borgella, Jocelyn',
  'Louverture, Toussaint',
  'Christophe, Henri',
  'Greenaugh, Kevin',
  'Hodge, John E.',
  'Johnson, Lonnie',
  'Ogbu, John Uzo',
  'Young, Roger Arliner',
];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's6
const blackInventors = inventors.filter(
  inventor => inventor.year >= 1800 && inventor.year < 2000
);

console.table(blackInventors);
// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
// Array.prototype.sort()

const powerMan = inventors.map(
  inventor => inventor.first + ' ' + inventor.last
);
console.log(powerMan);

// 3. Sort the inventors by birthdate, oldest to youngest
// Array.prototype.reduce()

const komande = inventors.sort((firstPerson, secondPerson) =>
  firstPerson.year > secondPerson.year ? 1 : -1
);
console.table(komande);

// 4. How many years did all the inventors live?

const wakanda = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(wakanada);
// 5. Sort the inventors by years lived

const granmoun = inventors.sort(function(a, b) {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  return lastInventor > nextInventor ? -1 : 1;
});
console.table(granmoun);

// 7. sort Exercise
// Sort the people alphabetically by last name
const buyBlack = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.table(buyBlack);

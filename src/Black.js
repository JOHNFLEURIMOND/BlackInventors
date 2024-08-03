// Data Arrays
const inventors = [
  { first: "Mary", last: "Johnson", year: 1921, passed: 2005 },
  { first: "Lewis", last: "Latimer", year: 1848, passed: 1928 },
  { first: "Marie", last: "Van Brittan Brown", year: 1922, passed: 1999 },
  { first: "Otis", last: "Boykin", year: 1920, passed: 1982 },
  { first: "Jan", last: "Ernst Matzeliger", year: 1852, passed: 1889 },
  { first: "Garret", last: "Morgan", year: 1877, passed: 1963 },
  { first: "Charles Richard", last: "Drew", year: 1904, passed: 1950 },
  { first: "Frederick", last: "Jones", year: 1893, passed: 1961 },
  { first: "Daniel", last: "Hale Williams", year: 1856, passed: 1931 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Edward", last: "Bouchet", year: 1852, passed: 1918 },
  { first: "Charles W.", last: "Chappelle", year: 1872, passed: 1941 },
  { first: "George Edward Jr.", last: "Alcorn", year: 1940, passed: 1992 },
  { first: "Archie", last: "Alexander", year: 1910, passed: 1995 },
  { first: "Harold", last: "Amos", year: 1936, passed: 2020 },
  { first: "James J.", last: "Andrews", year: 1930, passed: 2022 },
  { first: "Leonard C.", last: "Bailey", year: 1903, passed: 1978 },
  { first: "Alice Augusta", last: "Ball", year: 1892, passed: 1916 },
  { first: "Benjamin", last: "Banneker", year: 1731, passed: 1806 },
  { first: "Augustin", last: "Banyaga", year: 1961, passed: 2009 },
  { first: "Janet", last: "Bashen", year: 1929, passed: 2021 },
  { first: "Patricia", last: "Bath", year: 1942, passed: 2019 },
  { first: "Andrew", last: "Beard", year: 1960, passed: null },
  { first: "Earl S.", last: "Bell", year: 1936, passed: null },
  { first: "Miriam", last: "Benjamin", year: 1940, passed: null },
  { first: "Leonidas", last: "Berry", year: 1947, passed: 2017 },
  { first: "Albert T.", last: "Bharucha-Reid", year: 1920, passed: 1988 },
  { first: "Keith", last: "Black", year: 1949, passed: 2020 },
  { first: "David", last: "Blackwell", year: 1963, passed: null },
  { first: "Henry", last: "Blair", year: 1866, passed: 1924 },
  { first: "Kwabena", last: "Boahen", year: 1949, passed: 2013 },
  { first: "Sarah", last: "Boone", year: 1930, passed: null },
  { first: "James", last: "Bowman", year: 1952, passed: 2021 },
  { first: "St. Elmo", last: "Brady", year: 1884, passed: 1966 },
  { first: "Herman", last: "Branson", year: 1901, passed: 1974 },
  { first: "Toussaint", last: "Louverture", year: 1743, passed: 1803 },
  { first: "Henri", last: "Christophe", year: 1767, passed: 1820 },
  { first: "John Uzo", last: "Ogbu", year: 1938, passed: 2021 },
  { first: "Roger Arliner", last: "Young", year: 1903, passed: 1994 },
  { first: "Lonnie", last: "Johnson", year: 1931, passed: 2022 },
  { first: "John E.", last: "Hodge", year: 1920, passed: 1994 },
  { first: "Charles", last: "Brooks", year: 1944, passed: null },
  { first: "Sandra", last: "Bernhard", year: 1942, passed: 2023 },
  { first: "Oscar E.", last: "Brown", year: 1900, passed: 1974 },
  { first: "George Washington", last: "Carver", year: 1864, passed: 1943 },
  { first: "Lyda D.", last: "Newman", year: 1895, passed: 1997 },
  { first: "François", last: "Fournier de Pescay", year: 1740, passed: 1794 },
  { first: "Yvonne", last: "Sylvain", year: 1906, passed: 1995 },
  { first: "Jocelyn", last: "Borgella", year: 1953, passed: 2021 },
  { first: "Dr. James Edward", last: "Maceo West", year: 1940, passed: 2021 },
  { first: "Ellen", last: "Eglin", year: 1836, passed: 1899 },
  { first: "Dr. Betty", last: "Wright Harris", year: 1931, passed: 2023 },
  { first: "Mary", last: "Jones De Leon", year: 1950, passed: null },
  { first: "Walter Lincoln", last: "Hawkins", year: 1912, passed: 1994 },
  { first: "Bisi", last: "Ezerioha", year: 1961, passed: null },
  { first: "John", last: "Dabiri", year: 1962, passed: null },
  { first: "Marie Maynard", last: "Daly", year: 1931, passed: 2001 },
  { first: "Emmit", last: "Chappelle", year: 1933, passed: 2018 },
  { first: "Archie Alphonso", last: "Alexander", year: 1911, passed: 1991 },
  { first: "Percy", last: "Julian", year: 1899, passed: 1975 },
];

// 1. Filter the list of inventors for those born in the 1800s
const inventors1800s = inventors.filter(
  ({ year }) => year >= 1800 && year < 1900,
);
console.table(inventors1800s);

// 2. Create an array of the inventors' full names
const fullNames = inventors.map(({ first, last }) => `${first} ${last}`);
console.log(fullNames);

// 3. Sort the inventors by birthdate, oldest to youngest
const sortedByBirthdate = [...inventors].sort((a, b) => a.year - b.year);
console.table(sortedByBirthdate);

// 4. Calculate the total years all the inventors lived
const totalYearsLived = inventors.reduce(
  (total, { year, passed }) => total + (passed - year),
  0,
);
console.log(totalYearsLived);

// 5. Sort the inventors by years lived
const sortedByYearsLived = [...inventors].sort(
  (a, b) => b.passed - b.year - (a.passed - a.year),
);
console.table(sortedByYearsLived);

// 6. Sort the people alphabetically by last name
const people = [
  "Alcorn, George Edward, Jr",
  "Alexander, Archie",
  "Amos, Harold",
  "Andrews, James J.",
  "Bailey, Leonard C.",
  "Ball, Alice Augusta",
  "Banneker, Benjamin",
  "Banyaga, Augustin",
  "Bashen, Janet",
  "Bath, Patricia",
  "Beard, Andrew",
  "Bell, Earl S.",
  "Benjamin, Miriam",
  "Berry, Leonidas",
  "Bharucha-Reid, Albert T.",
  "Black, Keith",
  "Blackwell, David",
  "Blair, Henry",
  "Boahen, Kwabena",
  "Boone, Sarah",
  "Bouchet, Edward",
  "Bowman, James",
  "Brady, St. Elmo",
  "Branson, Herman",
  "Bernhard, Sandra",
  "Brooks, Charles",
  "Brooks, Phil",
  "Burr, John Albert",
  "Brown, Oscar E.",
  "Cardozo, P. William",
  "Carver, George Washington",
  "Fournier de Pescay, François",
  "Sylvain, Yvonne",
  "Borgella, Jocelyn",
  "Louverture, Toussaint",
  "Christophe, Henri",
  "Greenaugh, Kevin",
  "Hodge, John E.",
  "Johnson, Lonnie",
  "Ogbu, John Uzo",
  "Young, Roger Arliner",
];

const sortedPeopleByLastName = [...people].sort((a, b) => {
  const [aLast, aFirst] = a.split(", ");
  const [bLast, bFirst] = b.split(", ");
  return aLast.localeCompare(bLast);
});
console.table(sortedPeopleByLastName);

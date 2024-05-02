// You are given an array representing daily records for a week in a café.
// Each record is an array containing the day of the week, daily sales, and daily expenses.
const weeklyRecords = [
  ["Monday", 300, 150],
  ["Tuesday", 400, 200],
  ["Wednesday", 500, 250],
  ["Thursday", 450, 225],
  ["Friday", 600, 300],
  ["Saturday", 700, 350],
  ["Sunday", 400, 175],
];

/*****************************************************************
Part 1: Sales and Expense Filtering

Task 1) Create a new array containing records for days when sales exceeded $500.
       Output 1) [["Friday", 600, 300], ["Saturday", 700, 350]]

Task 2) Create a new array showing only the expenses for days when expenses were at least $200.
       Output 2) [200, 250, 225, 300, 350]

******************************************************************/

//Part 1
//Task 1)
const salesOver500 = weeklyRecords.filter((weeklyRecord) => {
  return weeklyRecord[1] > 500;
});
console.log(salesOver500);

//Task 2)
const expensesOver200 = weeklyRecords.filter((weeklyRecord) => {
  return weeklyRecord[2] >= 200;
});
console.log(expensesOver200);

const expensesLeast200 = expensesOver200.map((weeklyRecord) => {
  if (weeklyRecord[2] >= 200) {
    return weeklyRecord[2];
  }
});

console.log(expensesLeast200);

// > use map
/*****************************************************************
Part 2: Summary Calculations

Task 3) Calculate the total sales for the week.
       Output 3) 3350

Task 4) Calculate the total expenses for the week.
       Output 4) 1650

******************************************************************/
//Part 2
//Task 3)

const sales = weeklyRecords.map((weeklyRecord) => {
  return weeklyRecord[1];
});
console.log(sales);

let totalSales = 0;
sales.forEach((sale) => {
  totalSales += sale;
});
console.log(totalSales);

//Task 4)

const expenses = weeklyRecords.map((weeklyRecord) => {
  return weeklyRecord[2];
});
console.log(expenses);

let totalExpenses = 0;
expenses.forEach((expense) => {
  totalExpenses += expense;
});
console.log(totalExpenses);

/*****************************************************************
Part 3: Advanced Calculations

Task 5) Calculate the average sales for the week.
       Output 5) 478.57 (rounded to two decimal places)

Task 6) Identify days with net earnings (sales minus expenses) that were above the weekly average net earnings.
       Output 6) [ 'Wednesday', 'Friday', 'Saturday' ]

******************************************************************/

// Note: Use JavaScript array iteration methods such as filter, map, and reduce to achieve the desired output for each task.

//Part 3
//Task 5)

let averageSales = totalSales / sales.length;

console.log(averageSales.toFixed(2));

//Task 6)

//Part1: calculating net earnings for all days then summing all together to get the total

const netEarnings = weeklyRecords.map((weeklyRecord) => {
  return [weeklyRecord[0], weeklyRecord[1] - weeklyRecord[2]];
});
console.log(netEarnings);

let totalNetEarnings = 0;
netEarnings.forEach((netEarning) => {
  totalNetEarnings += netEarning[1];
});
console.log(totalNetEarnings);

//Part 2: calculating average net earnings of all week (weekly average net earnings)

let averageNetEarnings = totalNetEarnings / netEarnings.length;

console.log(averageNetEarnings);

//Part 3: adressing days with net earnings that exceeded weekly average net earnings

const daysAndEarnings = netEarnings.filter((netEarning) => {
  return netEarning[1] > averageNetEarnings;
});
console.log(daysAndEarnings);

const days = daysAndEarnings.map((daysAndEarning) => {
  return daysAndEarning[0];
});
console.log(days);

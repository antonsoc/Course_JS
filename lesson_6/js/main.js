//Получить кнопку "Начать расчет" через id

let buttonStart = document.getElementById('start');

//Получить все блоки в правой части программы через классы 
//(которые имеют класс название-value, начиная с <div class="budget-value"></div> 
//и заканчивая <div class="yearsavings-value"></div>)

let budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

//Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)

let inputExpenses = document.getElementsByClassName('expenses-item');

//Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 

let expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2];

//Получить поля для ввода необязательных расходов (optionalexpenses-item) 
//при помощи querySelectorAll

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

//Получить оставшиеся поля через querySelector 
//(статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

let incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
let money, time;

//ввод бюджета и месяца
function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
};

start();

let appData = {
	budget: money,           //бюджет на месяц
	expenses: {},            //расходы на месяц
	optionalExpenses: {},    //необязательные расходы
	income: [],              //дополнительный доход
	timeData: time,          //дата, период
	savings: true,           //наличие депозита
	//ввод расходов на месяц (мин 2)
	chooseExpenses: function() {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');
	   
			if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
				&& a != '' && b != '' && a.length < 50 ) {
				console.log('done');
				appData.expenses[a] = b;
			} else {
				i--;
			}  
		}
	},
	//расчет дневного бюджета
	detectDayBudget: function() {
		appData.moneyPerDay = appData.budget / 30;
	},
	//расчет уровня достатка
	detectLevel: function() {
		if (appData.moneyPerDay < 100) {
			console.log('Минимальный уровень достатка');
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log('Средний уровень достатка');
		} else if (appData.moneyPerDay > 2000) {
			console.log('Максимальный уровень достатка');
		} else {
			console.log('Произошла ошибка');
		}
	},
	//расчет дохода с депозита(при наличии)
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?", ""),
				percent = +prompt("Под какой процент?", "");
	
			appData.monthIncome = save/100/12*percent;
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},
	//функция для определения необязательных расходов
	chooseOptExpenses: function() {
		for (let i = 0; i < 3; i++) {
			let opt = prompt("Статья необязательных расходов?", "");
			
			if (typeof(opt) === "string" && typeof(opt) != null && opt != "" && opt.length < 50) {
				appData.optionalExpenses[i] = opt;
			}
		}
	},
	chooseIncome: function() {
		let inc;
		
		while (typeof(inc) !== "string" || inc == "" || inc == null) {
			inc = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
			appData.income = inc.split(", ");
		}
		
		appData.income.push( prompt("Может что-то еще?", "") );
		appData.income.sort();
		
		appData.income.forEach(function(item, i) {
			alert("Способы доп. заработка: " + (i + 1) + "." + item);
		});

	}
};

for (let key in appData) {
	console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

alert('Ежедневный бюджет: ' + appData.moneyPerDay);
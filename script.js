let companies = [
    {
        id: 1,
        name: "wepro",
        tax: 12,
        budget: 10000,
        expensesPerYear: [4000, 2000, 3000]
    },
    {
        id: 2,
        name: 'Allayor',
        tax: 12,
        budget: 200,
        expensesPerYear: [150, 300, 700]
    },
    {
        id: 3,
        name: "Daler-Xrust",
        tax: 10,
        budget: 50000,
        expensesPerYear: [12000, 20000, 5000]
    },
    {
        id: 4,
        name: 'Luchshiy Productoviy',
        tax: 20,
        budget: 23000,
        expensesPerYear: [2000, 1000, 5000]
    },
    {
        id: 5,
        name: "dilrukh salon",
        tax: 4,
        budget: 32000,
        expensesPerYear: [12000, 10000, 10000]
    },
    {
        id: 6,
        name: "Necromantiya",
        tax: 10,
        budget: 30000,
        expensesPerYear: [1200, 3444, 4666]
    },
    {
        id: 7,
        name: 'Artyomida.uz',
        tax: 15,
        budget: 100000,
        expensesPerYear: [10000, 3000, 90000]
    },
    {
        id: 8,
        name: "bmw",
        tax: 13,
        budget: 13000,
        expensesPerYear: [3000, 4000, 1000]
    },
    {
        id: 9,
        name: "dizayner",
        tax: 12,
        budget: 20000,
        expensesPerYear: [1000, 100, 200]
    },
    {
        id: 10,
        name: 'Amerika_cherez_mexika',
        tax: 0,
        budget: 15000,
        expensesPerYear: [100, 4000]
    },
    {
        id: 11,
        name: 'Gradus MMM',
        tax: 12,
        budget: 250000,
        expensesPerYear: [20000, 50000, 15000]
    },
    {
        id: 12,
        name: "Tangir Company",
        tax: 100,
        budget: 1000000,
        expensesPerYear: [10000, 12000, 20000]
    },
    {
        id: 13,
        name: "film_for_adults",
        tax: 75,
        budget: 50000,
        expensesPerYear: [15000, 10000, 5000]
    }
]

let forBenefit = []
let forDrawback = []

for (let company of companies) {

    company.expensesPerMonth = 0
    company.monthlyProfit = 0
    company.copanyCondition = ""

    for (let number of company.expensesPerYear) {
        company.expensesPerMonth += Math.round(number / 12)
    }

    let taxAmountPerMonth = ((company.budget / 100) * company.tax) / 12
    let budgetPerMonth = company.budget / 12
    company.monthlyProfit = Math.round(budgetPerMonth - (company.expensesPerMonth + taxAmountPerMonth))

    if (company.monthlyProfit > 0) {
        forBenefit.push(`Name of the company: ${company.name}; Profit of the Company per month: ${company.monthlyProfit}`)
        company.copanyCondition = "Normal"
    } else {
        forDrawback.push(`Name of the company: ${company.name}; Profit of the Company per month: ${company.monthlyProfit}`)
        company.copanyCondition = "Abnormal"
    }

}

console.log("Statistics of Companies", companies);
console.log("Companies going for Benefit:", forBenefit);
console.log("Companies going for Drawback:", forDrawback);
// Get Input Value & Convert Number 
function strToNumber(inputId, valueOrTxt){
    // get Value from input and convert into number 
    const inputField = document.getElementById(inputId);
    if(valueOrTxt == 'value'){
        // convet into Number 
        const inputFieldValue = inputField.value;
        const inputValue = parseFloat(inputFieldValue)        
        
        // Input Validation 
        if(inputValue>0){
            inputField.style.borderColor = '';
            return inputValue; 
        }else if(isNaN(inputValue)){
            inputField.value = '';
            inputField.placeholder = 'Text Or Empty Not Accepted';
            inputField.style.borderColor = 'red';

        }else if(inputValue<0){
            inputField.value = '';
            inputField.placeholder = 'Nagative Value Not Accepted';
            inputField.style.borderColor = 'red';
        }
    }

    // get innerText from html element and convert into number 
    if(valueOrTxt == 'txt'){            
        const getElemenTxt = document.getElementById(inputId);
        const getElementValue = getElemenTxt.innerText;
        const elementValue = parseFloat(getElementValue)
        return elementValue;
    }
}


// Get Calculate Button 
document.getElementById('calculate-btn').addEventListener('click', function(){
    // get total Income 
    // const incomeField = document.getElementById('total-income');
    // const incomeValue = incomeField.value;
    const totalIncome = strToNumber('total-income', 'value');
    // console.log(totalIncome);
    // if(totalIncome<0){
    //     incomeField.value = '';
    //     incomeField.placeholder = 'Nagative Value Not Accepted';
    //     incomeField.style.borderColor = 'red';
    // }else if(isNaN(totalIncome)){
    //     incomeField.value = '';
    //     incomeField.placeholder = 'String Or Empty Not Accepted';
    //     incomeField.style.borderColor = 'red';
    // }


    // get food cost 
    // const foodCostField = document.getElementById('food-cost');
    // const foodCostValue =  foodCostField.value;
    // const foodCost = parseFloat(foodCostValue);

    const foodCost = strToNumber('food-cost', 'value');

    // if(foodCost<0){
    //     foodCostField.value = 'Enter Positive Number';
    //     foodCostField.style.borderColor = 'red';
    // }else if(isNaN(foodCost)){
    //     foodCostField.value = 'Text Not Accepted';
    //     foodCostField.style.borderColor = 'red';
    // }



    // get rent cost value 
    // const rentCostField = document.getElementById('rent-cost');
    // const rentCostValue =  rentCostField.value;
    // const rentCost = parseFloat(rentCostValue);
    const rentCost = strToNumber('rent-cost', 'value');

    // if(rentCost<0){
    //     rentCostField.value = 'Enter Positive Number';
    //     rentCostField.style.borderColor = 'red';
    // }else if(isNaN(rentCost)){
    //     rentCostField.value = 'Text or Empty Not Accepted';
    //     rentCostField.style.borderColor = 'red';
    // }

    // get clothe cost value 
    // const clotheCostField = document.getElementById('clothe-cost');
    // const clotheCostValue =  clotheCostField.value;
    // const clotheCost = parseFloat(clotheCostValue);
    const clotheCost = strToNumber('clothe-cost', 'value');

    // if(clotheCost<0){
    //     clotheCostField.value = 'Enter Positive Number';
    //     clotheCostField.style.borderColor = 'red';
    // }else if(isNaN(clotheCost)){
    //     clotheCostField.value = 'Text Not Accepted';
    //     clotheCostField.style.borderColor = 'red';
    // }


    // total Expenses
    const getTotalExpense = foodCost + rentCost + clotheCost;
    // get total expenses 
    const totalExpenseTxt = document.getElementById('total-expenses');
    const totalExpenseValue = totalExpenseTxt.innerText;
    // totalExpenseTxt.innerText = getTotalExpense;
    const totalExpense = parseFloat(totalExpenseValue)


    if(getTotalExpense>=0){
        totalExpenseTxt.innerText = getTotalExpense;
    }


    // Balance Calculate
    const balanceTxt = document.getElementById('balance');    
    const balanceValue = balanceTxt.innerText;
    const balance = parseFloat(balanceValue);


    // update balance 
    const updateBalance = totalIncome - getTotalExpense;    
    if(totalIncome>getTotalExpense){
        balanceTxt.innerText = updateBalance;
    }else if(totalIncome<getTotalExpense){
        balanceTxt.innerText = 'Income not Enough';
        balanceTxt.style.color= 'red';
    }
})


document.getElementById('save-btn').addEventListener('click', function(){

    // const saveingsParcentField = document.getElementById('saving-percent');
    // const savingsParcentValue = saveingsParcentField.value;
    // const savingsParcentAmount = parseFloat(savingsParcentValue)
    
    
    const savingsParcentAmount = strToNumber('saving-percent', 'value');


    
    // get total expenses 
    // const totalExpenseTxt = document.getElementById('total-expenses');
    // const totalExpenseValue = totalExpenseTxt.innerText;
    // const totalExpense = parseFloat(totalExpenseValue)


    const totalExpense = strToNumber('total-expenses', 'txt')




    // saving parcent calculate     
        // get total Income 
    // const incomeField = document.getElementById('total-income');
    // const incomeValue = incomeField.value;
    // const totalIncome = parseFloat(incomeValue);


    const totalIncome = strToNumber('total-income', 'value');

    const savingsAmount = (totalIncome * savingsParcentAmount) / 100;
    

    // updateSaveings
    const totalSaving = document.getElementById('saving-amount');
    totalSaving.innerText = savingsAmount;
    // const savingAmountValue = savingAmountId.innerText;
    // const totalSaving = parseFloat(savingAmountValue);
    // console.log(totalSaving);


    // get remian balance 
    const remainBalanceId = document.getElementById('remain-balance');
    const remainBalanceValue = remainBalanceId.innerText;


    const remainBalance = parseFloat(remainBalanceValue);


    // update remain balance 
    const updateRemainBalance = totalIncome - (totalExpense + savingsAmount);
    remainBalanceId.innerText = updateRemainBalance;

})
// Get Input Value & Convert Number 
function strToNumber(inputId, valueOrTxt){
    // get Value from input and convert into number 
    const inputField = document.getElementById(inputId);
    if(valueOrTxt == 'value'){
        // convet into Number 
        const inputFieldValue = inputField.value;
        const inputValue = parseFloat(inputFieldValue)        
        
        // Input Validation 
        if(inputValue>=0){
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

// select id 
function selectElementId(elementId){
    const idName = document.getElementById(elementId)
    return idName;
}

// Get Calculate Button 
document.getElementById('calculate-btn').addEventListener('click', function(){
    // get total Income
    const totalIncome = strToNumber('total-income', 'value');

    // get food cost
    const foodCost = strToNumber('food-cost', 'value');


    // get rent cost value 
    const rentCost = strToNumber('rent-cost', 'value');

    // get clothe cost value
    const clotheCost = strToNumber('clothe-cost', 'value');

    // total Expenses
    const getTotalExpense = foodCost + rentCost + clotheCost;
    
    // get total expenses 
    const totalExpenseTxt = selectElementId('total-expenses');
    const totalExpenseValue = totalExpenseTxt.innerText;
    // totalExpenseTxt.innerText = getTotalExpense;
    // const totalExpense = parseFloat(totalExpenseValue)


    if(getTotalExpense>=0){
        totalExpenseTxt.innerText = getTotalExpense;
    }


    // Balance Calculate
    const balanceTxt = document.getElementById('balance');    
    const balanceValue = balanceTxt.innerText;
    const balance = parseFloat(balanceValue);

    // remain balance 
    const remainBalanceId = selectElementId('remain-balance');
    // Total saving amount 
    const totalSaving = selectElementId('saving-amount');
    // saving parcent
    const savingParcent = document.getElementById('saving-percent');

    // update balance and remain balance
    const updateBalance = totalIncome - getTotalExpense;    
    if(totalIncome>getTotalExpense){
        balanceTxt.innerText = updateBalance;

        // reset 
        remainBalanceId.innerText = updateBalance;
        totalSaving.innerText = '00';
        savingParcent.value = '';
    }else if(totalIncome<getTotalExpense){
        balanceTxt.innerText = 'insufficient Income';
        balanceTxt.style.color= 'red';
    }
})


document.getElementById('save-btn').addEventListener('click', function(){

    // get savings parcent amount 
    const savingsParcentAmount = strToNumber('saving-percent', 'value');

    
    // get total expenses
    const totalExpense = strToNumber('total-expenses', 'txt')



    // after calculate balance 
    const balance = strToNumber('balance', 'txt');

    // saving parcent calculate     
        // get total Income
    const totalIncome = strToNumber('total-income', 'value');

    const savingsAmount = (totalIncome * savingsParcentAmount) / 100;
    

    // updateSaveings
    const totalSaving = selectElementId('saving-amount');

    // totalSaving.innerText = savingsAmount;
    if(savingsParcentAmount == 0){
        totalSaving.innerText = '00';        
    }else if(balance>=savingsAmount){
        totalSaving.innerText = savingsAmount;
        totalSaving.style.color  = '';
    }else if(balance<savingsAmount){
        totalSaving.innerText = 'insufficient balance';
        totalSaving.style.color  = 'red';
    }


    // get remian balance 
    const remainBalanceId = selectElementId('remain-balance');

    // update remain balance 
    const updateRemainBalance = totalIncome - (totalExpense + savingsAmount);
    if(updateRemainBalance>=0){        
        remainBalanceId.innerText = updateRemainBalance;
    }else{
        remainBalanceId.innerText = balance;
    }

})
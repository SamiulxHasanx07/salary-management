// Get Input or Innner Value & Convert Number
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
            inputField.classList.remove('red-color');
            return inputValue; 
        }else if(isNaN(inputValue)){
            inputField.value = '';
            inputField.placeholder = 'Text Or Empty Not Accepted';
            inputField.style.borderColor = 'red';
            inputField.classList.add('red-color');

        }else if(inputValue<0){
            inputField.value = '';
            inputField.placeholder = 'Nagative Value Not Accepted';
            inputField.style.borderColor = 'red';
            inputField.classList.add('red-color');
        }
    }

    // get innerText from html element and convert into number 
    if(valueOrTxt == 'txt'){            
        const getElemenTxt = document.getElementById(inputId);
        const getElementValue = getElemenTxt.innerText;
        const elementValue = parseFloat(getElementValue)
        return elementValue;
    }
};

// select id 
function selectElementId(elementId){
    const idName = document.getElementById(elementId)
    return idName;
};

// total Expenses
function totalExpenses(){    

    // get food cost
    const foodCost = strToNumber('food-cost', 'value');

    // get rent cost value 
    const rentCost = strToNumber('rent-cost', 'value');

    // get clothe cost value
    const clotheCost = strToNumber('clothe-cost', 'value');

    // total expense 
    const total = foodCost + rentCost + clotheCost;
    // get total expenses 
    const totalExpenseTxt = selectElementId('total-expenses');
    if(total>=0){
        totalExpenseTxt.innerText = total;
    }
    return total;

};

// Update remain Balance
function updateBalanceAndRemain(income, expenses){
    
    // Balance Calculate
    const balanceTxt = selectElementId('balance');

    // remain balance 
    const remainBalanceId = selectElementId('remain-balance');
    // Total saving amount 
    const totalSaving = selectElementId('saving-amount');
    // saving parcent
    const savingParcent =selectElementId('saving-percent');

    // update balance and remain balance
    const updateBalance = income - expenses;    
    if(income>expenses){
        balanceTxt.innerText = updateBalance;

        // reset 
        remainBalanceId.innerText = updateBalance;
        totalSaving.innerText = '0';
        savingParcent.value = '';
        balanceTxt.style.color= '';
    }else if(income<expenses){
        balanceTxt.innerText = 'Insufficient Income';
        balanceTxt.style.color= 'red';
    }
};

// parcentate calculate q
function parcentCalc(income, totalParcent){
       
    const parcentAmount = (income * totalParcent) / 100;
     return parcentAmount;
};


// update savings balance
function updateSaveingBalance(saveParcent, saveAmount, balance){
    // updateSaveings
    const totalSaving = selectElementId('saving-amount');

    // totalSaving.innerText = savingsAmount;
    if(saveParcent == 0){
        totalSaving.innerText = '0';
        totalSaving.style.color  = '';
    }else if(balance>=saveAmount){
        totalSaving.innerText = saveAmount;
        totalSaving.style.color  = '';
    }else if(balance<saveAmount){
        totalSaving.innerText = 'Insufficient balance';
        totalSaving.style.color  = 'red';
    }
};

// update remain balance 
function updateRemain(income, saveAmount, calcBalance){
    
    // get total expenses
    const totalExpense = strToNumber('total-expenses', 'txt')
    // get remian balance 
    const remainBalanceId = selectElementId('remain-balance');

    // update remain balance
    if(isNaN(calcBalance)){
        remainBalanceId.innerText = 'balance insaficient';
        remainBalanceId.style.color = 'red';

    }else{
        const updateRemainBalance = income - (totalExpense + saveAmount);
        if(updateRemainBalance>=0){        
            remainBalanceId.innerText = updateRemainBalance;
            remainBalanceId.style.color = '';
        }else{
            remainBalanceId.innerText = calcBalance;
            remainBalanceId.style.color = '';
        }        
        remainBalanceId.style.color = '';

    }

};

// Get Calculate Button 
document.getElementById('calculate-btn').addEventListener('click', function(){

    
    // get total Income
    const totalIncome = strToNumber('total-income', 'value');
    // total Expenses
    const getTotalExpense = totalExpenses();  

    // Update Balance and Remaining Balance    
    updateBalanceAndRemain(totalIncome, getTotalExpense);
});

document.getElementById('save-btn').addEventListener('click', function(){

    // get savings parcent amount 
    const savingsParcentAmount = strToNumber('saving-percent', 'value');
    

    // after calculate balance 
    const balance = strToNumber('balance', 'txt');


    // saving parcent calculate     
        // get total Income
    const totalIncome = strToNumber('total-income', 'value');

    const savingsAmount = parcentCalc(totalIncome, savingsParcentAmount);
    
    // updateSaveings
    updateSaveingBalance(savingsParcentAmount, savingsAmount, balance);
   
    // update remain balance
    updateRemain(totalIncome, savingsAmount , balance);
});
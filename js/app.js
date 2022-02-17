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

// total Expenses
function totalExpenses(){    

    // get food cost
    const foodCost = strToNumber('food-cost', 'value');

    // get rent cost value 
    const rentCost = strToNumber('rent-cost', 'value');

    // get clothe cost value
    const clotheCost = strToNumber('clothe-cost', 'value');


    
    const total = foodCost + rentCost + clotheCost;
    // get total expenses 
    const totalExpenseTxt = selectElementId('total-expenses');
    if(total>=0){
        totalExpenseTxt.innerText = total;
    }
    return total;

}

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
    
}

// Get Calculate Button 
document.getElementById('calculate-btn').addEventListener('click', function(){

    
    // get total Income
    const totalIncome = strToNumber('total-income', 'value');
    // get total Income
    // const totalIncome = strToNumber('total-income', 'value');

    // // get food cost
    // const foodCost = strToNumber('food-cost', 'value');

    // // get rent cost value 
    // const rentCost = strToNumber('rent-cost', 'value');

    // // get clothe cost value
    // const clotheCost = strToNumber('clothe-cost', 'value');


    // foodCost + rentCost + clotheCost
    // total Expenses
    const getTotalExpense = totalExpenses();  

    // Update Balance and Remaining Balance    
    updateBalanceAndRemain(totalIncome, getTotalExpense);



    // // get total expenses 
    // const totalExpenseTxt = selectElementId('total-expenses');
    // // const totalExpenseValue = totalExpenseTxt.innerText;
    // // const totalExpense = parseFloat(totalExpenseValue)

    // if(getTotalExpense>=0){
    //     totalExpenseTxt.innerText = getTotalExpense;
    // }


    // // Balance Calculate
    // const balanceTxt = selectElementId('balance');

    // // remain balance 
    // const remainBalanceId = selectElementId('remain-balance');
    // // Total saving amount 
    // const totalSaving = selectElementId('saving-amount');
    // // saving parcent
    // const savingParcent =selectElementId('saving-percent');

    // // update balance and remain balance
    // const updateBalance = totalIncome - getTotalExpense;    
    // if(totalIncome>getTotalExpense){
    //     balanceTxt.innerText = updateBalance;

    //     // reset 
    //     remainBalanceId.innerText = updateBalance;
    //     totalSaving.innerText = '0';
    //     savingParcent.value = '';
    //     balanceTxt.style.color= '';
    // }else if(totalIncome<getTotalExpense){
    //     balanceTxt.innerText = 'insufficient Income';
    //     balanceTxt.style.color= 'red';
    // }




})

function parcentCalc(income, totalParcent){
       
    const parcentAmount = (income * totalParcent) / 100;
     return parcentAmount;
}


// update savings balance
function updateSaveingBalance(saveParcent, saveAmount, balance){
    // updateSaveings
    const totalSaving = selectElementId('saving-amount');

    // totalSaving.innerText = savingsAmount;
    if(saveParcent == 0){
        totalSaving.innerText = '0';        
    }else if(balance>=saveAmount){
        totalSaving.innerText = saveAmount;
        totalSaving.style.color  = '';
    }else if(balance<saveAmount){
        totalSaving.innerText = 'Insufficient balance';
        totalSaving.style.color  = 'red';
    }
    
}

// totalIncome, savingsAmount , balance
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
        }else{
            remainBalanceId.innerText = calcBalance;
        }        
        remainBalanceId.style.color = '';

    }

}
document.getElementById('save-btn').addEventListener('click', function(){

    // get savings parcent amount 
    const savingsParcentAmount = strToNumber('saving-percent', 'value');
    

    // after calculate balance 
    const balance = strToNumber('balance', 'txt');


    // saving parcent calculate     
        // get total Income
    const totalIncome = strToNumber('total-income', 'value');

    const savingsAmount = parcentCalc(totalIncome, savingsParcentAmount);
    

    updateSaveingBalance(savingsParcentAmount, savingsAmount, balance)
    
    updateRemain(totalIncome, savingsAmount , balance)
    // // updateSaveings
    // const totalSaving = selectElementId('saving-amount');

    // // totalSaving.innerText = savingsAmount;
    // if(savingsParcentAmount == 0){
    //     totalSaving.innerText = '0';        
    // }else if(balance>=savingsAmount){
    //     totalSaving.innerText = savingsAmount;
    //     totalSaving.style.color  = '';
    // }else if(balance<savingsAmount){
    //     totalSaving.innerText = 'Insufficient balance';
    //     totalSaving.style.color  = 'red';
    // }


    // function updateRemain(){
    //     // get remian balance 
    //     const remainBalanceId = selectElementId('remain-balance');
    
    //     // update remain balance
    //     if(isNaN(balance)){
    //         remainBalanceId.innerText = 'balance insaficient';
    //         remainBalanceId.style.color = 'red';
    
    //     }else{
    //         const updateRemainBalance = totalIncome - (totalExpense + savingsAmount);
    //         if(updateRemainBalance>=0){        
    //             remainBalanceId.innerText = updateRemainBalance;
    //         }else{
    //             remainBalanceId.innerText = balance;
    //         }        
    //         remainBalanceId.style.color = '';
    
    //     }

    // }

})
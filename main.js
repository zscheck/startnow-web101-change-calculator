function clickEvent(){
    var moneyDue = document.getElementById('amount-due').value;
    var moneyRec = document.getElementById('amount-received').value;
   
   var change = moneyRec-moneyDue;
    if(change<0){
        alert("Not Enough Money!!!");
    }
     change = change.toFixed(2); //to keep it at 2 decimal places.
   
 
   var dollars = parseInt(change);
    var dchange = change%1;
     dchange=Math.round(dchange*=100); //to make change a whole number.(integer form)

   var quarters = parseInt(dchange/25);
    var qchange = dchange%25;
     qchange= Math.round(qchange); //to be safe incase of that weird glitch

   var dimes = parseInt(qchange/10);
    var dichange = qchange%10; 
     dichange= Math.round(dichange); //doing it of every step
  
   var nickels = parseInt(dichange/5);
    var pennies = dichange%5;
     pennies= Math.round(pennies); //just in case that glitch comes up again
 
    if(change<0){
        dollars=0;quarters=0;dimes=0;nickels=0;pennies=0;
    }

   var pDollars = document.getElementById('dollars-output');  
       pDollars.innerHTML= dollars;

   var pQuarters = document.getElementById('quarters-output');  
       pQuarters.innerHTML= quarters;
   
   var pDimes = document.getElementById('dimes-output');  
       pDimes.innerHTML= dimes;

   var pNickels = document.getElementById('nickels-output');  
       pNickels.innerHTML= nickels;

   var pPennies = document.getElementById('pennies-output');  
       pPennies.innerHTML= pennies;
}




// function calculateDollars(){


// }

// function calculateQuarters(){


// }

// function calculateDimes(){


// }

// function calculateNickels(){


// }

// function calculatePennies(){


// }

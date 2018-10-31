
'use strict';

function main(){
    //In the javascript code
    var theInitialInput = document.querySelector('#starting-amount');
    var theMonthlyPlan = document.querySelector('#monthly-plan');
    var riskLevelsCheckbox = document.querySelectorAll('.risk');
    
    
    /*
    var riskLevels = {};
    riskLevels["cautious"] = 0.03;
    riskLevels["balanced"] = 0.05;
    riskLevels["adventurous"] = 0.08;
    */

    // // getRiskCategory() finds the return based on the radio selection.
    // function getRiskCategory() {
    //     var riskValue = 0;
    //     //Get a reference to the form id
    //     var theInputVar = document.forms["select-var"];
    //     //Get a reference to the var the user Chooses name=chooseone":
    //     var selectedVar = theForm.elements["chooseone"];
    //     //Here since there are 3 radio buttons chooseone.length = 3
    //     //We loop through each radio buttons
    //     for(var i = 0; i < chooseone.length; i++) {
    //         //if the radio button is checked
    //         if(chooseone[i].checked) {
    //             riskValue = get_risk[chooseone[i].value];
    //             //If we get a match then we break out of this loop
    //             break;
    //         }
    //     }
    //     //We return the riskcatsegory
    //     return riskValue;

    // }
    
    function getTotal() {
        var initialAmount = theInitialInput.value;
        var monthlySavings = theMonthlyPlan.value;
        var finalRiskLevel = function (riskLevels) {

            if (riskLevelsCheckbox[0].checked === true){
                return 0.03
            } else if (riskLevelsCheckbox[1].checked === true){
                return 0.05;
            } else if (riskLevelsCheckbox[2].checked === true){
                return 0.08;
            };
            
        }   
        var portfolioAmountThirty = initialAmount*((1 + finalRiskLevel() - 0.098)^(30)) + (monthlySavings*359);
        var portfolioAmountTwenty = initialAmount*((1 + finalRiskLevel() - 0.098)^(20)) + (monthlySavings*240);
        var portfolioAmountTen = initialAmount*((1 + finalRiskLevel() - 0.098)^(10)) + (monthlySavings*120);
        
        
        //display the result
        document.querySelector('#your-final').innerText = "Your portfolio value in 30 years: "+ portfolioAmountThirty;
        document.querySelector('#ten-years').innerText = "€ " + portfolioAmountTen;
        document.querySelector('#twenty-years').innerText = "€ " + portfolioAmountTwenty;
        document.querySelector('#thirty-years').innerText = "€ " +portfolioAmountThirty;
        
    }


    var submitButton = document.querySelector('#submit-section');
    submitButton.addEventListener('click', getTotal);
    

}

window.addEventListener('load', main);

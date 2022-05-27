var loanAmount= 34500;
var interest= 8;
var interestAmount, totalAmount;
interestAmount= loanAmount * (interest / 100);
totalAmount= loanAmount + interestAmount;
document.write("<B>Total amount to be paid ($) :</B>"+totalAmount + "<br>");
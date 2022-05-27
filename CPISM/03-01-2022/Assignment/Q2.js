document.write("<h2>Amount of Interest</h2>")
var amount = 1500
var rate1 = 0.04
var rate2 = 0.045
var rate3 = 0.05
if (amount <= 2000) {
    document.write(amount * rate1)
} else
if (amount <= 7000) {
    document.write(amount * rate2)
} else if (amount > 7000) {
    document.write(amount * rate3)
}
document.write("<h3>Number Check</h3>")
var num = "12"
if (num >= "0") {
    document.writeln("Positive" + "<br>")
    if (num / 2 >= 1) {
        document.write("The number is Even")
    } else {
        document.write("The number is Odd")
    }
} else {
    document.write("Negative")
}
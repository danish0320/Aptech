document.write("<h2>Marksheet</h2>")
var marks = 89
if (marks < 0) {
    document.write("Invalid")
} else if (marks <= 33) {
    document.write("Failed")
} else if (marks >= 33 && marks <= 39) {
    document.write("E-Grade")
} else if (marks >= 40 && marks <= 49) {
    document.write("D-Grade")
} else if (marks >= 50 && marks <= 59) {
    document.write("C-Grade")
} else if (marks >= 60 && marks <= 69) {
    document.write("B-Grade")
} else if (marks >= 70 && marks <= 79) {
    document.write("A-Grade")
} else if (marks >= 80 && marks <= 100) {
    document.write("A One-Grade")
} else if (marks > 100) {
    document.write("Invalid")
}
document.writeln("<h1>JSON Datatype</h1>");
var student = {
    "enrol_id": 6673,
    "name": "hashim",
    "eligible": true,
    "marks": 98.8,
    "subject": ["XML", "jSON", "JAVA"],
    "intro": { "naam": "moin", "fname": "akhtar", "location": "Nazimabad" }
};
document.write("My name is "+student.name+" My eligibilty is "+student.eligible+" because I secured "+student.marks+" marks in "+student.subject[2]+" & I live in "+student.intro.location+" with my friend "+student.intro.naam+" "+student.intro.fname)
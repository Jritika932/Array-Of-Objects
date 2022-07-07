// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']
// "
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ]



document.log(studentRecords[0].name.toUpperCase());
document.log(studentRecords[1].name.toUpperCase());
document.log(studentRecords[2].name.toUpperCase());
document.log(studentRecords[3].name.toUpperCase());

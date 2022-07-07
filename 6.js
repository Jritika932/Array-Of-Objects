// Question 6: This time we are required to print the sum of marks of the students with id > 120.


let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ]




let sumMarks = 0;                                
for(let i=0; i<=3; i++){   
    if (studentRecords[i].id >120){                             
    sumMarks += studentRecords[i].marks;
    }
}
console.log(sumMarks);
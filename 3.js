// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ]



for(let i=0;i<=3;i++){
    if(studentRecords[i].marks>50 && studentRecords[i].id>120){
        console.log(studentRecords[i]);
    }
}
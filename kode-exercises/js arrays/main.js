console.log('Good day! ');

setTimeout(function() {
    let userInput = prompt("What would you like to do?").toLowerCase();
    const studentList = [];
     
    while (userInput !== 'quit' && userInput !== 'q') {
        //add student and display total number of added students
        if (userInput ==='add'){
            let name = prompt("Add student's name:").toLowerCase();
            function newStudent(name){
                studentList.push(name);
                console.log(`${name.charAt(0).toUpperCase() + name.slice(1)} is added to the student's list!`);
            }
            newStudent(name);

            let counter = prompt("Add another student? (Yes/No)").toLowerCase();
            while(counter === 'yes' || counter === 'y'){
                function addAgain(){
                    name = prompt("Add student's name:").toLowerCase();
                    newStudent(name);
                    counter = prompt("Add another student? (Yes/No)").toLowerCase();
                }
                addAgain();
            }
            if (counter === 'no' || counter === 'n'){
                function addedStudent(){
                    console.log(`There are a total of ${studentList.length} student(s) added within the list!`);
                }
                addedStudent(studentList);
            }
            else{
                userInput = prompt("What would you like to do?").toLowerCase(); 
            }
        }
        
        //display sorted student list 
        else if (userInput === 'list') {
            function displayList (studentList){
                console.log ("***************");
                for (let student of studentList){
                    console.log(`${student.charAt(0).toUpperCase() + student.slice(1)}`);
                }
                console.log ("***************");
            }
            displayList(studentList.sort());
        }

        //validate if enrolled
        else if(userInput === 'check'){
            let student = prompt("Enter student's name to validate if enrolled:").toLowerCase();
            function enrolledStudent(student){
                if ( studentList.includes(student)){
                    console.log(`${student.charAt(0).toUpperCase() + student.slice(1)} is enrolled`)
                }
                else{
                    console.log(`${student.charAt(0).toUpperCase() + student.slice(1)} is not yet enrolled.`)
                }
            }
            enrolledStudent(student);

            let counter = prompt("Validate another student? (Yes/No)").toLowerCase();
            while(counter === 'yes' || counter === 'y'){
                function validateAgain(){
                    student = prompt("Enter student's name to validate if enrolled:").toLowerCase();
                    enrolledStudent(student);
                    counter = prompt("Validate another student? (Yes/No)").toLowerCase();
                }
                validateAgain();   
            }
            if (counter === 'no' || counter === 'n'){
                userInput = prompt("What would you like to do?").toLowerCase(); 
            }
        }  

        //display section
        else if (userInput === 'section'){
            const section = "Section A";
            function sectionList (studentList){
                console.log ("***************");
                for (let student of studentList){
                    console.log(`${student.charAt(0).toUpperCase() + student.slice(1)} - ${section}`);
                }
                console.log ("***************");
            }
            sectionList(studentList.sort());
        }

        //remove student from list
        else if (userInput === 'delete'){
            const index = parseInt(prompt('Enter index to delete student:'));
            function removeStudent(index){
                if (!Number.isNaN(index)){
                    const deleted = studentList.splice(index,1);
                    console.log(`${deleted[0]} has been deleted from the list.`);
                }
                else {
                    console.log("Unknown index, try again.");
                    index = parseInt(prompt('Enter index to delete student:'));
                }
            }
            removeStudent(index);

            function updatedList(studentList){
                console.log ("***************");
                console.log ("Updated List of Students");
                console.log ("***************");
                for (let student of studentList){
                    console.log(`${student.charAt(0).toUpperCase() + student.slice(1)}`);
                }
                console.log ("***************");
            }
            updatedList(studentList.sort());

            let counter = prompt("Remove another student? (Yes/No)").toLowerCase();
            while(counter === 'yes' || counter === 'y'){
                function removeAgain(){
                    const index = parseInt(prompt('Enter index to delete student:'));
                    removeStudent(index);
                    updatedList(studentList.sort());
                    counter = prompt("Remove another student? (Yes/No)").toLowerCase();
                }
                removeAgain();   
            }
            if (counter === 'no' || counter === 'n'){
                userInput = prompt("What would you like to do?").toLowerCase(); 
            }
        }

        userInput = prompt("What would you like to do?").toLowerCase(); 
    }
    console.log("Session ended.")
}, 500);

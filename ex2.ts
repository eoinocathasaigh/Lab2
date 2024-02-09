//Creating an Array of strings
let myArray: string[]=["Casey", "Frank", "Chocolate"]; 

//(A)Function to add strings and alter the array
//Returns number of elements in the array
function pushStrings(myTask: string): number{
    myArray.push(myTask);
    console.log("Task Successfully added");
    return myArray.length;
}

pushStrings("Eoin");

//(B)Listing all the tasks function
function listAllTasks(): void{
    //Could do this with myArray.forEach like this
    /*myArray.forEach(item)=>{
        console.log(item+ " is in our Tasks list!");
    }*/
    //Ill use a for loop
    for(let i: number = 0; i < myArray.length; i++)
    {
        console.log("Value at index " + i + " is " + myArray[i]);
    }
}

listAllTasks();

//(C)Removing elements
function deleteTask(toRemove: string): number{
    let removeVal = myArray.indexOf(toRemove); //Determine the index of the value we want to remove
    if(removeVal > -1){
        myArray.splice(removeVal, 1); //Deletes any element from the array but it must have the index
        console.log("Value successfully deleted");
    }
    else{
        console.log(toRemove + " isnt in my Array List");
    }
    return myArray.length;
}

console.log(deleteTask("Casey"));
console.log(deleteTask("David"));
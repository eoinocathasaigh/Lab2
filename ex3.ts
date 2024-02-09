interface myInterface{
    strArray: string[];
    addTask(task: string): number;
    listAll(): void;
    deleteTaks(toDel: string): number;
}

class testClass implements myInterface{
    addTask(task: string): number {
        let length = this.strArray.push(task);
        console.log("Length of array is: " + length);
        return this.strArray.length;
    }
    listAll(): void{
        for(let i: number = 0; i < this.strArray.length; i++)
        {
            console.log(this.strArray[i] + " is in the array");
        }
    }
    deleteTaks(toDel: string): number {
        let removeVal = this.strArray.indexOf(toDel); //Determine the index of the value we want to remove
        if(removeVal > -1){
            this.strArray.splice(removeVal, 1); //Deletes any element from the array but it must have the index
            console.log("Value successfully deleted");
        }
        else{
            console.log(toDel + " isnt in my Array List");
        }
        console.log("Length of array is: " + this.strArray.length);
        return this.strArray.length;
    }
    strArray: string[] = [];
}
let classObj = new testClass();
classObj.addTask("Casey");
classObj.addTask("Eoin");
classObj.listAll();
classObj.deleteTaks("Casey");

//Can also do this in a different file - declaring the interface in its own file and using the line
//export interface TaskInterface{......}
//You would then just create a class in a new file and add implements TaskInterface to the end of it
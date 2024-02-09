var testClass = /** @class */ (function () {
    function testClass() {
        this.strArray = [];
    }
    testClass.prototype.addTask = function (task) {
        var length = this.strArray.push(task);
        console.log("Length of array is: " + length);
        return this.strArray.length;
    };
    testClass.prototype.listAll = function () {
        for (var i = 0; i < this.strArray.length; i++) {
            console.log(this.strArray[i] + " is in the array");
        }
    };
    testClass.prototype.deleteTaks = function (toDel) {
        var removeVal = this.strArray.indexOf(toDel); //Determine the index of the value we want to remove
        if (removeVal > -1) {
            this.strArray.splice(removeVal, 1); //Deletes any element from the array but it must have the index
            console.log("Value successfully deleted");
        }
        else {
            console.log(toDel + " isnt in my Array List");
        }
        console.log("Length of array is: " + this.strArray.length);
        return this.strArray.length;
    };
    return testClass;
}());
var classObj = new testClass();
classObj.addTask("Casey");
classObj.addTask("Eoin");
classObj.listAll();
classObj.deleteTaks("Casey");
//Can also do this in a different file - declaring the interface in its own file and using the line
//export interface TaskInterface{......}
//You would then just create a class in a new file and add implements TaskInterface to the end of it

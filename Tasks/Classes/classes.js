class Student {

    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        console.log(`I am Student Class constructor`);
    }

    info() {
        console.log(`Name : ${this.name} | Roll-No.: ${this.rollNo}`);
    }

}

// Creating object
let student1 = new Student("Akshay", 122);
student1.info()

//In JavaScript, a class is a kind of function.
console.log(`\nClass is a function`);
console.log(`typeof Student :-`, typeof Student);

//class created method in prototype
console.log(`student1.info === Student.prototype.info :-`, student1.info === Student.prototype.info);
//Here class create two methods constructor, info
console.log(`Student.prototype :-`, Object.getOwnPropertyNames(Student.prototype));


console.log(`\n-----------Class Expression-------------`);
let User = class {
    sayHi() {
        console.log("Hello");
    }
};

new User().sayHi();

// make classes dynamically “on-demand”
function makeClass(phrase) {
     
    return class {
      sayHi() {
        console.log(phrase);
      }
    };
  }

  // Create a new class
let UserClass = makeClass("Hello");

new UserClass().sayHi();  



console.log("\n------------Getters/setters---------");
class Employee {
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = value;
    }
  
  }
  
  let emp = new Employee();
  emp.name="akshay"; //Setter
  console.log("emp.name :-",emp.name);  //Getter
  
   
 
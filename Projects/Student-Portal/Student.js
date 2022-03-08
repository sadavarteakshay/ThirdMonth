import { User } from './user.js';


export class Student extends User {

  static Data = new Array();
  #class

  constructor(username, password, name, _class) {

    super(username, password, name)

    this.#class = _class;

  }







  displayProfile() {

    console.log(`\n                                       Welcome ${this.name}
            ID :- ${this.id} 
          Name :- ${this.name}  
         Class :- ${this.#class} 
      Username :- ${this.username} 
      Password :- ${this.password} 
      Created  :- ${this._createdDate} `)
  }





  showProfiles() {

    return `ID :- ${this.id} | Username:- ${this.username} | Name :- ${this.name} | Class:- ${this.#class} | Created:- ${this._createdDate} `;
  }





  static isUsernameExits(username) {

    let result;
    if (Student.Data.length) {
      Student.Data.forEach(student => {
        if (student.username == username) {

          result = true;
        }
        else { result = false }
      })

    } else result = false;
    return result
  }






  static getStudentById(id) {
    let result;
    Student.Data.forEach(student => {
      if (student.id == id) {
        result = student;
      }

    })

    return result;
  }

}

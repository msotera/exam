// JavaScript Document


//declaring a class named person
class Person {

//creating a constructor with 4 parameters
  constructor(name, age, gender, classes) {
    //this.name represents the instance variable within the constructor
    this.name;
    //this.age represents the instance variable while the age variable is a parameter that is in the scope of the function (constructor for this case)
    this.age = age;
    //this.gender represents the instance variable while the gender variable is a parameter that is in the scope of the function (constructor for this case)
    this.gender = gender;
    //this.interests represents the instance variable while the interests variable is a parameter that is in the scope of the function (constructor for this case)
    this.interests = interests;

  }


  //create a function called greeting that will display a message in the console
  greeting() {
    //display message "Hi! I'm" plus name stored in name variable
    console.log(`Hi! I'm ${this.name}`);

  };


//create a function called bye that will display a message in the console
  bye() {
    //display message with information stored in name plus "has left the building. Bye for now!"
    console.log(`${this.name.} has left the building. Bye for now!`);

  };

}




//instantiate two new instances of constructor Person in Person class
//let parth = name is Parth, his age is 20, he is male, and his interests are JavaScript, Java, and PHP
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
//let harmanpreet = name is Harmanpreet, his age is 22, he is male, his interests are JavaScript, C# and Relational DataBase
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);




//Teacher class extends Person class, meaning it inherits some of its properties
class Teacher extends Person {
  //create a constructor for class Person with 7 parameters, include new parameters(subject and grade) and inherited ones(name, last, age, gender, interests)
  constructor(name, last, age, gender, interests, subject, grade) {
    //inherit 4 parameters from extended classs(name, age, gender, interests)
    super(name, age, gender, interests);

    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;

  }

}
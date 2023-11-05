/*Object prototype chain and prototypal inheritance exercise.


Create a Person constructor that has three properties: name, job, and age.

Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".

Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".

Create a Programmer constructor 
that inherits all the members from Person with an additional 'languages' property that is passed in 
and a busy property that is NOT passed in and is set to true by default.


Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. 
Also, give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.


Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy
 and another if the programmer is not,
  e.g., should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.


Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.


Test it out - can you create different programmers and run all the methods on them?
 Does each programmer maintain their own properties properly and independently of the other programmers?
  Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add new methods or properties to incorporate the syntax.


*/


//person contructor
function person (name, job, age){
    this.name=name;
    this.job=job;
    this.age=age;
  }
  

person.prototype.exercise= function () {
  console.log("who loves Volleyball.");
};

person.prototype.exercise2= function () {
  console.log("who loves Swimming.");
};
person.prototype.exercise3= function () {
  console.log("who loves Horse back riding.");
};

person.prototype.fetchJob= function () {
  console.log(`${this.name} is a ${this.age} year old ${this.job},`);
};
//end person constructor(

//programmer constructor

function programmer(name, job, age, languages){
person.call(this, name, job, age);
this.languages=languages;
this.busy=true;}

programmer.prototype = Object.create(person.prototype);


programmer.prototype.completeTask=function(){
 this.busy = false;
}
programmer.prototype.acceptNewTask=function(){
  this.busy = true;
}

programmer.prototype.offerNewTask=function(){
  if (programmer.prototype.completeTask===true) {
    console.log(`Unfortunately, ${this.name} can't accept any new tasks right now.`);
  } 
  else {
    console.log(`${this.name} would love to take on a new responsibility.`);
  }
}


programmer.prototype.learnLanguage = function(language) {
  this.languages.push(language);
};

programmer.prototype.listLanguages = function() {
  console.log(`${this.name} knows the following languages: ${this.languages.join(', ')}`);
};

// practice
const chantel = new person ("Chantel", "Project Manager", 24 );
chantel.fetchJob();
chantel.exercise2();

const davis = new person ("Davis", "IT Consultant", 28 );
davis.fetchJob();
davis.exercise3();



const chastity = new programmer ("Chastity", "Software Engineer", 25, ["HTML", "CSS", "JavaScript"] );
chastity.fetchJob();
chastity.exercise();
chastity.offerNewTask();
chastity.learnLanguage();
chastity.listLanguages();




const jimmy = new programmer ("Jimmy", "Architect", 31, ["Project Managemnet", "Design", "Construction"],);
jimmy.fetchJob();
jimmy.exercise();
jimmy.offerNewTask();
jimmy.learnLanguage();
jimmy.listLanguages();



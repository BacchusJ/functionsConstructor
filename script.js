var daniel = {
    name: 'Felipe',
    yearOfBirth: 1982,
    job: 'Comcast Tech'
};

//this is the function CONSTRUCTOR - We are passing the variables (look at the parameters)
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
   
}
//adding inherritance 

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth)
}


//this is called instanciation because these are instances 
//the "new" operator creates and EMPTY OBJECT - EMPTY PERSON (see above)
var daniel = new Person('Felipe', 1982, 'Comcast Tech');

var jenny = new Person('Jennifer', 1990, 'Beauty Artist');

var eric = new Person('Eric', 1977, 'Web Developer');

//this will log the ages on the console. SOOO COOOOL!!!!!! =) 

daniel.calculateAge();
jenny.calculateAge();
eric.calculateAge();







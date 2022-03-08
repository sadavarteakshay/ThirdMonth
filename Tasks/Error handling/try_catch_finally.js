try {
    console.log("Start line of try");

    let name;

    console.log("End line of try");

}
catch (error) {
    console.log("I am Catch block");
}
finally {

    console.log("I am finally block");
}





console.log("\n-------------------------");
try {
    console.log("Start line of try");

    age; //ReferenceError: age is not defined

    console.log("End line of try");

}
catch (error) {
    console.log("I am Catch block");
    console.log("error.name    :- ", error.name);
    console.log("error.message :- ", error.message);
    console.log("error.stack   :- ", error.stack);

}

finally {
    console.log("I am finally block");
}

console.log("\n-----------After Catch  Block--------------");



console.log("\n-----------SyntaxError--------------");

try {
    eval('hoo bar');
}
catch (err) {
    console.log("err.name :-", err.name);
}


console.log("\n-----TypeError--------------");

try {

    let num = 10;
    num.toUpperCase();
}
catch (err) {
    console.log("err.name :-", err.name);
}


console.log("\n-----URIError --------------");

try {

    decodeURI("%%%"); 
}
catch (err) {
    console.log("err.name :-", err.name);
}


console.log("\n---------try...catch works synchronously----------");

/* try {
    console.log("setTimout in the try block" );
    setTimeout(function(){
        fun();
    },2000);

} catch (error) {
    console.log("I am catch setTimout in the try block" );
} */

setTimeout(function(){
    try {
        fun();
    } catch (error) {
        console.log("I am catch in setTimout" );
    }
    
},2000);
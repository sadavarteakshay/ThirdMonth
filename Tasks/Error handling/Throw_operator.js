function square(num){

    if(isNaN(num)) throw new Error("Not a Number !");

    return num*num;

}

try {  
    square("a");   
} 
catch (error) {
    console.log(error.name,error.message)
}



//2 Example
let json = '{ "name": "Akshay" }';  
try {
    
   // test; //ReferenceError

  user = JSON.parse(json);  

  if (!user.age) {
    throw new SyntaxError("Incomplete data: age is missing"); // (*)
}

  if (!user.name) {
    throw new SyntaxError("Incomplete data: name is missing"); // (*)
  }

   

} catch (err) {

    if(err instanceof SyntaxError) console.log( "JSON Error: " + err.message ); 

    else if(err instanceof ReferenceError) console.log( "Error: " + err.message ); 

    else throw err
}
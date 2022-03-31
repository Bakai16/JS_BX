// try {
//     greet();
// }catch (error){
//     console.log(error.name);
// }finally{
//     console.log("This is finally content");
// }

// console.log("heejfje");

// function greet(){
//     console.log("HElelofef");
// }

///>>>/????Practice 

const user = { name: "Asan" };

try {
    if(!user.email){
        // throw new SyntaxError("user does not have an email");
        throw new ReferenceError("user does not have an email");
    }
} catch(e){
    // console.log(e.message);
    console.log(e);
}

//expect output ---> eferenceError: user does not have an email
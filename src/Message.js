

// Two types of exports
// Named export
// ;

function Message(firstName, lastName, age ){
    age = age + 12;
    return firstName +" "+lastName+" is "+age;   
}

// Default export (should be the last statement on the file)
export default Message;



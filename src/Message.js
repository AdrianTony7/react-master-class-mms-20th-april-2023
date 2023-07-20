

// Two types of exports
// Named export
// ;

// We created function logic blue print 
const message = (firstName, lastName, age ) =>{

    const theAge = () =>{
        if(age > 0 && age < 12)
        {
            return "Baby";
        }
        else if(age > 12 && age < 18)
        {
            return "Teenager";
        }
        else if(age > 18 && age < 35)
        {
            return "Young Adult";
        }
        else if(age > 35)
        {
            return "Adult";
        }
        else
        {
            return "NOT SPECIFIED";
        }
    }
    return firstName+" "+lastName+" "+"is a "+theAge();
}

// Default export (should be the last statement on the file)
export default message;



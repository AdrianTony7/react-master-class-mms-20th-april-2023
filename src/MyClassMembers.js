import React from "react";

const MyClassMembers = () =>{

    let classMembers = 
    [
        "aaaa1", "aaaa2", "aaaa3", "aaaa4", "aaaa5",
        "aaaa6", "aaaa7", "aaaa8", "aaaa9", "aaaa10" 
    ];

    const myMap = classMembers.map((member) => <p>{member}</p>);

    return myMap;
}

export default MyClassMembers;
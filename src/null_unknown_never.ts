const searchName=(value:string|null)=>{
    if(value===null){
        console.log("there is nothing to search!");
    }else{
        console.log("Searching.....");
    }
}

searchName(null);


// kmh^-1 to ms^-1;
const getMyCarSpeed=(speed:unknown)=>{
    if(typeof speed==="number"){
        console.log(`My speed is ${speed*1000/3600}`);
    }else if(typeof speed==="string"){
        const [value,unit]=speed.split(" ");
        const convertedValue=parseFloat(value)*1000/3600;
        console.log(`My speed is ${convertedValue}`);
    }else{
        console.log("there is wrong type!")
    }
}

getMyCarSpeed(10);
getMyCarSpeed("10 kmh^-1")

function throwError(message:string):never{
    throw new Error(message);
}

throwError("Error Hoyeche");

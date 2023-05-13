// object

const car:{
    type:string,
    model:string,
    year:number
}={
    type:"Toyota",
    model:"Corolla",
    year:2009
}

//literal types

const car2:{
    type:'Toyota',
    model:string,
    year:number
}={
    type:"Toyota",
    model:"Corolla",
    year:2009
}


// optional types
const car3:{
    type:string,
    model:string,
    year?:number
}={
    type:"Toyota",
    model:"Corolla",
}

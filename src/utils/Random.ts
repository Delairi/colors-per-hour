interface randomInterface{
    min:number,
    max:number
}

export function getRandom({min,max}:randomInterface){
    return Math.floor(Math.random()*(max-min)+min)
}
export const ArrEqualToZero = ({_arr}:{_arr:string[]})  => _arr.length == 0 ? true:false

export const ArrExced = ({_arr}:{_arr:string[]})  => _arr.length>24 ? true:false

export const ArrInsuficent = ({_arr,_random}:{_arr:string[],_random:boolean})  => (_arr.length <24 && !_random ? true:false)



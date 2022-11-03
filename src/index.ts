import { ArrEqualToZero, ArrExced, ArrInsuficent } from "./utils/constants";
import { Hour } from "./utils/Hour";
import { getRandom } from "./utils/Random";


interface comprobationInterface{
  _random:boolean;
  _arr:string[];
}

const getColor = ({_random,_arr}:comprobationInterface) =>{
  const _hour = Hour()
  
  if(ArrEqualToZero({_arr})) return "Length > 0"

  if(ArrExced({_arr}) ) return "Length <= 24"

  if(ArrInsuficent({_arr,_random})) return "Length == 24 if its not random"
  
  if(_random) return _arr[getRandom({min:0,max:_arr.length})]

  if(!_random) return _arr[_hour]

}


export default getColor
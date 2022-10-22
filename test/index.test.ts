import { Comprobation} from '../src/index';
import { colors } from './colors';
import {Hour} from '../src/utils/Hour'
describe('Comprobation', () => {
  it('What color', () => {
    expect(Comprobation({_random:false,_arr:colors})).toEqual("#85FFC7");
  });
});

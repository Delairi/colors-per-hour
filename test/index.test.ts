import getColor from '../src/index';
import {colors} from '../src/utils/Colors';

describe('Comprobation', () => {
  it('What color', () => {
    expect(getColor({_random:false,_arr:colors})).toEqual("#e9ecef");
  });
});

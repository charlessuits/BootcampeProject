
import { ALLROOMS, ALLDIS } from '../shared/rooms';
import { ALLITEMS} from '../shared/items';
import {ALLSKILLS} from '../shared/skills';
import {ALLCERTIFICATES} from '../shared/certification';
import {COVERS} from '../shared/covers';

export const initialState = {
   
    allrooms: ALLROOMS,
    allitems: ALLITEMS,
    alldis: ALLDIS,
    allskills: ALLSKILLS,
    allcerts: ALLCERTIFICATES,
    covers: COVERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};
import { PersonState } from './person.reducers';

export const getPersons = (state: PersonState) => state.personByIds.map(id => state.personHash[id]);

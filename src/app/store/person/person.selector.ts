import { AppState } from '..';

export const getPersons = () => (state: AppState) => state.person.personByIds.map(id => state.person.personHash[id]);

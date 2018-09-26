import { Person } from '../../models/person.type';

export const ADD_PERSON = '[ person ] add person';

export class AddPerson {
    type = ADD_PERSON;
    constructor(public person: Person) {}
}

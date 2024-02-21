import { atom, map } from 'nanostores';
import { type RegistrationNumber } from '../models/Models'; 

export const $registration = atom<RegistrationNumber>('');


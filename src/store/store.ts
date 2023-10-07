import { atom } from 'nanostores';

type SectionName = 'home' | 'about' | 'contact';

//  const $isOpen = atom(true);

export const $section = atom<SectionName>('home');

export const changeSection = (name: SectionName) => {
  $section.set(name);
};
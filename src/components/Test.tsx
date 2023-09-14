import { useStore } from '@nanostores/react'

import { $isOpen } from '../store/store';

export const Test = () => {
  const open = useStore($isOpen);
  console.log('dickhead',open);
  return <div>Hello {open}</div>
}
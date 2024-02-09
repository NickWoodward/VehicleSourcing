import { Turnstile } from '@marsidev/react-turnstile';
import type { ComponentProps } from 'react';
import type { TurnstileInstance } from '@marsidev/react-turnstile'
interface Props {
  turnstileRef: TurnstileInstance,
}

export const TurnstileWidget = (props: Props) => {
    return <Turnstile ref={props.turnstileRef} siteKey='1x00000000000000000000AA' />;
};
import './Component1.module.css';

import { IShared } from 'nx-pcf/shared';

/* eslint-disable-next-line */
export interface Component1Props extends IShared {}

export function Component1(props: Component1Props) {
  return (
    <div>
      <h1>Welcome to Component1!</h1>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Component1;

import {useHover} from 'ahooks';
import {ReactNode, useRef, useState} from 'react';
import {Button} from "antd";

const Counter = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <Button onClick={()=>setState(v=>v+1)}>+ {state}</Button>
    </div>
  );
};

const Index = () => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>
  const isHovering = useHover(ref);
  console.log("isHovering", isHovering)

  const Action = ({children}: { children: ReactNode}) => (
    <div>
      {children}
    </div>
  );

  return (
    <div ref={ref}>
      <Action>
        <Counter />
      </Action>
    </div>
  );
};
export default Index;

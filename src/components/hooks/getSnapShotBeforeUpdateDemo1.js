import { useEffect, useRef, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  
  useEffect(() => {
    prevCountRef.current = count;
    console.log('useeffect')
  });
  const prevCount = prevCountRef.current;
  return (
    <h1>
      Now: {count}, before: {prevCount}
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </h1>
  );
}

import { useEffect, useState } from "react";

/**
 * @returns {[Dispatch<any>,boolean]} [Dispatch<any>,boolean]
 */
export default function useElementObserver(options) {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref) observer.observe(ref);

    //use callback cleanup function
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options]);

  return [setRef, visible];
}

//usage
// const[setRef,visible] = useElementObserver({threshold:0.6})
{
  /* <div ref ={setRef} style={{height:"100vh",backgroundColor:visible ? "#ccc": "#fff"}}>
    {
        visible && <h1>Hi i can see you now :D</h1>
    }
</div> */
}

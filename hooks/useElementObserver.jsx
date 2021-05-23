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
      //append class to <nav <li (need switch to read entry.target.id so i know wich <li to target)
      if (entry.isIntersecting) setNavClass(entry.target.id);
    }, options);

    if (ref) observer.observe(ref);

    //use callback cleanup function
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options]);

  return [setRef, visible];
}

//helper
function setNavClass(id) {
  switch (id) {
    case "section1":
      document.getElementById("nav_1").classList.add("nav-item");
      break;
    case "section2":
      document.getElementById("nav_2").classList.add("nav-item");
      break;
    default:
      break;
  }
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

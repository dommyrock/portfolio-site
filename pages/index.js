import Accordion from "../components/shared/Accordian";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVuejs, faReact, faJsSquare, faAws, faTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { useState, createRef } from "react";
import useElementObserver from "../hooks/useElementObserver";
import SocialsContainer from "../components/SocialsContainer";
import AnimatedDivContainer from "../components/AnimatedDivContainer";
import AnimatedIcon from "../components/AnimatedIcon";

//https://fontawesome.com/icons?d=gallery&p=2&s=brands&m=free
//icons react docs https://fontawesome.com/how-to-use/on-the-web/using-with/react

//OTHER gql,cloud provider svfs here
//https://www.vectorlogo.zone/logos/microsoft_azure/index.html
//https://www.vectorlogo.zone/logos/dotnet/index.html
//https://www.vectorlogo.zone/logos/graphql/index.html
//https://www.vectorlogo.zone/logos/golang/index.html
//https://www.vectorlogo.zone/logos/slack/index.html
//FOward abcd refs to https://stackoverflow.com/questions/53561913/react-forwarding-multiple-refs
//https://reactjs.org/docs/hooks-reference.html#useimperativehandle better solution thaan above link

export default function Home() {
  //SECTION REFS
  const [[a, b, c, d]] = useState(() => [...Array(4)].map(createRef));
  //ALSO SECTION REFS
  const [setRef, visible] = useElementObserver({ threshold: 0.2 }); ///TODO REMOVE A B C D REFS , AND RETURN THEM FROM USE-ELEMENT OBSERVER (OR FOWARD REF FROM LIST<DIV> THAT CONTAIN ACCORDION DATA)
  const [setRef2, visible2] = useElementObserver({ threshold: 0.2 });

  function handleNavClick(key) {
    switch (key) {
      case "a":
        a.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "b":
        b.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "c":
        c.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "d":
        d.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }

  return (
    <div className="home-container">
      <div id="socials_container">
        <SocialsContainer />
      </div>
      <div id="accordion_container" className="accordion-container">
        <section ref={a}>
          {/*Default image placeholxer if none is passed */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10rem"
            color="#6997ff94"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <Accordion>
            <p className="unselectable">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at augue laoreet, eleifend turpis a,
              tincidunt velit. Curabitur vitae felis sit amet arcu blandit pellentesque quis vitae odio. Aenean pharetra
              eu felis non suscipit. Etiam fermentum enim sit amet magna scelerisque, eu mattis ligula tristique.
              Aliquam sed cursus odio, sit amet condimentum eros. Proin molestie commodo urna, eget accumsan tellus
              laoreet ut. Morbi id est eu lorem tempor cursus. Aenean vitae ultrices sem. Phasellus venenatis velit in
              ultrices interdum. Cras semper, justo a maximus iaculis, nisl metus luctus nisl, ac sodales odio mauris et
              ante. Donec ipsum est, auctor a lorem ac, rutrum elementum magna.
            </p>
          </Accordion>
          <span>
            <h4 style={{ margin: 0, color: "var(--arcticBlue)" }}>Tech stack</h4>
            <Accordion isStackItem={true}>
              <FontAwesomeIcon icon={faVuejs} size="2x" color="#179c23" />
              <FontAwesomeIcon icon={faReact} size="2x" color="#4b8bced6" spin />
              <FontAwesomeIcon icon={faJsSquare} size="2x" color="#f2e018" />
              <FontAwesomeIcon icon={faAws} size="2x" color="#f28c18" />
              <FontAwesomeIcon icon={faVuejs} size="2x" color="#179c23" />
              <FontAwesomeIcon icon={faReact} size="2x" color="#4b8bced6" spin />
              <FontAwesomeIcon icon={faJsSquare} size="2x" color="#f2e018" />
              <FontAwesomeIcon icon={faAws} size="2x" color="#f28c18" />
            </Accordion>
          </span>
        </section>
        <section ref={b}>
          <div>
            <Image src="/icons/1.png" alt="project preview" layout="fixed" width={300} height={200} />
          </div>
          <Accordion>
            <div>
              •Fixed business critical bug where there were 2x async workloads triggered by same event trying to update
              current and related entities with race conditions. [2.2021.]
              <br />
              <div style={{ textAlign: "center", borderBottom: "3px solid #cccccc7d" }}>Detais</div> Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Morbi at augue laoreet, eleifend turpis a, tincidunt velit.
              Curabitur vitae felis sit amet arcu blandit pellentesque quis vitae odio. Aenean pharetra eu felis non
              suscipit. Etiam fermentum enim sit amet magna scelerisque, eu mattis ligula tristique. Aliquam sed cursus
              odio, sit amet condimentum eros. Proin molestie commodo urna, eget accumsan tellus laoreet ut. Morbi id
              est eu lorem tempor cursus. Aenean vitae ultrices sem. Phasellus venenatis velit in ultrices interdum.
              Cras semper, justo a maximus iaculis, nisl metus luctus nisl, ac sodales odio mauris et ante. Donec ipsum
              est, auctor a lorem ac, rutrum elementum magna.
            </div>
          </Accordion>
        </section>
        <section id="section1" ref={setRef}>
          <AnimatedDivContainer />
        </section>
        <section id="section2" ref={setRef2}>
          <AnimatedDivContainer />
        </section>
      </div>
      <aside id="navAside">
        <nav className="nav-section">
          <ul id="sideNav">
            {/* <li id="nav_1" style={liVisibility} className={visible ? "nav-item" : ""> IF I WANT TO RE ADD ITEM*/}
            <li id="nav_1">
              <span>
                <AnimatedIcon isVisible={visible} />
                <a href="#algorithms_TC" onClick={() => handleNavClick("a")}>
                  Algorithms time complexity
                </a>
              </span>
            </li>
            <li id="nav_2">
              <span>
                <AnimatedIcon isVisible={visible2} />

                <a href="#data_structures_big-o" onClick={() => handleNavClick("b")}>
                  Data structures Big-O
                </a>
              </span>
            </li>
            <li id="nav_3">
              <span>
                <a href="#array_operations_tc" onClick={() => handleNavClick("c")}>
                  Array operations TC
                </a>
              </span>
            </li>
            <li id="nav_4">
              <span>
                <a href="#big_o_notation" onClick={() => handleNavClick("d")}>
                  Big O notation
                </a>
              </span>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

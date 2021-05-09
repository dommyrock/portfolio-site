import Accordion from "../components/shared/Accordian";
import LinkedinEmbed from "../components/shared/LinkedinEmbed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVuejs, faReact, faJsSquare, faAws, faTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { useState, createRef } from "react";
import useElementObserver from "../hooks/useElementObserver";

//https://fontawesome.com/icons?d=gallery&p=2&s=brands&m=free
//icons react docs https://fontawesome.com/how-to-use/on-the-web/using-with/react

export default function Home() {
  //From sidenav i call scroll on <section> refs, I'm also observing those same refs for when to show (remove hidden attr)side nav items
  const [[a, b, c, d]] = useState(() => [...Array(4)].map(createRef));
  //new
  const [setRef, visible] = useElementObserver({ threshold: 0.2 });
  //TODO: this hooks works , integrate it somehow so i track each <section ref and render nav item to screen
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
      {/* <LinkedinEmbed /> Has some css leaks into global css   (solution is shadow dom)*/}
      <div>
        <section className="accordion-container" ref={a}>
          <div>
            <Image src="/icons/1.png" alt="project preview" layout="fixed" width={300} height={200} />
          </div>
          <Accordion>
            <p>
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
            <h4 style={{ margin: 0 }}>Tech stack</h4>
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
        <div className="accordion-container" ref={b}>
          <div>
            <Image src="/icons/1.png" alt="project preview" layout="fixed" width={300} height={200} />
          </div>
          <Accordion>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at augue laoreet, eleifend turpis a,
              tincidunt velit. Curabitur vitae felis sit amet arcu blandit pellentesque quis vitae odio. Aenean pharetra
              eu felis non suscipit. Etiam fermentum enim sit amet magna scelerisque, eu mattis ligula tristique.
              Aliquam sed cursus odio, sit amet condimentum eros. Proin molestie commodo urna, eget accumsan tellus
              laoreet ut. Morbi id est eu lorem tempor cursus. Aenean vitae ultrices sem. Phasellus venenatis velit in
              ultrices interdum. Cras semper, justo a maximus iaculis, nisl metus luctus nisl, ac sodales odio mauris et
              ante. Donec ipsum est, auctor a lorem ac, rutrum elementum magna.
            </p>
          </Accordion>
        </div>
        {/* TEST ONLY */}
        <section className="accordion-container">
          <div>
            <Image src="/icons/1.png" alt="project preview" layout="fixed" width={300} height={200} />
          </div>
          <Accordion>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at augue laoreet, eleifend turpis a,
              tincidunt velit. Curabitur vitae felis sit amet arcu blandit pellentesque quis vitae odio. Aenean pharetra
              eu felis non suscipit. Etiam fermentum enim sit amet magna scelerisque, eu mattis ligula tristique.
              Aliquam sed cursus odio, sit amet condimentum eros. Proin molestie commodo urna, eget accumsan tellus
              laoreet ut. Morbi id est eu lorem tempor cursus. Aenean vitae ultrices sem. Phasellus venenatis velit in
              ultrices interdum. Cras semper, justo a maximus iaculis, nisl metus luctus nisl, ac sodales odio mauris et
              ante. Donec ipsum est, auctor a lorem ac, rutrum elementum magna.
            </p>
          </Accordion>
        </section>
        <div className="accordion-container" ref={c}>
          <div>
            <Image src="/icons/1.png" alt="project preview" layout="fixed" width={300} height={200} />
          </div>
          <Accordion>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at augue laoreet, eleifend turpis a,
              tincidunt velit. Curabitur vitae felis sit amet arcu blandit pellentesque quis vitae odio. Aenean pharetra
              eu felis non suscipit. Etiam fermentum enim sit amet magna scelerisque, eu mattis ligula tristique.
              Aliquam sed cursus odio, sit amet condimentum eros. Proin molestie commodo urna, eget accumsan tellus
              laoreet ut. Morbi id est eu lorem tempor cursus. Aenean vitae ultrices sem. Phasellus venenatis velit in
              ultrices interdum. Cras semper, justo a maximus iaculis, nisl metus luctus nisl, ac sodales odio mauris et
              ante. Donec ipsum est, auctor a lorem ac, rutrum elementum magna.
            </p>
          </Accordion>
        </div>
        <div className="accordion-container" ref={d}>
          <div>
            <Image src="/icons/1.png" alt="project preview" layout="fixed" width={300} height={200} />
          </div>
          <Accordion>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at augue laoreet, eleifend turpis a,
              tincidunt velit. Curabitur vitae felis sit amet arcu blandit pellentesque quis vitae odio. Aenean pharetra
              eu felis non suscipit. Etiam fermentum enim sit amet magna scelerisque, eu mattis ligula tristique.
              Aliquam sed cursus odio, sit amet condimentum eros. Proin molestie commodo urna, eget accumsan tellus
              laoreet ut. Morbi id est eu lorem tempor cursus. Aenean vitae ultrices sem. Phasellus venenatis velit in
              ultrices interdum. Cras semper, justo a maximus iaculis, nisl metus luctus nisl, ac sodales odio mauris et
              ante. Donec ipsum est, auctor a lorem ac, rutrum elementum magna.
            </p>
          </Accordion>
        </div>
        <div className="accordion-container">
          <div>
            <Image src="/icons/1.png" alt="project preview" layout="fixed" width={300} height={200} />
          </div>
          <Accordion>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at augue laoreet, eleifend turpis a,
              tincidunt velit. Curabitur vitae felis sit amet arcu blandit pellentesque quis vitae odio. Aenean pharetra
              eu felis non suscipit. Etiam fermentum enim sit amet magna scelerisque, eu mattis ligula tristique.
              Aliquam sed cursus odio, sit amet condimentum eros. Proin molestie commodo urna, eget accumsan tellus
              laoreet ut. Morbi id est eu lorem tempor cursus. Aenean vitae ultrices sem. Phasellus venenatis velit in
              ultrices interdum. Cras semper, justo a maximus iaculis, nisl metus luctus nisl, ac sodales odio mauris et
              ante. Donec ipsum est, auctor a lorem ac, rutrum elementum magna.
            </p>
          </Accordion>
        </div>
        <div className="accordion-container">
          <div>
            <Image src="/icons/1.png" alt="project preview" layout="fixed" width={300} height={200} />
          </div>
          <Accordion>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at augue laoreet, eleifend turpis a,
              tincidunt velit. Curabitur vitae felis sit amet arcu blandit pellentesque quis vitae odio. Aenean pharetra
              eu felis non suscipit. Etiam fermentum enim sit amet magna scelerisque, eu mattis ligula tristique.
              Aliquam sed cursus odio, sit amet condimentum eros. Proin molestie commodo urna, eget accumsan tellus
              laoreet ut. Morbi id est eu lorem tempor cursus. Aenean vitae ultrices sem. Phasellus venenatis velit in
              ultrices interdum. Cras semper, justo a maximus iaculis, nisl metus luctus nisl, ac sodales odio mauris et
              ante. Donec ipsum est, auctor a lorem ac, rutrum elementum magna.
            </p>
          </Accordion>
        </div>
        <section className="accordion-container">
          <div>
            <Image src="/icons/1.png" alt="project preview" layout="fixed" width={300} height={200} />
          </div>
          <Accordion>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at augue laoreet, eleifend turpis a,
              tincidunt velit. Curabitur vitae felis sit amet arcu blandit pellentesque quis vitae odio. Aenean pharetra
              eu felis non suscipit. Etiam fermentum enim sit amet magna scelerisque, eu mattis ligula tristique.
              Aliquam sed cursus odio, sit amet condimentum eros. Proin molestie commodo urna, eget accumsan tellus
              laoreet ut. Morbi id est eu lorem tempor cursus. Aenean vitae ultrices sem. Phasellus venenatis velit in
              ultrices interdum. Cras semper, justo a maximus iaculis, nisl metus luctus nisl, ac sodales odio mauris et
              ante. Donec ipsum est, auctor a lorem ac, rutrum elementum magna.
            </p>
          </Accordion>
        </section>
        <section className="accordion-container" ref={setRef}>
          <div>
            <Image src="/icons/1.png" alt="project preview" layout="fixed" width={300} height={200} />
          </div>
          <Accordion>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at augue laoreet, eleifend turpis a,
              tincidunt velit. Curabitur vitae felis sit amet arcu blandit pellentesque quis vitae odio. Aenean pharetra
              eu felis non suscipit. Etiam fermentum enim sit amet magna scelerisque, eu mattis ligula tristique.
              Aliquam sed cursus odio, sit amet condimentum eros. Proin molestie commodo urna, eget accumsan tellus
              laoreet ut. Morbi id est eu lorem tempor cursus. Aenean vitae ultrices sem. Phasellus venenatis velit in
              ultrices interdum. Cras semper, justo a maximus iaculis, nisl metus luctus nisl, ac sodales odio mauris et
              ante. Donec ipsum est, auctor a lorem ac, rutrum elementum magna.
            </p>
          </Accordion>
        </section>
      </div>
      <aside>
        <nav className="nav-section">
          <ul>
            <li id="nav_1" style={liVisibility} className={visible ? "nav-item" : ""}>
              <span>
                <a href="#algorithms_TC" onClick={() => handleNavClick("a")}>
                  Algorithms time complexity
                </a>
              </span>
            </li>
            <li id="nav_2" style={liVisibility}>
              <span>
                <a href="#data_structures_big-o" onClick={() => handleNavClick("b")}>
                  Data structures Big-O
                </a>
              </span>
            </li>
            <li id="nav_3" style={liVisibility}>
              <span>
                <a href="#array_operations_tc" onClick={() => handleNavClick("c")}>
                  Array operations TC
                </a>
              </span>
            </li>
            <li id="nav_4" style={liVisibility}>
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

const liVisibility = {
  visibility: "hidden",
};

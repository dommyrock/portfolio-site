import Accordion from "../components/shared/Accordian";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVuejs, faReact, faJsSquare, faAws, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { useState, createRef } from "react";
import useElementObserver from "../hooks/useElementObserver";
import SocialsContainer from "../components/SocialsContainer";
import AnimatedDivContainer from "../components/AnimatedDivContainer";
import AnimatedIcon from "../components/AnimatedIcon";
import { dotmetricsData, combisData } from "../data";
import CompanyHeader from "../components/CompanyHeader";
import { Azure, Go, Graphql, Slack, Typescript } from "../components/svgs/svgSheet";

//https://fontawesome.com/icons?d=gallery&p=2&s=brands&m=free
//icons react docs https://fontawesome.com/how-to-use/on-the-web/using-with/react

//OTHER gql,cloud provider svfs here
//FOward abcd refs to https://stackoverflow.com/questions/53561913/react-forwarding-multiple-refs
//https://reactjs.org/docs/hooks-reference.html#useimperativehandle better solution thaan above link

//TODO
/* 
0 render in allsections immediately so usr can auto skip, only track icon animation show hide ,image on left static + about, indcate popout box is clickable
1 group smaller refactors , projects into since row 
2 extract stack items into separate component where i map stac items to icons,svg,imgs list 

*/
export default function Home() {
  //SECTION REFS
  const [[about, cmbs, dotm, personalProj]] = useState(() => [...Array(4)].map(createRef));
  //ALSO SECTION REFS
  const [setRef, visible] = useElementObserver({ threshold: 0.2 });
  const [setRef2, visible2] = useElementObserver({ threshold: 0.2 });

  function handleNavClick(key) {
    switch (key) {
      case "about":
        about.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "cmbs":
        cmbs.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "dotm":
        dotm.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "personalProj":
        personalProj.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }
  function createAcordionChild(stackItem) {
    const item = stackItem;
    switch (stackItem) {
      case "js":
        return <FontAwesomeIcon icon={faJsSquare} title="javascript" size="2x" color="#f2e018" />;
      case "react":
        return <FontAwesomeIcon icon={faReact} title="react.js" size="2x" color="#4b8bced6" spin />;
      case "vue":
        return <FontAwesomeIcon icon={faVuejs} title="vue.js" size="2x" color="#179c23" />;
      case "aws":
        return <FontAwesomeIcon icon={faAws} title="amazon web services" size="2x" color="#f28c18" />;
      case "html":
        return <FontAwesomeIcon icon={faHtml5} title="html5" size="2x" color="#f28c18" />;
      case "css":
        return <FontAwesomeIcon icon={faCss3} title="css3" size="2x" color="#f28c18" />;
      case "azure":
        return <Azure />;
      case "go":
        return <Go />;
      case "typescript":
        return <Typescript />;
      case "graphql":
        return <Graphql />;
      default:
        return <h3 id="acordionstack-items">{stackItem}</h3>;
    }
  }
  const filterProjectSrc = (key) => {
    switch (key) {
      case "teams":
        return <div class="ms-BrandIcon--icon96 ms-BrandIcon--teams"></div>;
      case "sharepoint":
        return <div class="ms-BrandIcon--icon96 ms-BrandIcon--sharepoint"></div>;
      case "ticket":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#6997ff"
            width="96px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
            />
          </svg>
        );
      default:
        break;
    }
  };

  return (
    <div className="home-container">
      <div id="socials_container">
        <SocialsContainer />
      </div>
      <div id="accordion_container" className="accordion-container unselectable">
        {/* Render /animate in text for this section , tan render workd data dynamicaly from data.js file*/}
        <section ref={about} id="about-me"></section>
        <CompanyHeader ref={cmbs} {...combisData} />
        <section id="combis">
          {combisData.projects.map((x) => (
            <>
              <div>
                {x.src ? (
                  filterProjectSrc(x.src)
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="96px"
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
                )}
              </div>
              <Accordion>
                <div>
                  {x.text}
                  {x.details && (
                    <>
                      <br /> <div style={{ textAlign: "center", borderBottom: "3px solid #cccccc7d" }}>Detais</div>
                      {x.details}
                    </>
                  )}
                </div>
              </Accordion>
              <span>
                <h4 style={{ margin: 0, color: "var(--bg-color)" }}>{x.date}</h4>
                <h4 style={{ margin: 0, color: "var(--arcticBlue)" }}>Tech stack</h4>
                <Accordion stackItems={x.stack} isStackItem={true}>
                  {x.stack.map((x) => createAcordionChild(x))}
                </Accordion>
              </span>
            </>
          ))}
        </section>
        <CompanyHeader ref={dotm} {...dotmetricsData} />
        <section id="dotmetrics">
          {dotmetricsData.projects.map((x) => (
            <>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96px"
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
              </div>
              <Accordion>
                <div>
                  {x.text}
                  <br /> <div style={{ textAlign: "center", borderBottom: "3px solid #cccccc7d" }}>Detais</div>
                  {x.details}
                </div>
              </Accordion>
            </>
          ))}
        </section>
        <section id="section1" ref={setRef}>
          <AnimatedDivContainer />
        </section>
        <section id="section2" ref={setRef2}>
          <AnimatedDivContainer />
        </section>
        <section id="my-intrests"></section>
        <section id="how-i-learn"></section>
      </div>
      <aside id="navAside">
        <nav className="nav-section">
          <ul id="sideNav">
            {/* <li id="nav_1" style={liVisibility} className={visible ? "nav-item" : ""> IF I WANT TO RE ADD ITEM*/}
            <li id="nav_1">
              <span>
                <AnimatedIcon isVisible={visible} />
                <a href="#about" onClick={() => handleNavClick("about")}>
                  About me
                </a>
              </span>
            </li>
            <li id="nav_2">
              <span>
                <AnimatedIcon isVisible={visible2} />
                <a href="#cmbs-experience" onClick={() => handleNavClick("cmbs")}>
                  Combis experience
                </a>
              </span>
            </li>
            <li id="nav_3">
              <span>
                <a href="#dotm-experience" onClick={() => handleNavClick("dotm")}>
                  Dotmetrics experience
                </a>
              </span>
            </li>
            <li id="nav_4">
              <span>
                <a href="#personal-projects" onClick={() => handleNavClick("personalProj")}>
                  Personal projects
                </a>
              </span>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

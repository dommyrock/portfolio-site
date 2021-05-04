import Accordion from "../components/shared/Accordian";
import LinkedinEmbed from "../components/shared/LinkedinEmbed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVuejs, faReact, faJsSquare, faAws, faTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

//https://fontawesome.com/icons?d=gallery&p=2&s=brands&m=free
//icons react docs https://fontawesome.com/how-to-use/on-the-web/using-with/react
export default function Home() {
  return (
    <div>
      <main className="main-container">
        {/* <LinkedinEmbed /> Has some css leaks into global css  */}

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
      </main>

      <footer>
        <h1>HI this is footer</h1>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a> */}
      </footer>
    </div>
  );
}

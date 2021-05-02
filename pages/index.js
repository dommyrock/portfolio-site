import Accordion from "../components/shared/Accordian";
import LinkedinEmbed from "../components/shared/LinkedinEmbed";

export default function Home() {
  return (
    <div>
      <main>
        {/* <LinkedinEmbed /> Has some css leaks into global css  */}
        <Accordion />
      </main>

      <footer>
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

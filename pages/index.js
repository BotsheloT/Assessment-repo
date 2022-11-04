import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  //Dark Mode Constant
  const[darkMode, setDarkMode] = useState(false);

  // Functions for changing accordion item states
  // const toggleHidden = e =>{
  //   e.preventDefault();
  //   const elem = document.getElementById('accordion-1');
  //   elem.classList.toggle("hidden");
  // }

  // const toggleHidden2 = e =>{
  //   e.preventDefault();
  //   const elem = document.getElementById('accordion-2');
  //   elem.classList.toggle("hidden");
  // }

  // const toggleHidden3 = e =>{
  //   e.preventDefault();
  //   const elem = document.getElementById('accordion-3');
  //   elem.classList.toggle("hidden");
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>BotsheloT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      </main>
      
    </div>
  )
}

import { useState, useEffect } from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [description, setDescription] = useState('Make Azuki Great Again!');
  const [title, setTitle] = useState('Welcome to Azuki Crush');
  const [showDescription, setShowDescription] = useState(true);
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowDescription(false);
      setShowTitle(false);
      setTimeout(() => {
        setDescription(prevDescription => prevDescription === 'Make Azuki Great Again!' ? 'STAND TOGETHER, AZUKI HOLDERS!' : 'Make Azuki Great Again!');
        setTitle(prevTitle => prevTitle === 'Welcome to Azuki Crush' ? 'A Match-3 Game to MOCK Azuki' : 'Welcome to Azuki Crush');
        setShowDescription(true);
        setShowTitle(true);
      }, 500); // Wait for the fade out animation to finish
    }, 2500); // Change every 3 seconds

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
    <video
      autoPlay
      loop
      muted
      className="absolute z-10 w-full h-full object-cover"
      src="https://yummy-ninja.oss-us-east-1.aliyuncs.com/videos/testing.mp4"
    >
      <source src="https://yummy-ninja.oss-us-east-1.aliyuncs.com/videos/testing.mp4" type="video/mp4" />
    </video>
    <div className="absolute z-20 w-full h-full bg-black opacity-80"></div>
    <div className="relative z-30">
    <header className="flex justify-between items-center p-5 text-white">
        <img src="logo.png" alt="Logo" className="h-10 w-auto" />
        <div className="flex items-center space-x-4">
        <a href="https://twitter.com/AzukiCrush" target="_blank" rel="noopener noreferrer">
          <button>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" className="h-6 w-6 inline-block align-text-top" />
          </button>
        </a>
          <a href="https://t.me/AzukiCrush" target="_blank" rel="noopener noreferrer">
            <button>
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="h-6 w-6 inline-block align-text-top" />
            </button>
          </a>
            <div>
                <ConnectWallet />
            </div>
        </div>
    </header>
    <main className={styles.main}>
        <h1 className={`${styles.title} fade ${showTitle? 'show' : ''}`}>{title}</h1>
        <p className={`${styles.description} fade ${showDescription ? 'show' : ''}`}>{description}</p>
        <div className={styles.grid}>
          <a href="https://testing.azukicrush.com/" className={styles.card}>
            <h2>Play Game &rarr;</h2>
            <p>
              A Match-3 Game Based on The Azuki Theme 
            </p>
          </a>

          <a href="https://testing.azukicrush.com/" className={styles.card}>
            <h2>Petition &rarr;</h2>
            <p>
              Unite Azuki Advocates to Stand Against Elementals
            </p>
          </a>
          <a
            href="https://testing.azukicrush.com/"
            className={styles.card}
          >
            <h2>Claim $AZUKI</h2>
            <p>
              Unite to keep pressure on the Azuki Team to do the right thing
            </p>
          </a>
        </div>

        <section className={`${styles.section} mt-20 text-center`}>

          <p>Azuki Crush, a Match-3 game based on the Azuki theme, was built by a group of Azuki advocates and long-term Azuki holders to express their anger towards Azuki's recent actions.</p>
          <p>We hope that all Azuki advocates can unite to put pressure on Azuki and petition for a redesign of Elements Collection</p>
        </section>
      </main>
      
    </div>
  </div>
  );
}

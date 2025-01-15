import React from 'react';
import useMeteo from '../../../infrastructure/hooks/useMeteo';
import styles from './taskbar.module.scss';

import { IoChevronUp } from "react-icons/io5";
import { BiWifi } from 'react-icons/bi';
import { IoMdVolumeHigh } from 'react-icons/io';
import { IoBatteryHalf } from "react-icons/io5";

import WindowsLogo from '../../../assets/img/windows-logo.webp';
import Sun from '../../../assets/img/sun.png';
import Cloud from '../../../assets/img/cloud.png';
import Folder from '../../../assets/img/folder.png';
import Chrome from '../../../assets/img/chrome.png';
import LinkedIn from '../../../assets/img/linkedin.png';
import GitHub from '../../../assets/img/github.png';
import Mail from '../../../assets/img/mail.png';

const Taskbar: React.FC = () => {
  const currentTime = new Date().toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const currentDate = new Date().toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const { meteoData, loading } = useMeteo();

  return (
    <div className={styles.taskbar}>
      <div className={styles.leftSection}>
        {!loading && meteoData && (
          <button className={styles.meteo}>
            {meteoData.condition === 'Ensoleillé' ?
              <img src={Sun} alt="Sun" className={styles.sun} />
            :
              <img src={Cloud} alt="Cloud" className={styles.cloud} />
            }
            <div className={styles.meteoInfo}>
              <span>{meteoData.temperature}°C</span>
              <span>{meteoData.condition}</span>
            </div>
          </button>
        )}
      </div>

      <div className={styles.centerSection}>
        <button className={styles.startButton}>
          <img src={WindowsLogo} alt="Windows Logo" className={styles.windowsLogo} />
        </button>
        <button className={styles.folderButton}>
          <img src={Folder} alt="Folder" className={styles.folder} />
        </button>
        <button className={styles.chromeButton}>
          <img src={Chrome} alt="Chrome" className={styles.chrome} />
        </button>
        <button className={styles.linkedinButton}>
          <img src={LinkedIn} alt="LinkedIn" className={styles.linkedin} />
        </button>
        <button className={styles.githubButton}>
          <img src={GitHub} alt="GitHub" className={styles.github} />
        </button>
        <button className={styles.mailButton}>
          <img src={Mail} alt="Mail" className={styles.mail} />
        </button>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.systemTray}>
          <button>
            <IoChevronUp />
          </button>
          <button>
            <BiWifi />
          </button>
          <button>
            <IoMdVolumeHigh />
          </button>
          <button>
            <IoBatteryHalf />
          </button>
        </div>
        <button className={styles.dateTime}>
          <div className={styles.time}>{currentTime}</div>
          <div className={styles.date}>{currentDate}</div>
        </button>
      </div>
    </div>
  );
};

export default Taskbar;

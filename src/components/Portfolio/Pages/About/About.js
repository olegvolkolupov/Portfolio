import React from "react";

import cvFoto from "./CV-foto.jpg";
import cvEn from "./Oleh-Volkolupov-CV-en.pdf";
import cvPl from "./Oleh-Volkolupov-CV-pl.pdf";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.personalDataContainer}>
        <p className={styles.fio}>Oleh</p>
        <p className={styles.fio}>Volkolupov</p>
        <p className={styles.speciality}>JavaScript developer</p>
        <img className={styles.photo} src={cvFoto} alt="face" />
        {/* <p className={styles.title}>Personal data</p>
        <p>Email:</p>
        <p>Volkolupov.Oleh@gmail.com</p>
				<p>Phone number</p>
				<p>+48665744482</p> */}
        <p className={styles.title}>Skills</p>
        <div className={styles.skills}>
          <p>JavaScript, HTML, CSS, Webpack, React, Java</p>
          <p>Visual Studio Code, Intelij IDEA, React, Github, Slack</p>
          <p>
            Maintenance of computers and office programs. Linux, MS Windows, MS
            Office, Photoshop
          </p>
          <p>Analytical thinking. Group work skills</p>
          <p>Creativity. Communication</p>
        </div>
        <p className={styles.title}>Languages</p>
        <div className={styles.skills}>
          <p>
            Russian / Ukrainian - native
            <br />
            English - communicative
            <br />
            Polish - advanced
          </p>
        </div>
      </div>
      <div className={styles.cvContainer}>
        <p>
          JavaScript developer with advanced knowledge of HTML, CSS, Webpack,
          React, Java.
        </p>
        <p>
          I am happy to join as a Junior JavaScript developer. I am a fast
          learner and take responsibility for my work. I am thorough and can
          make decisions. I can work in a team.
        </p>
        <p className={styles.cvTitle}>Experience</p>
        <table>
          <tbody>
            <tr>
              <td className={styles.yearsColumn}>1998 – 2002</td>
              <td className={styles.infoColumn}>
                <h3 className={styles.jobName}>Java developer</h3>
                <p className={styles.location}>
                  "Vedic Software", Kherson, Ukraine
                </p>
                <ul>
                  <li>Creating dedicated software</li>
                  <li>Implementation of new solutions</li>
                  <li>Support for existing solutions</li>
                  <li>Designing, testing, developing applications</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className={styles.yearsColumn}>2003 - 2005</td>
              <td className={styles.infoColumn}>
                <h3 className={styles.jobName}>Office worker</h3>
                <p className={styles.location}>"Furshet", Kyiv, Ukraine</p>
                <p>Accounting and data entry</p>
              </td>
            </tr>
            <tr>
              <td className={styles.yearsColumn}>2005 - 2007</td>
              <td className={styles.infoColumn}>
                <h3 className={styles.jobName}>Internet club administrator</h3>
                <p className={styles.location}>"Web", Kyiv, Ukraine</p>
                <ul>
                  <li>Ongoing support for system users</li>
                  <li>
                    Administering the company computer network and user accounts
                  </li>
                  <li>IT equipment supervision</li>
                  <li>
                    Configuration of workstations, network devices, mail servers
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className={styles.yearsColumn}>2008 - 2012</td>
              <td className={styles.infoColumn}>
                <h3 className={styles.jobName}>Custom website development</h3>
                <p className={styles.location}>Privately, Ukraine</p>
                <p>Creation and development of websites</p>
              </td>
            </tr>
            <tr>
              <td className={styles.yearsColumn}>2020 - nowadays</td>
              <td className={styles.infoColumn}>
                <h3 className={styles.jobName}>CNC machine operator</h3>
                <p className={styles.location}>"Gabi", Piaski, Poland</p>
                <ul>
                  <li>Development and adjustment of software</li>
                  <li>Checking the compliance of dimensions with the design</li>
                  <li>Minor repair work</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p className={styles.cvTitle}>Education</p>
        <table>
          <tbody>
            <tr>
              <td className={styles.yearsColumn}>2021 - 2022</td>
              <td className={styles.infoColumn}>
                <h3 className={styles.jobName}>
                  JavaScript developer: JavaScript, Webpack, React
                </h3>
                <p className={styles.location}>Online school "Skill UP"</p>
              </td>
            </tr>
            <tr>
              <td className={styles.yearsColumn}>2020 - nowadays</td>
              <td className={styles.infoColumn}>
                <h3 className={styles.jobName}>
                  Java developer: Java study course
                </h3>
                <p className={styles.location}>Internet school "Java Rush"</p>
              </td>
            </tr>
            <tr>
              <td className={styles.yearsColumn}>2004 - 2007</td>
              <td className={styles.infoColumn}>
                <h3 className={styles.jobName}>
                  Software for automated systems
                </h3>
                <p className={styles.location}>
                  Kyiv Polytechnic Institute, Kyiv, Ukraine
                </p>
              </td>
            </tr>
            <tr>
              <td className={styles.yearsColumn}>1995 - 1998</td>
              <td className={styles.infoColumn}>
                <h3 className={styles.jobName}>
                  Computer technology specialist
                </h3>
                <p className={styles.location}>
                  Vidic University of Maharishi, Lviv, Ukraine
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className={styles.cvTitle}>Additional activity</p>
        <table>
          <tbody>
            <tr>
              <td className={styles.yearsColumn}>2012 - 2020</td>
              <td className={styles.infoColumn}>
                <h3 className={styles.jobName}>
                  Organization of mass events, concerts. Work in a recording
                  studio, sound engineer, musician
                </h3>
              </td>
            </tr>
            <tr>
              <td className={styles.yearsColumn}>2020 - nowadays</td>
              <td className={styles.infoColumn}>
                <h3 className={styles.jobName}>
                  Participation in charity organizations
                </h3>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <a className={styles.cvLink} href={cvEn} target="_blanck">CV en</a>
        <a className={styles.cvLink} href={cvPl} target="_blanck">CV pl</a>
      </div>
    </div>
  );
}

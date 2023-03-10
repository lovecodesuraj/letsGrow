import React from 'react'
import { about } from "./styles";
import { useState } from "react";
import visionNmissionImg from "./assets/visionNmission.png";
import visionImg from "./assets/vision.png";
import missionImg from "./assets/mission.png";
const About = () => {
    const [styles, setStyles] = useState(about);
    return <>
        <div style={styles.about}>
            <div style={styles.vision}>
                <div style={styles.mainHeading}>
                    <h4 style={styles.visionHeading}>Vision</h4>
                    <img src={visionImg} style={styles.visionImg} alt="" />
                </div>
                <div style={styles.visionText}> t non dolores seodio doloremque obcaecati quia ipsum quos soluta pariatur modi neque! Enim aperiam, ea dolor sit nesciunt accusantium vero maxime eveniet, inventore asperiores nam, voluptates reprehenderit ullam!</div>
            </div>
            <div style={styles.mission}>
                <div style={styles.mainHeading}>
                <h4 style={styles.missionHeading}>mission</h4>
                <img src={missionImg} style={styles.visionImg} alt="" />
                </div>
                <div style={styles.visionText}>Welcome to our website, where we are working towards reducing the negative impacts of protests through a platform that empowers the common man to raise their voice on issues related to passing bills, acts or laws.

We understand that protests are a fundamental right of citizens to express their dissent, but at times, they can lead to inconvenience, damage to public property, and even loss of life. Our aim is to provide a space where people can voice their opinions on matters of national importance without resorting to violent means.

Our platform is designed to allow people to express their support or opposition to any proposed legislation in a peaceful manner. We believe that every citizen has the right to be heard, and we are committed to ensuring that their voices are heard.

We believe in the power of democracy, and we want to make sure that every citizen's opinion is taken into account before passing any legislation. Our goal is to create a dialogue between the government and the citizens to ensure that everyone's concerns are addressed.

Our website is easy to use, and anyone can create an account and start expressing their opinions. We encourage constructive criticism and debate and believe that everyone has something valuable to contribute to the national discourse.

We hope that our platform will become a place where citizens can come together and work towards a better future for our country. Let's work together to reduce the negative effects of protests and ensure that everyone's voice is heard.</div>
            </div>

        </div>
    </>
}

export default About
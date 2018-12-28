import React from 'react';

const About = () => {
    return (
        <div id="about">
            <div className="desc">
                <h2>REACT CHORDS</h2>
                <p>
                    is a simple app, demonstrating the
                    functionality of the <a href="https://tonejs.github.io/">Tone.js</a>
                    framework. From the site: "Tone.js is 
                    a framework for creating interactive music 
                    in the browser."
                </p>
            </div>
            <div className="how">
                <h2>HOW IT WORKS</h2>
                <p>
                    Use the dropdowns to select which chords
                    you want to play around with. Then, click
                    the corresponding button, to hear the chord.
                </p>
            </div>
        </div>
    );
}

export default About;
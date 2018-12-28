import React, { Component } from 'react';
import Tone from 'tone';
import Note from './components/Note';
import Navbar from './components/Navbar';
import About from './components/About';
import Control from './components/Control';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chords: ["C4", "E4", "A4", "F4"]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
  }

  componentDidMount() {
    //create a synth and connect it to the master output (your speakers)
    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease('A4', '8n', .87);
    synth.triggerAttackRelease('A#4', '8n', 1);
    synth.triggerAttackRelease('B4', '8n', 1.13);
    synth.triggerAttackRelease('C4', '8n', 1.26);
    synth.triggerAttackRelease('C#4', '8n', 1.39);
    synth.triggerAttackRelease('D4', '8n', 1.52);
    synth.triggerAttackRelease('D#4', '8n', 1.65);
    synth.triggerAttackRelease('E4', '8n', 1.78);
    synth.triggerAttackRelease('F4', '8n', 1.91);
    synth.triggerAttackRelease('F#4', '8n', 2.04);
    synth.triggerAttackRelease('G4', '8n', 2.17);
    synth.triggerAttackRelease('G#4', '8n', 2.30);
  }

  handleClick(note) {
    //create a synth and connect it to the master output (your speakers)
    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease(note, '8n');
  }

  handleNoteChange(note, index) {
    let chords = this.state.chords.slice();
    chords.splice(index, 1, note);
    this.setState({
      chords: chords
    });

  }

  render() {
    return (
      <div className="">
        <Navbar />
        <header><h1>React chords</h1></header>
        <div className="container">
          <About />
          <Control onChange={this.handleNoteChange} />
          <div className="chords">
            <Note note={this.state.chords[0]} onClick={this.handleClick} />
            <Note note={this.state.chords[1]} onClick={this.handleClick} />
            <Note note={this.state.chords[2]} onClick={this.handleClick} />
            <Note note={this.state.chords[3]} onClick={this.handleClick} />
          </div>
        </div>
        <div className="wave"></div>
      </div>
    );
  }
}

export default App;

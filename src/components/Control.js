import React from 'react';

const Control = (props) => {
    function handleChange(e) {
        console.log(e.target.name);
        
        props.onChange(e.target.value, e.target.name);
    }

    return (
        <div className="control">
            <select className="select-note" onChange={handleChange} name={0}>
                <option value="A4">A</option>
                <option value="A#4">A#</option>
                <option value="B4">B</option>
                <option value="C4">C</option>
                <option value="C#4">C#</option>
                <option value="D4">D</option>
                <option value="D#4">D#</option>
                <option value="E4">E</option>
                <option value="F4">F</option>
                <option value="F#4">F#</option>
                <option value="G4">G</option>
                <option value="G#4">G#</option>
            </select>
            <select className="select-note" onChange={handleChange} name={1}>
                <option value="A4">A</option>
                <option value="A#4">A#</option>
                <option value="B4">B</option>
                <option value="C4">C</option>
                <option value="C#4">C#</option>
                <option value="D4">D</option>
                <option value="D#4">D#</option>
                <option value="E4">E</option>
                <option value="F4">F</option>
                <option value="F#4">F#</option>
                <option value="G4">G</option>
                <option value="G#4">G#</option>
            </select>
            <select className="select-note" onChange={handleChange} name={2}>
                <option value="A4">A</option>
                <option value="A#4">A#</option>
                <option value="B4">B</option>
                <option value="C4">C</option>
                <option value="C#4">C#</option>
                <option value="D4">D</option>
                <option value="D#4">D#</option>
                <option value="E4">E</option>
                <option value="F4">F</option>
                <option value="F#4">F#</option>
                <option value="G4">G</option>
                <option value="G#4">G#</option>
            </select>
            <select className="select-note" onChange={handleChange} name={3}>
                <option value="A4">A</option>
                <option value="A#4">A#</option>
                <option value="B4">B</option>
                <option value="C4">C</option>
                <option value="C#4">C#</option>
                <option value="D4">D</option>
                <option value="D#4">D#</option>
                <option value="E4">E</option>
                <option value="F4">F</option>
                <option value="F#4">F#</option>
                <option value="G4">G</option>
                <option value="G#4">G#</option>
            </select>
        </div>
    );
}

export default Control;
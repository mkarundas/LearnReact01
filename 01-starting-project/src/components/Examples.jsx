
import { useState } from "react";

import TabButton from "./TabButton.jsx"
import {EXAMPLES } from "../data.js";


export default function Examples() {

    const [ selectedTopic, setSelectedTopic ] = useState();
    
    function handleOnSelect(selectedButton) {
        setSelectedTopic(selectedButton);
  }


    return (<section id="examples">
    <h2>Examples</h2>
    <menu>
      <TabButton isSelected={selectedTopic == "components"} onSelect={()=> handleOnSelect("components")}>Components</TabButton>
      <TabButton isSelected={selectedTopic == "jsx"} onSelect={()=> handleOnSelect("jsx")}>JSX</TabButton>
      <TabButton isSelected={selectedTopic == "props"} onSelect={()=> handleOnSelect("props")}>Props</TabButton>
      <TabButton isSelected={selectedTopic == "state"} onSelect={()=> handleOnSelect("state")}>States</TabButton>
    </menu>
    {!selectedTopic && <p>Please select a topic</p>}
    {selectedTopic && <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
      </div>}
  </section>);
}
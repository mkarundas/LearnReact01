
import { useState } from "react";

import TabButton from "./TabButton.jsx"
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

import {EXAMPLES } from "../data.js";



export default function Examples() {

    const [ selectedTopic, setSelectedTopic ] = useState();
    
    function handleOnSelect(selectedButton) {
        setSelectedTopic(selectedButton);
  }


    return (<Section title="Examples" id="examples" >
    <Tabs 
    //ButtonsContainer = "menu"
    buttons={<><TabButton isSelected={selectedTopic == "components"} onClick={()=> handleOnSelect("components")}>Components</TabButton>
      <TabButton isSelected={selectedTopic == "jsx"} onClick={()=> handleOnSelect("jsx")}>JSX</TabButton>
      <TabButton isSelected={selectedTopic == "props"} onClick={()=> handleOnSelect("props")}>Props</TabButton>
      <TabButton isSelected={selectedTopic == "state"} onClick={()=> handleOnSelect("state")}>States</TabButton></>}>{!selectedTopic && <p>Please select a topic</p>}
    {selectedTopic && <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
      </div>}</Tabs>
    <menu>
      
    </menu>
    
  </Section>);
}
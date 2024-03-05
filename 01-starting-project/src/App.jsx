import { useState } from "react";


import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";



function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();


  function handleOnSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
          </ul>
        </section>
        <section id="examples">
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
        </section>
      </main>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import List from "./List";
import data from "./data";

const App = () => {
  const [log, setLog] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{log.length} birthdays today</h3>
        <List log={log} />
        <button onClick={() => setLog([])}>Clear All</button>
      </section>
    </main>
  );
};

export default App;

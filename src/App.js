import React from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
import Conditional from './components/Conditional/Conditional'
import Life from './components/Life/Life'
import './app.css'

const arr = [
  {
    name: "Component 1",
    description: "Description 1",
    btnText: "Click 1"
  },
  {
    name: "Component 2",
    description: "Description 2",
    btnText: "Click 2"
  },
  {
    name: "Component 3",
    description: "Description 3",
    btnText: "Click 3"
  },
  {
    name: "Component 4",
    description: "Description 4",
    btnText: "Click 4",
  },
  {
    name: "Component 5",
    description: "Description 5",
    btnText: "Click 5",
  },
]

function App() {
  const [shown, setShown] = React.useState(true)
  return (
    <div>
      <Header />
      <main className="main">
        {arr.map((item, index) => <Card key={index} name={item.name} description={item.description} btnText={item.btnText} />)}
      </main>
      <div>
        <Conditional active={true} headerTrue={true} />
        <Conditional active={true} text="text mothefaqer" />
        <Conditional />
      </div>
      <div>
        <button onClick={() => setShown(!shown)}>toggle</button>
        {shown && <Life />}
      </div>
      <Footer />
    </div>
  );
}

export default App;

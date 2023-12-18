import './App.css'
import Greeter from './Greeter'

function App() {

  return (
    <>
    <Greeter 
      quote='Yabba Dabba Doo!' 
      age={27} 
      friend={{name: 'Wilma', town: 'Roswell'}} 
      />
    </>
  )
}

export default App

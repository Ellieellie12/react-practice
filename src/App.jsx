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
      <Greeter 
        quote='Hello!' 
        age={10} 
        friend={{name: 'Bart', town: 'Springfield'}} 
      />
    </>
  )
}

export default App

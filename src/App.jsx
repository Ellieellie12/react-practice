import './App.css'
import Greeter from './Greeter'

function App() {

  return (
    <>
    <Greeter quote age={27} friend={{name: 'Wilma', town: 'Roswell'}} />
    </>
  )
}

export default App

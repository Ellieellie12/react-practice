const Greeter = (props) => {

  
  return (  
    <>
      <h1>Hello, {props.friend ? props.friend.name : 'friend'}</h1>
      <h2>I believe in you</h2>
    </>
    
  )
}

export default Greeter


//props are properties key: value pairs
// There are two ways that a componenent can access information 1 is: storing it in state 2: passing it as a prop
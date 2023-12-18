const Greeter = (props) => {

  
  return (  
    <>
      <h1>Hello, {props.friend ? props.friend.name : 'friend'}</h1>
      <h2> {props.friend.name} says "{props.quote}</h2>
      <h2>I believe in you are {props.age} years old.</h2>
      <p>Today is {new Date().getDay() === 1 ? 'Monday' : 'not Monday'}</p>
      {/* get current day */}
    </>
    
  )
}

export default Greeter


//props are properties key: value pairs
// There are two ways that a componenent can access information 1 is: storing it in state 2: passing it as a prop
//import React from 'react' // for class
import Header from './components/Header'


//label form -> htmlFor
//jsx -> 1 parent element -> other components GO INSIDE (<></> also works)

//classname compied to  html class

//under return:<h2>Hello {x? 'Yes': 'No'}</h2>



//passing in a num/ boon -> {} around

//padding argument:  <Header title='Hello'/> 
function App() {// root wrap around it

  const name = 'Brad'
  const x=false

  return (
    <div className="App" className="container"> 
      <Header />
    </div>

  );
}


/* class
class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>
  }
}

*/
export default App;
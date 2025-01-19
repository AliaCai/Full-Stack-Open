//1. component
function MyButton(){
    return(
        <button>I'm a button</button>
    )
}

//1.1 nested
export default function MyApp(){
    return{
        <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
    };
}
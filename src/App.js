import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  // const person = { name: 'yoshi', age: 30 }; // We can't output objects and boolean
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{ person }</p> */}
        <p>{10}</p>
        <p>{"hello"}</p>
        <p>{[1, 2, 3, 4]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google</a>
        <br />
        <a href="http://www.google.com">Google</a>
      </div>
    </div>
  );
}

export default App;

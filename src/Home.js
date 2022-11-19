const Home = () => {

    const handleClick = () => {
        console.log('hello');
    }

    const handleClickAgain = (name) => {
        console.log('welcome ' + name);
    }

    const handleClickEvent = (e) => {
        console.log(e);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick()}>Instant Called</button>
            <button onClick={handleClick}>Click me for hello</button>
            <button onClick={() => {
                console.log('hi')
            }}>Click me for hi</button>
            <button onClick={ () => {
                handleClickAgain('Jack')
            }}>Click me for name</button>
            <button onClick={() => handleClickAgain('Jack')}>Click me for name</button>
            <button onClick={handleClickEvent}>See Events</button>
            <button onClick={(e) => handleClickEvent(e.target)}>See Events</button>
        </div>
     );
}
 
export default Home;
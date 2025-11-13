function Comp2()
{

    function sayHello()
    {
        alert("hello")
    }

    return(
        <div>
            <button onClick={sayHello}>Get started</button>
        </div>
    )
}

export default Comp2;
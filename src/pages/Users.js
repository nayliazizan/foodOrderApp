
function Users(){
    const [isValid, setIsValid] = useState(false);
    
    function showModalHandler(){
        setIsValid(true);
    }

    function hideModalHandler(){
        setIsValid(false);
    }

    return(
        <CartProvider>
            <Appbar showModleHandler={showModalHandler}/>
            {isValid && <Cart hideModleHandler={hideModalHandler}/>}
            <Banner/>
            <section>
                <AboutUs />
                
            </section>
        </CartProvider>
    );
}
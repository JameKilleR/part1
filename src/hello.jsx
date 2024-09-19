import "./hello.css";
function Hello({fname,lname="Test",age}) {

    
    return (
    <>  
            
            <h1>Test hello</h1>
            <h1>{fname} {lname+"!!"}{age}</h1>

            <hr />
    </>
                
                );
}
export default Hello;
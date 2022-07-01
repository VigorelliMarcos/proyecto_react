import StyledText from "./StyledText"
const NavBar = ({ name }) => {
    const displayName = name.toUpperCase();
    return (
        <>
            <nav>  
                <p>{displayName}</p>
                <StyledText text="Home"/>
                <StyledText text="Home"/>
                <StyledText text="Home"/>
                <StyledText text="Home"/>             
            </nav> 
        </>
    ); 
}
 
export default NavBar; 



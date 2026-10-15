export default function TabButton({ children }) {
    function handleClick(){
        console.log(`Meg lett nyomva a ${children} gomb`);
    }

    return (
        <li>
            <button onClick={handleClick}>
                {children}
            </button>
        </li>
    );
}

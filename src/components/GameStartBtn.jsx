

export default function GameStartBtn( {onStart}) {
    function handleClick() {
        onStart();
    }
    return (
        <button type="button" onClick={handleClick}>Start Game</button>
    )
}
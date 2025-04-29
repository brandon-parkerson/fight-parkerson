export default function RestartBtn({onRestart}) {
    function handleRestart() {
        onRestart();
    }
    return (
        <button onClick={handleRestart}>Restart</button>
    )
}
export default function Tile({ letter }) {
    const status = letter.status || 'empty';
    return (
        <div className={`tile ${status}`}>
            {letter.letter}
        </div>
    )
}
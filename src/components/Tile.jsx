export default function Tile({ letter }) {
    const status = letter.status || 'empty';
    return (
        <td className={`tile ${status}`}>
            {letter.letter}
        </td>
    )
}

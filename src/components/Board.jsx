import Row from "./Row";

export default function Board({ guesses }) {
    let board  = Array.from({length: 5}, () => Array.from({ length: 5 }, () => ({ letter: "", status: "empty" })));

    for (let i = 0; i < guesses.length; i++) {
        for (let j = 0; j < guesses[i].length; j++) {
            board[i][j] = guesses[i][j];
        }
    }

    return (
        <table className="board">
            <tbody>
                {board.map((row, index) => <Row key={index} row={row} />)}
            </tbody>
        </table>
    )
}

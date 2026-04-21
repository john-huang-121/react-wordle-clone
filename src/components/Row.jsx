import Tile from "./Tile"

export default function Row({ row }) {
    return (
        <tr className="row">
            {row.map((cell, index) => <Tile key={index} letter={cell} />)}
        </tr>
    )
}

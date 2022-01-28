import Card from "./Card"

export default function Column({ title, items }) {
    return <div className="kanban-column">
        <h1>{title}</h1>
        {items.map((item, index) =>
            /* TODO fix key. Temp solution */
            <Card key={(title + item + index).replace(/ /g, '')} text={item} />
        )}
    </div>
}
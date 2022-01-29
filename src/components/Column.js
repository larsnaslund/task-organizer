import Card from "./Card"

export default function Column({ items, title }) {

    return <div className="kanban-column">
        <div className="header">{title}</div>

        {items.map((item, index) =>
            /* TODO fix key. Temp solution */
            <Card key={(title + item + index).replace(/ /g, '')} title={item.title} text={item.description} priority={item.priority} />
        )}
    </div>
}
import Card from "./Card"

export default function Column({ process }) {

    // TODO use hook instead of propdrilling onto this component?

    // TODO handle card being dragged over the column

    return <div className="kanban-column"
        onDragEnter={(e) => null}
        onDragLeave={(e) => null}
        onDragOver={(e) => null}
    >
        <div className="header">{process.title}</div>
        <div className="items">
            {process.items.map((item, index) =>
                <Card key={index} task={item} />
            )}
        </div>
    </div>
}
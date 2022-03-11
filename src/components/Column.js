import Card from "./Card"
import { db } from '../db';
import { useLiveQuery } from "dexie-react-hooks";
import TaskCard from "./TaskCard";

export default function Column({ category }) {

    // TODO handle card being dragged over the column

    const items = useLiveQuery(() =>
        db.tasks.where('categoryId').equals(category.id).toArray()
    );

    return <div className="kanban-column"
        onDragEnter={(e) => null}
        onDragLeave={(e) => null}
        onDragOver={(e) => null}
    >
        <div className="header">{category.name}</div>
        <div className="items">
            {items?.map(item => {
                return <TaskCard key={item.id} task={{ ...item }} />
            })}
        </div>
    </div>
}
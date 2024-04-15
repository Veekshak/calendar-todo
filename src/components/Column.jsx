import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import Task from "./Task";

const Column = ({ columnData }) => {
  const { setNodeRef } = useDroppable({ id: columnData.id });
  return (
    <SortableContext
      id={columnData.id}
      items={columnData.tasks}
      strategy={rectSortingStrategy}
    >
      <div ref={setNodeRef} className="w-full lg:w-48 min-h-56">
        <div className="flex flex-row justify-between items-center border-b-2 border-black py-2">
          <h1 className="text-2xl lg:text-lg font-bold">
            {columnData.dayOfWeek}
          </h1>
          <h1 className="text-2xl lg:text-lg font-bold">{columnData.date}</h1>
        </div>
        <div className="flex flex-col my-2 py-2 gap-2">
          {columnData.tasks.map((task) => (
            <Task taskData={task} key={task?.title}></Task>
          ))}
        </div>
      </div>
    </SortableContext>
  );
};

export default Column;

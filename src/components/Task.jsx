import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

const Task = ({ taskData }) => {
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: taskData.id || null,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="rounded-md w-full h-auto bg-white p-2 px-4 text-md text-black touch-none"
    >
      <div id={taskData?.id || null}>
        <p>{taskData?.title || null}</p>
      </div>
    </div>
  );
};

export default Task;

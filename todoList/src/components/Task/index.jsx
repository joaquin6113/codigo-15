import { Card, Edit } from "../../components"
import { 
    CheckCircleIcon,
    TrashIcon,
  } from "@heroicons/react/24/solid"

export default function Task({ task, getTasks }) {
    return (
        <>
          <Card className={"mt-5 flex justify-between items-center"}>
            <p>--  {task?.text}</p>
            <div className="flex gap-3 items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-500 cursor-pointer"/>
              <Edit task={task} getTasks={getTasks}/>
              <TrashIcon className="h-6 w-6 text-red-600 cursor-pointer"/>
            </div>
          </Card>
        </>
    )
}
import { Card, Edit } from "../../components"
import { 
    CheckCircleIcon,
    TrashIcon,
  } from "@heroicons/react/24/solid"

export default function Task({ text }) {
    return (
        <>
          <Card className={"mt-5 flex justify-between items-center"}>
            <p>{text}</p>
            <div className="flex gap-3 items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-500"/>
              <Edit/>
              <TrashIcon className="h-6 w-6 text-red-600"/>
            </div>
          </Card>
        </>
    )
}
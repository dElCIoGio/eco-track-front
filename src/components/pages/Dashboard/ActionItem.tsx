"use client"

import { useState } from "react"
import {SustainabilityAction} from "@/models/domain.ts";

interface ActionItemProps {
    action: SustainabilityAction
    onUpdate: (action: SustainabilityAction) => void
    onDelete: (actionId: string) => void
}

export default function ActionItem({ action, onUpdate, onDelete }: ActionItemProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedAction, setEditedAction] = useState(action)

    const handleUpdate = () => {
        onUpdate(editedAction)
        setIsEditing(false)
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            {isEditing ? (
                <div className="space-y-4">
                    <input
                        type="text"
                        value={editedAction.title}
                        onChange={(e) => setEditedAction({ ...editedAction, title: e.target.value })}
                        className="w-full p-2 border rounded"
                    />
                    <textarea
                        value={editedAction.description}
                        onChange={(e) => setEditedAction({ ...editedAction, description: e.target.value })}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="number"
                        value={editedAction.points}
                        onChange={(e) => setEditedAction({ ...editedAction, points: Number.parseInt(e.target.value) })}
                        className="w-full p-2 border rounded"
                    />
                    <button onClick={handleUpdate} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                        Save
                    </button>
                </div>
            ) : (
                <>
                    <h3 className="text-xl font-semibold mb-2">{action.title}</h3>
                    <p className="text-gray-600 mb-2">{action.description}</p>
                    <p className="text-green-600 font-semibold mb-4">Points: {action.points}</p>
                    <div className="flex justify-between">
                        <button onClick={() => setIsEditing(true)} className="text-blue-500 hover:text-blue-600">
                            Edit
                        </button>
                        <button onClick={() => onDelete(action.id)} className="text-red-500 hover:text-red-600">
                            Delete
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}


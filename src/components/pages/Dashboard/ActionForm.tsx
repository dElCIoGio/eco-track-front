import { useState } from "react"
import {SustainabilityAction} from "@/models/domain.ts";
import {SustainabilityActionCategory} from "@/models/shared.ts";
import {Categories} from "@/lib/constants.ts";
import {useDashboardContext} from "@/context/dashoard-context.ts";

interface ActionFormProps {
    onAddAction: (action: SustainabilityAction) => void
}

export default function ActionForm({ onAddAction }: ActionFormProps) {
    const {user} = useDashboardContext()
    const [newAction, setNewAction] = useState<Omit<SustainabilityAction, "id">>({
        title: "",
        description: "",
        createdAt: new Date().toISOString(),
        category: SustainabilityActionCategory.RECYCLING,
        points: 0,
        userId: user.id,
    })


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onAddAction({ ...newAction, id: new Date().toISOString() })
        setNewAction({ title: "", description: "", createdAt: new Date().toISOString(), category: SustainabilityActionCategory.RECYCLING, points: 0, userId: "123" })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                value={newAction.title}
                onChange={(e) => setNewAction({ ...newAction, title: e.target.value })}
                placeholder="Título"
                className="w-full p-2 border rounded"
                required
            />
            <textarea
                value={newAction.description}
                onChange={(e) => setNewAction({ ...newAction, description: e.target.value })}
                placeholder="Descrição"
                className="w-full p-2 border rounded"
                required
            />
            <select
                value={newAction.category}
                onChange={(e) => setNewAction({ ...newAction, category: e.target.value as SustainabilityActionCategory })}
                className="w-full p-2 border rounded"
                required
            >
                {
                    Categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))
                }
            </select>
            <input
                type="number"
                value={newAction.points}
                onChange={(e) => setNewAction({ ...newAction, points: Number.parseInt(e.target.value) })}
                placeholder="Pontos"
                className="w-full p-2 border rounded"
                required
            />
            <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                Adicionar
            </button>
        </form>
    )
}


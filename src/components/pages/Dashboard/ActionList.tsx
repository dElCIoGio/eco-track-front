import ActionItem from "./ActionItem"
import {SustainabilityAction} from "@/models/domain.ts";

interface ActionListProps {
    actions: SustainabilityAction[]
    onUpdateAction: (action: SustainabilityAction) => void
    onDeleteAction: (actionId: string) => void
}

export default function ActionList({ actions, onUpdateAction, onDeleteAction }: ActionListProps) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {actions.map((action) => (
                <ActionItem key={action.id} action={action} onUpdate={onUpdateAction} onDelete={onDeleteAction} />
            ))}
        </div>
    )
}

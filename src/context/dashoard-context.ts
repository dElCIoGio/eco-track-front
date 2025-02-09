import {SustainabilityAction, User} from "@/models/domain.ts";
import {createContext, useContext} from "react";

interface DashboardContextProps {
    user: User;
    actions: SustainabilityAction[];
    addAction: (action: SustainabilityAction) => void;
    updateAction: (action: SustainabilityAction) => void;
    deleteAction: (actionId: string) => void;
}


export const DashboardContext = createContext<DashboardContextProps | undefined>(undefined)

export function useDashboardContext() {
    const context = useContext(DashboardContext)

    if (!context) {
        throw new Error("useDashboardContext must be used within a DashboardContext")
    }

    return context
}
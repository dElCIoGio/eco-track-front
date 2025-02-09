import {SustainabilityActionCategory} from "@/models/shared.ts";

export interface CreateActionsProps {
    user_id: string;
    title: string;
    description: string;
    category: SustainabilityActionCategory;
    points: number;
}

export interface UpdateActionsProps {
    id: string;
    title: string;
    description: string;
    category: SustainabilityActionCategory;
    points: number;
    user_id: string;

}

export interface DeleteActionsProps {
    id: string;
}
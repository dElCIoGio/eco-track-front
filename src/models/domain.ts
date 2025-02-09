import {SustainabilityActionCategory} from "@/models/shared.ts";

export type User = {
    id: string;
    createdAt: string;
    email: string;
    firebaseUID: string;
    actions: string[];
}


export type SustainabilityAction = {
    id: string;
    createdAt: string;
    title: string;
    description: string;
    category: SustainabilityActionCategory;
    points: number;
    userId: string;
}
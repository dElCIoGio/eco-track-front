import {SustainabilityActionCategory} from "@/models/shared.ts";

export type UserApiResponse = {
    _id: string;
    created_at: string;
    email: string;
    firebase_uid: string;
    actions: string[];
}


export type SustainabilityActionApiResponse = {
    _id: string;
    created_at: string;
    title: string;
    description: string;
    category: SustainabilityActionCategory;
    points: number;
    user_id: string;
}
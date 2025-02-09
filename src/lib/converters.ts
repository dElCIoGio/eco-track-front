import {SustainabilityActionApiResponse, UserApiResponse} from "@/models/api.ts";
import {SustainabilityAction, User} from "@/models/domain.ts";


export function UserApiToDomainConverter(user: UserApiResponse): User {
    return {
        id: user._id,
        createdAt: user.created_at,
        email: user.email,
        actions: user.actions,
        firebaseUID: user.firebase_uid,
    }
}

export function SustainabilityApiToDomainConverter(action: SustainabilityActionApiResponse): SustainabilityAction{
    return {
        id: action._id,
        createdAt: action.created_at,
        category: action.category,
        description: action.description,
        points: action.points,
        title: action.title,
        userId: action.user_id
    }
}
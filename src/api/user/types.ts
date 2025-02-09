

export interface GetUserProps {
    id: string;
}

export interface GetUserProjectsProps {
    id: string | undefined;
}

export interface GetUserByFirebaseUIDProps {
    firebase_uid: string;
}

export interface CreateUserProps {
    email: string;
    firebase_uid: string;
}
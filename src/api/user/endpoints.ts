

const route = "/users"

export const ENDPOINTS = {
    GET_USER: (id: string) => (`${route}/${id}`),
    CREATE_USER: () => `${route}/`,
    UPDATE_USER: (id: string) => `${route}/${id}`,
    DELETE_USER: (id: string) => `${route}/${id}`,
    GET_ALL_ACTIONS: (id: string) => `${route}/${id}/actions`,
    GET_USER_BY_FIREBASE_UID: (uid: string) => `${route}/${uid}/firebase`
}
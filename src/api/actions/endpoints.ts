

const routes = "/actions"


export const ENDPOINTS = {
    CREATE_ACTION: (id: string) => `${routes}/${id}`,
    UPDATE_ACTION: (id: string) => `${routes}/${id}`,
    DELETE_ACTION: (id: string) => `${routes}/${id}`,
}
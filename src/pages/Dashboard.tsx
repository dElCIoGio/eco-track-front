
import {SustainabilityAction} from "@/models/domain.ts";
import ActionList from "@/components/pages/Dashboard/ActionList.tsx";
import ActionForm from "@/components/pages/Dashboard/ActionForm.tsx";
import {useParams} from "react-router";
import { useGetUserActions, useGetUserByFirebaseUID} from "@/api/user/hooks.ts";
import {createAction, deleteAction, updateAction} from "@/api/actions/handlers"
import {DashboardContext} from "@/context/dashoard-context.ts";


export default function Dashboard() {


    const {userId: firebaseId} = useParams() as unknown as {userId: string}
    const {data: user, isLoading: isUserLoading} = useGetUserByFirebaseUID({firebase_uid: firebaseId})
    const {data: actions, isLoading: isActionsLoading, deleteAction: deleteActionMutation, updateAction: updateActionMutation, addAction} = useGetUserActions({id: user?.id})


    function handleAddActionMutation(newAction: SustainabilityAction){
        addAction(newAction)
    }

    function handleUpdateActionMutation(updatedAction: SustainabilityAction){
        updateActionMutation(updatedAction)
    }

    function handleDeleteActionMutation(actionId: string){
        deleteActionMutation(actionId)
    }


    const handleAddAction = (newAction: SustainabilityAction) => {
        const userId = user?.id

        if (!isActionsLoading && !isUserLoading && userId != undefined && actions != undefined) {
            createAction({
                user_id: userId,
                points: newAction.points,
                category: newAction.category,
                description: newAction.description,
                title: newAction.title,
            })
                .then((value) => {
                    handleAddActionMutation(value)
                })
        }
    }

    const handleUpdateAction = (updatedAction: SustainabilityAction) => {
        updateAction({
            points: updatedAction.points,
            category: updatedAction.category,
            description: updatedAction.description,
            title: updatedAction.title,
            user_id: updatedAction.userId,
            id: updatedAction.id,
        }).then(value => {
            if (value)
                handleUpdateActionMutation(updatedAction)
        })
    }

    const handleDeleteAction = (actionId: string) => {
        deleteAction({
            id: actionId,
        }).then(value => {
            if (value)
                handleDeleteActionMutation(actionId)
        })
    }

    if (isUserLoading || isActionsLoading  || !user || !actions) {
        return <div>Loading...</div>
    }

    return (
        <DashboardContext.Provider value={{
            user,
            actions,
            addAction: handleAddAction,
            deleteAction: handleDeleteAction,
            updateAction: handleUpdateAction

        }}>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Total
                    Points: {actions?.reduce((sum, action) => sum + action.points, 0) || 0}</h2>
                <ActionForm onAddAction={handleAddAction}/>
                <ActionList actions={actions} onUpdateAction={handleUpdateAction} onDeleteAction={handleDeleteAction}/>
            </div>
        </DashboardContext.Provider>

    )
}


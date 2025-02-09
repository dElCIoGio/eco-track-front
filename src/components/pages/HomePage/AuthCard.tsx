import {Button} from "@/components/ui/button.tsx";
import {Card} from "@/components/ui/card.tsx";
import {useRoutes} from "@/hooks/routes.ts";

function AuthCard() {

    const {gotoSignUp, gotoLogIn} = useRoutes()

    return (
        <div>
            <Card className="p-8 flex flex-col gap-2">
                <Button onClick={gotoLogIn}>Iniciar sessão</Button>
                <Button onClick={gotoSignUp}>Criar conta</Button>
            </Card>
        </div>
    );
}

export default AuthCard;
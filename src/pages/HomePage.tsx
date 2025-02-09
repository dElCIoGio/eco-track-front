import AuthCard from "@/components/pages/HomePage/AuthCard.tsx";

function HomePage() {
    return (
        <div className="flex flex-col items-center  justify-center h-screen">
            <h1 className="font-semibold text-2xl">
                EcoTrack
            </h1>
            <div className="py-8 flex justify-center items-center ">
                <AuthCard/>
            </div>

        </div>
    );
}

export default HomePage;
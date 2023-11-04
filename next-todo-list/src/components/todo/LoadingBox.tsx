import { Spinner } from "@nextui-org/react";

const LoadingBox = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-7">
                <Spinner
                    label="Loading..."
                    color="primary"
                    labelColor="primary"
                    size="lg"
                    classNames={{
                        label: "!text-red-500",
                    }}
                />
            </div>
        </div>
    );
};

export default LoadingBox;

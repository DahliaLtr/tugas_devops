import { TodoType } from "@/types/todo";
import { Button, ButtonProps, Tooltip } from "@nextui-org/react";

export interface IActionButton {
    text: string;
    isIconOnly: boolean;
    icon: React.ReactNode;
    color: ButtonProps["color"];
    onClick?: () => void;
}

const ActionButton = ({
    text,
    isIconOnly,
    icon,
    color,
    onClick,
}: IActionButton) => {
    return (
        <Tooltip
            color={color}
            content={text}
            delay={1000}
            classNames={{
                base: "text-white rounded-lg",
            }}
        >
            <Button
                variant="solid"
                color={color}
                size="sm"
                isIconOnly={isIconOnly}
                startContent={icon}
                className="text-white tracking-wide hover:drop-shadow-lg !transition-all duration-300 "
                onClick={onClick}
            >
                {!isIconOnly ? text : ""}
            </Button>
        </Tooltip>
    );
};

export { ActionButton };

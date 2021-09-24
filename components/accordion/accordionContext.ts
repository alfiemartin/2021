import { createContext, ReactElement, ReactNode, useContext } from "react";

type StylingType = "default" | "dark" | "blue" | "none";

export interface GetStyling {
    accordionStyles: string;
    itemStyles: string;
    contentStyles: string;
}

export interface AccordionProps {
    children: ReactElement<AccordionItemProps> | ReactElement<AccordionItemProps>[];
    styling?: "default" | "dark" | "blue" | "none";
}

export interface AccordionItemProps {
    children: ReactNode;
    id?: number;
}

export interface TAccordionContext {
    setActiveItems?: React.Dispatch<React.SetStateAction<number[]>>;
    activeItems?: number[];
    wrapperRefs?: React.MutableRefObject<any[]>;
    contentRefs?: React.MutableRefObject<any[]>;
    styles?: GetStyling;
}

export const AccordionContext = createContext<TAccordionContext>({});

export const useAccordionContext = () => {
    const context = useContext(AccordionContext);

    if (!context) throw new Error("No context found for Accordion");
    return context;
}

export const getStyling = (styling: StylingType) => {
    switch(styling) {
        case "blue":
            return {
                accordionStyles: "border border-black border-b-0 rounded-sm bg-blue-400",
                itemStyles: "text-center text-blue border-b border-black",
                contentStyles: "bg-blue-100 text-black"
            }
        default:
            return {
                accordionStyles: "border border-black border-b-0 rounded-md rounded-b-none bg-gray-200",
                itemStyles: "text-center text-blue border-b border-black",
                contentStyles: "bg-white text-black"
            }
        
    }
}
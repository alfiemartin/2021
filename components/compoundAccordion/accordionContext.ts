import { createContext, ReactNode, useContext } from "react";

export interface AccordionProps {
    children: ReactNode;
}

export interface AccordionItemProps {
    children: ReactNode;
    id?: number;
}

export interface TAccordionContext {
    setActiveItems?: React.Dispatch<React.SetStateAction<[number]>>;
    activeItems?: [number];
    itemRefs?: React.MutableRefObject<any[]>;
}

export const AccordionContext = createContext<TAccordionContext>({});

export const useAccordionContext = () => {
    const context = useContext(AccordionContext);

    if (!context) throw new Error("No context found for Accordion");
    return context;
}
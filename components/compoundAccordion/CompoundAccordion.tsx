import React, { createContext, ReactNode, useState } from 'react'

interface AccordionProps {
    children: ReactNode;
}

const AccordionContext = createContext([]);

const CompoundAccordion = ({children}: AccordionProps) => {
    const [activeItems, setActiveItems] = useState<[number]>();

    return (
        <AccordionContext.Provider value={[]}>
            <div className="Accordion border-2 border-black">
                {children}
            </div>
        </AccordionContext.Provider>
    )
}

CompoundAccordion.Item = ({children}: AccordionProps) => {
    return (
        <div className="AccordionItem">
            {children}
        </div>
    )
} 

CompoundAccordion.ItemTitle = ({children}: AccordionProps) => {
    return (
        <div className="AccordionItemTitle">
            {children}
        </div>
    )
} 

CompoundAccordion.ItemContent = ({children}: AccordionProps) => {
    return (
        <div className="AccordionItemContent">
            {children}
        </div>
    )
} 

export default CompoundAccordion
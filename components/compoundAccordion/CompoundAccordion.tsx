import React, { createContext, ReactElement, ReactNode, useContext, useRef, useState } from 'react'
import { AccordionProps, AccordionContext, AccordionItemProps, useAccordionContext } from './accordionContext';

const CompoundAccordion = ({children}: AccordionProps) => {
    const [activeItems, setActiveItems] = useState<[number]>([0]);
    const itemRefs = useRef([]);

    return (
        <AccordionContext.Provider value={{setActiveItems, activeItems, itemRefs}}>
            <div className="Accordion border-2 border-black">
                {React.Children.map(children, (child, count = 0) => {
                    return React.cloneElement(child as ReactElement, {id: count++})
                })}
            </div>
        </AccordionContext.Provider>
    )
}

CompoundAccordion.Item = ({children, id}: AccordionItemProps) => {
    const {activeItems, itemRefs} = useAccordionContext();

    return (
        <div className={`AccordionItem`}>
            {React.Children.map(children, child => {
                return React.cloneElement(child as ReactElement, {id})
            })}
        </div>
    )
} 

CompoundAccordion.ItemTitle = ({children, id}: AccordionItemProps) => {
    return (
        <div className="AccordionItemTitle">
            {children}
        </div>
    )
} 

CompoundAccordion.ItemContent = ({children, id}: AccordionItemProps) => {
    const {itemRefs} = useAccordionContext();

    return (
        <div ref={(el) => itemRefs.current.push(el)} className="AccordionItemContentWrapper">
            <div ref={(el) => itemRefs.current.push(el)} className="AccordionItemContent">
                {children}
            </div>
        </div>
    )
} 

export default CompoundAccordion
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { AccordionProps, AccordionContext, AccordionItemProps, useAccordionContext, getStyling } from './accordionContext';

const Accordion = ({children, styling="none"}: AccordionProps) => {
    const [activeItems, setActiveItems] = useState<number[]>([]);

    const wrapperRefs = useRef<HTMLDivElement[]>([]);
    const contentRefs = useRef<HTMLDivElement[]>([]);

    const styles = getStyling(styling);
    
    useEffect(() => {
        wrapperRefs.current.forEach((wrapperRef, i) => {
            if(activeItems.includes(i)) {
                wrapperRef.style.maxHeight = `${contentRefs.current[i].clientHeight}px`;
            } else {
                wrapperRef.style.maxHeight = `0px`;
            }
        });

    }, [activeItems])

    return (
        <AccordionContext.Provider value={{setActiveItems, activeItems, wrapperRefs, contentRefs, styles}}>
            <div className={`Accordion border-2 border-black ${styles.accordionStyles}`}>
                {React.Children.map(children, (child, count = 0) => {
                    return React.cloneElement(child as ReactElement, {id: count++})
                })}
            </div>
        </AccordionContext.Provider>
    )
}

const AccordionItem = ({children, id}: AccordionItemProps) => {
    
    return (
        <div className={`AccordionItem`}>
            {React.Children.map(children, child => {
                return React.cloneElement(child as ReactElement, {id})
            })}
        </div>
    )
} 

const AccordionItemTitle = ({children, id}: AccordionItemProps) => {
    const {setActiveItems, activeItems, styles} = useAccordionContext();
    
    const itemIsActive = (id:number) => {
        return activeItems.indexOf(id) !== -1;
    }

    const updateActiveItems = () => {
        
        if(itemIsActive(id)) { 
            setActiveItems(currentActiveItems => currentActiveItems.filter((value) => value !== id));
        } else {
            setActiveItems(currentActiveItems => [...currentActiveItems, id])
        }
    }

    return (
        <div onClick={updateActiveItems} className={`AccordionItemTitle ${styles.itemStyles}`}>
            {children}
        </div>
    )
} 

const AccordionItemContent = ({children, id}: AccordionItemProps) => {
    const {wrapperRefs, contentRefs, styles} = useAccordionContext();

    return (
        <div ref={(el) => wrapperRefs.current[id] = el} style={{maxHeight: 0}} className={`AccordionItemContentWrapper transition-all duration-200 overflow-hidden ${styles.contentStyles}`}>
            <div ref={(el) => contentRefs.current[id] = el} className="AccordionItemContent">
                {children}
            </div>
        </div>
    )
} 

export {Accordion as default, AccordionItem, AccordionItemContent, AccordionItemTitle}
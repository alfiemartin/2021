import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { AccordionProps, AccordionContext, AccordionItemProps, useAccordionContext, getStyling } from './accordionContext';

const Accordion = ({children, styling="none"}: AccordionProps) => {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const wrapperRefs = useRef<HTMLDivElement[]>([]);
    const contentRefs = useRef<HTMLDivElement[]>([]);

    const styles = getStyling(styling);
    
    useEffect(() => {
        wrapperRefs.current.forEach((wrapperRef, i) => {
            if(openItems.includes(i)) {
                wrapperRef.style.maxHeight = `${contentRefs.current[i].clientHeight}px`;
            } else {
                wrapperRef.style.maxHeight = `0px`;
            }
        });

    }, [openItems])

    return (
        <AccordionContext.Provider value={{setOpenItems, openItems, wrapperRefs, contentRefs, styles}}>
            <div className={`Accordion border-2 border-black ${styles.accordionStyles}`}>
                {React.Children.map(children, (accordionItem, count = 0) => {
                    return React.cloneElement(accordionItem as ReactElement, {id: count++})
                })}
            </div>
        </AccordionContext.Provider>
    )
}

const AccordionItem = ({children, id}: AccordionItemProps) => {
    
    return (
        <div className={`AccordionItem`}>
            {React.Children.map(children, accordionItemChildren => {
                return React.cloneElement(accordionItemChildren as ReactElement, {id})
            })}
        </div>
    )
} 

const AccordionItemTitle = ({children, id}: AccordionItemProps) => {
    const {setOpenItems, openItems, styles} = useAccordionContext();
    
    const itemIsActive = (id: number) => {
        return openItems.indexOf(id) !== -1;
    }

    const updateActiveItems = () => {
        if(itemIsActive(id)) { 
            setOpenItems(currentActiveItems => currentActiveItems.filter((value) => value !== id));
        } else {
            setOpenItems(currentActiveItems => [...currentActiveItems, id])
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
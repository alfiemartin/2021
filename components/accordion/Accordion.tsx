import React, { ReactChild, ReactChildren, useEffect, useRef, useState } from "react";

interface AccordionProps {
  children: ReactChild | ReactChild[];
  title: string;
}

export const Accordion = ({ children, title }: AccordionProps) => {
  const [accordionOpen, setAccordionState] = useState<boolean>(false);
	const accordionCollapseEl = useRef<HTMLDivElement>();
	const accordionContentEl = useRef<HTMLDivElement>();

	useEffect(() => {
		if(accordionOpen) {
			accordionCollapseEl.current.style.maxHeight = `${accordionContentEl.current.clientHeight}px`;
		} else {
			accordionCollapseEl.current.style.maxHeight = "0px";
		}
	}, [accordionOpen])

  return (
    <div className="accordion border-2 border-black">
      <div
        onClick={() => setAccordionState((prev) => !prev)}
        className="accordion__top h-8 flex items-center p-2 bg-gray-300"
      >
        <p>{title}</p>
      </div>
      <div ref={accordionCollapseEl} className="accordion__content bg-gray-200 transition-all duration-300 overflow-hidden">
        <div ref={accordionContentEl} className="accordion__content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

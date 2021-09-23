import type { ReactElement } from "react";
import LayoutContained from "../components/layouts/LayoutContained";
import Image from "next/image";

import image from "../public/image2.jpg";
import Accordion, {AccordionItem, AccordionItemContent, AccordionItemTitle} from "../components/Accordion/Accordion";

export default function Home() {
  return (
      <div className="w-1/3 mt-8">
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              <p className="bg-red-300 text-center">Hello</p>
            </AccordionItemTitle>
            <AccordionItemContent>
              <Image src={image} layout="responsive" />
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              <div className="flex h-6 relative">
                <div className="flex-1 bg-blue-300"></div>
                <div className="flex-1 bg-red-400"></div>
                <div className="absolute w-full text-center">World</div>
              </div>
            </AccordionItemTitle>
            <AccordionItemContent>
              <Image src={image} layout="responsive" />
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              <p className="text-center bg-gray-500 text-gray-100">Accordions</p>
            </AccordionItemTitle>
            <AccordionItemContent>
              <Image src={image} layout="responsive" />
            </AccordionItemContent>
          </AccordionItem>
        </Accordion>
      </div>
  );
}

Home.getLayout = (page: ReactElement) => {
  return (
    <LayoutContained>
      {page}
    </LayoutContained>
  )
}

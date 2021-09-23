import type { ReactElement } from "react";
import LayoutContained from "../components/layouts/LayoutContained";
import Image from "next/image";

import image from "../public/image2.jpg";
import Accordion, {AccordionItem, AccordionItemContent, AccordionItemTitle} from "../components/Accordion/Accordion";

export default function Home() {
  return (
      <div className="w-1/3 mt-8">
        <Accordion styling="blue">
          <AccordionItem>
            <AccordionItemTitle>
              Hello
            </AccordionItemTitle>
            <AccordionItemContent>
              <Image src={image} layout="responsive" />
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              Hello
            </AccordionItemTitle>
            <AccordionItemContent>
              <h1>This is a title</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quos ab, mollitia qui incidunt dignissimos molestias optio provident sunt veritatis?</p>
              <h2>This is a h2</h2>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              Hello
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

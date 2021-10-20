import type { ReactElement } from "react";
import LayoutContained from "../components/layouts/LayoutContained";
import Image from "next/image";

import image from "../public/image2.jpg";
import Accordion, {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTitle,
} from "../components/Accordion/Accordion";

export default function Home() {
  return (
    <div className="flex justify-between">
      <div className="w-1/3 mt-8">
        <Accordion styling="none">
          <AccordionItem>
            <AccordionItemTitle>Hello</AccordionItemTitle>
            <AccordionItemContent>
              <Image src={image} layout="responsive" />
            </AccordionItemContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="w-1/3 mt-8">
        <Accordion styling="none">
          <AccordionItem>
            <AccordionItemTitle>Hello</AccordionItemTitle>
            <AccordionItemContent>
              <Image src={image} layout="responsive" />
            </AccordionItemContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

Home.getLayout = (page: ReactElement) => {
  return <LayoutContained>{page}</LayoutContained>;
};

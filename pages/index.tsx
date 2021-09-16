import type { ReactElement } from "react";
import LayoutContained from "../components/layouts/LayoutContained";
import {Accordion} from "../components/accordion/Accordion";
import Image from "next/image";

import image from "../public/image2.jpg";
import { Toast } from "../components/accordion/toast/toast";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="w-96 h-96 mx-auto mt-8">
        <Accordion title="title">
          <Image src={image} layout="responsive" />
        </Accordion>
      </div>

      <Toast></Toast> 
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

import type { ReactElement } from "react";
import LayoutContained from "../components/layouts/LayoutContained";

export default function Home() {
  return (
    <h1>Home</h1>
  );
}

Home.getLayout = (page: ReactElement) => {
  return (
    <LayoutContained>
      {page}
    </LayoutContained>
  )
}

import Head from "next/head";
import type { ReactElement } from "react";
import Layout from "../components/layouts/Layout";

export default function Home() {
  return (
    <div className="container mx-auto">

    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

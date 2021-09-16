import React, { ReactElement } from "react";
import Layout from "../components/layouts/Layout";

const backroom = () => {
  return <div>backroom</div>;
};

backroom.getLayout = (page: ReactElement) => {
	return(
		<Layout>{page}</Layout>
	);
};

export default backroom;

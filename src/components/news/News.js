import React from "react";
import Heading from "../layout/Heading";
import NewsList from "../layout/NewsList";
import "../../sass/style.scss";

export function News() {
  return (
 <div>   
      <Heading content="NEWS"/>
      <NewsList/>
 </div>   
  );
}

export default News;

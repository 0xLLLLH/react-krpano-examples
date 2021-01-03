import { Krpano } from "@0xllllh/react-krpano";
import React from "react";

interface PageLoadXMLProps {}

const PageLoadXML: React.FC<PageLoadXMLProps> = () => (
  <Krpano className="pano" xml="/xml/load-xml.xml" />
);

export default PageLoadXML;

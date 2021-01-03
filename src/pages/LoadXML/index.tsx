import { Krpano } from "@0xllllh/react-krpano";
import React from "react";

interface PageLoadXMLProps {}

const PageLoadXML: React.FC<PageLoadXMLProps> = () => (
  <Krpano className="pano" xml={`${process.env.PUBLIC_URL}/xml/load-xml.xml`} />
);

export default PageLoadXML;

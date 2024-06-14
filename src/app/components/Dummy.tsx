"use client";

import { useEffect } from "react";


export const runtime = "edge";


type Props = {
  data: Record<string, any>;
};
function Dummy({ data }: Props) {
  useEffect(() => {
    console.log(data);

    return () => {
      console.clear();
    }

  }, [data]);
  return <div>Dummy</div>;
}
export default Dummy;

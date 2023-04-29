import * as React from "react";
import Blocks from "./blocks";

export default function Pintest() {
  const [totalBlocks, setTotalBlocks] = React.useState(22);
  const [rowSize, setRowSize] = React.useState(3);
  const [multiWidth, setMultiWidth] = React.useState(false);
  const deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const deviceHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  return (
    <div>
      <Blocks
        key={`${rowSize}-${multiWidth}-${totalBlocks}`}
        rowSize={rowSize}
        multiWidth={multiWidth}
        totalBlocks={totalBlocks}
      />
    </div>
  );
}









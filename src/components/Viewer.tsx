import React, { useEffect, useRef } from "react";
import * as $3Dmol from "3dmol";

const Viewer = ({ cifData }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!cifData) return;

    const viewer = $3Dmol.createViewer(viewerRef.current, {
      backgroundColor: "lightgrey",
    });

    viewer.addModel(cifData, "cif");
    viewer.setStyle({}, { stick: {} });
    viewer.zoomTo();
    viewer.render();

    return () => viewer.removeAllModels();
  }, [cifData]);

  return <div ref={viewerRef} className="w-full h-full " />;
};

export default Viewer;

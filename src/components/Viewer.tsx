import React, { useEffect, useRef } from "react";
import * as $3Dmol from "3dmol";

interface ViewerProps {
  cifData: any;
}

const Viewer: React.FC<ViewerProps> = ({ cifData }) => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cifData) return;

    const viewer = $3Dmol.createViewer(viewerRef.current, {
      backgroundColor: "lightgrey",
    });

    viewer.addModel(cifData, "cif");
    viewer.setStyle({}, { stick: {} });
    viewer.zoomTo();
    viewer.render();

    return () => {
      viewer.removeAllModels();
    };
  }, [cifData]);

  return <div ref={viewerRef} className="w-full h-full " />;
};

export default Viewer;

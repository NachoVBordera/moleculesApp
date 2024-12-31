import { useState, useEffect } from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import Menu from "./components/Menu";
import Viewer from "./components/Viewer";
const App = () => {
  const [selectedName, setSelectedName] = useState("2r");
  const [cifData, setCifData] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    fetch(`/${selectedName}.cif`) // Este archivo CIF debe estar en la carpeta /public o /assets
      .then((response) => response.text())
      .then((data) => setCifData(data))
      .catch((error) => console.error("Error loading CIF file:", error));
  }, [selectedName]);

  return (
    <div className=" w-screen h-screen">
      <div className="absolute ">
        <Button className="absolute z-10 " onPress={onOpen}>
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M3 5H21"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H21"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Button>
        <Menu
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          setSelectedName={setSelectedName}
        />
      </div>
      <div className="w-full h-full ">
        <Viewer cifData={cifData} />
      </div>
    </div>
  );
};

export default App;

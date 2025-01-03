import {
  Routes,
  Route,
  useParams,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import Menu from "./components/Menu";
import Viewer from "./components/Viewer";

const names = [
  "2r",
  "6f",
  "8i",
  "8l",
  "10t",
  "16b",
  "16h",
  "19c",
  "25γ",
  "25δ",
  "31a",
  "33d",
  "34n",
  "36i",
  "25ι",
  "9o",
];

const NameViewer = () => {
  const [cifData, setCifData] = useState<string | null>(null);
  const location = useLocation();
  const currentLocation = location.pathname.substring(1);

  useEffect(() => {
    if (currentLocation) {
      fetch(`/${currentLocation}.cif`)
        .then((response) => response.text())
        .then((data: string) => setCifData(data))
        .catch((error) => console.error("Error loading CIF file:", error));
    }
  }, [currentLocation]);

  return <Viewer cifData={cifData} />;
};

const App = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-screen h-screen">
      <div className="absolute">
        <Button className="absolute z-10" onPress={onOpen}>
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
        <Menu isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Navigate to="/2r" replace />} />
          {names.map((name) => (
            <Route key={name} path={`/${name}`} element={<NameViewer />} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default App;

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Listbox,
  ListboxItem,
  DrawerFooter,
} from "@nextui-org/react";
import { Link } from "@nextui-org/link";

interface MenuProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onOpenChange }) => {
  const names = [
    "2r",
    "6f",
    "8i",
    "8l",
    "9o",
    "10t",
    "16b",
    "16h",
    "19c",
    "25γ",
    "25δ",
    "25ι",
    "31a",
    "33d",
    "34n",
    "36i",
  ];

  return (
    <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement="left">
      <DrawerContent>
        <DrawerHeader />
        <DrawerBody>
          <Listbox
            className="list-box-section"
            aria-label="Actions"
            onAction={(key) => {
              onOpenChange();
            }}
          >
            {names.map((name) => (
              <ListboxItem
                className="listbox-Item-label"
                href={`/${name}`}
                key={name}
              >
                {name}
              </ListboxItem>
            ))}
          </Listbox>
          <DrawerFooter>
            Made with 🖤 by
            <Link
              href="https://github.com/NachoVBordera"
              rel="noopener noreferrer"
              target="_blank"
            >
              Nacho
            </Link>
          </DrawerFooter>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Menu;

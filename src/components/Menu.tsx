import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
export const ListboxWrapper = ({ children }) => <div>{children}</div>;

const Menu = ({ isOpen, onOpenChange, setSelectedName }) => {
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

  return (
    <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement="left">
      <DrawerContent>
        <DrawerHeader></DrawerHeader>
        <DrawerBody>
          <ListboxWrapper>
            <Listbox
              aria-label="Actions"
              onAction={(key) => {
                setSelectedName(key);
                onOpenChange();
              }}
            >
              {names.map((name) => (
                <ListboxItem href={`/${name}`} key={name}>
                  {name}
                </ListboxItem>
              ))}
            </Listbox>
          </ListboxWrapper>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Menu;

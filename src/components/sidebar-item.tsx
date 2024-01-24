import { Button } from "./ui/button";

export interface SidebarItemI {
    name: string;
}

export default function SidebarItem(
    { name }: SidebarItemI
) {
    return (
      <Button>
        {name}
      </Button>
    );
  }
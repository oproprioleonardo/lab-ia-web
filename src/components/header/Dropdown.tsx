"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MenuDropdown({
  items,
}: {
  items: { key: string; route: string; label: string }[];
}) {
  const router = useRouter();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light">
          <Image src="menu.svg" width={24} height={24} alt="More" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dynamic Actions"
        items={items}
        onAction={(key) => {
          router.push(items.filter((i) => i.key === key)[0].route);
        }}
      >
        {(item) => (
          <DropdownItem key={item.key} className="text-purple-900 hover:text-purple-900 focus:text-purple-900 data-[hover=true]:text-purple-900 data-[selectable=true]:focus:text-purple-900">
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}

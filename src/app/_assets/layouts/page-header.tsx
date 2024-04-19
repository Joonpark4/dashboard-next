"use client";
import { navMenu } from "./nav-data";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const PageHeader = () => {
  const pathName = usePathname();
  return (
    <div className="flex h-28 items-center gap-5 border-b p-4">
      {navMenu.map((menu) =>
        menu.children
          ? menu.children.map(
              (child) =>
                pathName === child.href && (
                  <h1 key={child.title} className="text-2xl font-bold">
                    {child.title}
                  </h1>
                ),
            )
          : pathName === menu.href && (
              <h1 key={menu.title} className="text-2xl font-bold">
                {menu.title}
              </h1>
            ),
      )}
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

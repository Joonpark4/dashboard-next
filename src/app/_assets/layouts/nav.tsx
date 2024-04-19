"use client";

import Link from "next/link";
import { navMenu } from "./nav-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {  usePathname } from "next/navigation";

export function Nav() {
  const pathName = usePathname();
  return (
    <div className="group flex flex-col gap-4 py-2 border-r">
      <nav className="grid gap-2 px-2">
        {navMenu?.map((item, index) =>
          item.children ? (
            <Accordion key={item.title} type="single" collapsible>
              <AccordionItem value={item.title} className="border-b-0">
                <AccordionTrigger
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    }),
                    "justify-between",
                  )}
                >
                  <div className="flex items-center justify-start">
                    {item.icon && (
                      <item.icon
                        className="mr-2 h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                    )}
                    {item.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="ml-7 flex flex-col space-y-1">
                    {item.children.map((child, index) => (
                      <Link
                        key={index}
                        href={child.href || "/"}
                        className={cn(
                          buttonVariants({
                            size: "sm",
                            variant:
                              pathName === child.href ? "default" : "ghost",
                          }),
                          "justify-start",
                        )}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            item.href && (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  buttonVariants({
                    size: "sm",
                    variant: pathName === item.href ? "default" : "ghost",
                  }),
                  "justify-start",
                )}
              >
                {item.icon && (
                  <item.icon
                    className="mr-2 h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                )}
                {item.title}
              </Link>
            )
          ),
        )}
      </nav>
    </div>
  );
}

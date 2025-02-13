"use client"
import { PRODUCT_CATEGORIES } from "@/config";
import React, { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";


const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  //adding the ability to close using the escape button
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null)
      }
    }
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [])

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(navRef as React.RefObject<HTMLElement>, () => setActiveIndex(null));

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        //keeping track on which element on the navbar is currently open
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        }

        const isOpen = i === activeIndex;


        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
              />

        )
      })}
    </div>
  )
 }


export default NavItems

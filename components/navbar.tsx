"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, SearchIcon, YtLogo, Logo } from "@/components/icons";
import React from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  const [isMenuOpen, setIsMenuOpen] = React.useReducer(
    (current) => !current,
    false
  );
  const pathname = usePathname();
  return (
    <NextUINavbar
      // classNames={{
      //   item: [
      //     "flex",
      //     "relative",
      //     "h-full",
      //     "items-center",
      //     "data-[active=true]:after:content-['']",
      //     "data-[active=true]:after:absolute",
      //     "data-[active=true]:after:bottom-0",
      //     "data-[active=true]:after:left-0",
      //     "data-[active=true]:after:right-0",
      //     "data-[active=true]:after:h-[2px]",
      //     "data-[active=true]:after:rounded-[2px]",
      //     "data-[active=true]:after:bg-primary",
      //   ],
      // }}
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1"
            href="/"
            onClick={() => {
              if (isMenuOpen) setIsMenuOpen();
            }}
          >
            {/* <Logo /> */}
            <p className="font-bold text-inherit">Edu-Next</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                color="foreground"
                href={item.href}
                className={`${pathname === item.href ? "text-sky-500 underline font-bold dark:text-sky-600" : ""}`}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={"foreground"}
                href={item.href}
                size="lg"
                className={`${pathname === item.href ? "text-sky-500 underline font-bold dark:text-sky-600" : ""}`}
                onPress={() => setIsMenuOpen()}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

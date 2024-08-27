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
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";
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
    false,
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
      isBordered
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1"
            href="/#"
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
                className={`${pathname === item.href ? "text-sky-500 underline font-bold dark:text-sky-600" : ""}`}
                color="foreground"
                href={item.href}
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
        <NavbarItem className="hidden lg:flex gap-5">
          <Link href="/#">
            <FaYoutube color={"red"} size={"1.5em"} />
          </Link>
          <a href="/#">
            <FaInstagram size={"1.5em"} />
          </a>
          <Link href="/#">
            <FaFacebook size={"1.5em"} />
          </Link>
          <Link href="/#">
            <FaTwitter size={"1.5em"} />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />

        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu className="grid ">
        <div className="items-start">{searchInput}</div>

        <div className="mx-4 flex flex-col gap-2 items-start">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`${pathname === item.href ? "text-sky-500 underline font-bold dark:text-sky-600" : ""}`}
                color={"foreground"}
                href={item.href}
                size="lg"
                onPress={() => setIsMenuOpen()}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <div className="m-10 flex flex-row justify-between">
          <Link className="-ml-3" href="/#">
            <FaYoutube color={"red"} size={"1.5em"} />
          </Link>
          <Link href="/#">
            <FaInstagram size={"1.5em"} />
          </Link>
          <Link href="/#">
            <FaFacebook size={"1.5em"} />
          </Link>
          <Link href="/#">
            <FaTwitter size={"1.5em"} />
          </Link>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

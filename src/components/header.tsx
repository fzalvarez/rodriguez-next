"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import Image from "next/image";

import Logo from "@/assets/Logo.png";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        wrapper: "!container",
      }}
    >
      <NavbarBrand>
        <Link href="/">
          <Image src={Logo} alt="logo" className="h-10 w-auto" />
        </Link>
      </NavbarBrand>
      <NavbarContent
        justify="end"
        className="flex items-center gap-4 max-md:hidden"
      >
        <NavbarItem>
          <Link
            href="/"
            className="lg:hover:text-primary duration-200 font-semibold"
          >
            Destinos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/"
            className="lg:hover:text-primary duration-200 font-semibold"
          >
            Terminales
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/"
            className="lg:hover:text-primary duration-200 font-semibold"
          >
            Contáctanos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="md:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        />
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/">Destinos</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/">Terminales</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/">Contáctanos</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

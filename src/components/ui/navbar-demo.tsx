"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../../lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("pt-5 fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="">Timeline</HoveredLink>
            <HoveredLink href="">Projects+Experience</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resume+Links">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Resume"
              href=""
              src="src/assets/gdrive.jpg"
              description="Look at my resume and hire me!"
            />
            <ProductItem
              title="Github"
              href=""
              src="src/assets/g38817mqb1361.png"
              description="View my projects on github!"
            />
            <ProductItem
              title="Linkedin"
              href=""
              src="src/assets/LinkedIn.jpg"
              description="Connect with me on LinkedIn!"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="mailto:mnmanasnavale@gmail.com">
              Personal Email
            </HoveredLink>
            <HoveredLink href="mailto:msn0083@tamu.edu">
              School Email
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavbarDemo;

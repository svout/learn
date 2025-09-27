import { ReactNode, useState } from "react";
import { Elements } from "@/components";
import { SeoHead } from "@/components/elements/SeoHead";
import { MenuOpenProvider } from "@/components/hooks/useMenuOpen";

export default function Layout({
  children,
  name,
}: {
  children: ReactNode;
  name?: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className={"layout"} id="layout">
      <SeoHead name={name} />
      <MenuOpenProvider value={{ isMenuOpen, setIsMenuOpen }}>
        {children}
      </MenuOpenProvider>
    </div>
  );
}

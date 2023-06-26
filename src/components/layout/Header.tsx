import React, { ReactNode, useState } from "react";
import { ReactComponent as HeaderLogo } from "assets/header.svg";
import { ReactComponent as MemoLogo } from "assets/icon_memo.svg";
import { ReactComponent as InfoLogo } from "assets/icon_info.svg";
import { ReactComponent as ChallengeLogo } from "assets/icon_challenge.svg";
import { ReactComponent as MenuLogo } from "assets/icon_menu.svg";
import { DropdownMenu } from "./DropdownMenu";

type HeaderConfig = {
  title: string;
  icon: ReactNode;
};

const headerConfig: HeaderConfig[] = [
  {
    title: "自分の記録",
    icon: <MemoLogo />,
  },
  {
    title: "チャレンジ",
    icon: <ChallengeLogo />,
  },
  {
    title: "お知らせ",
    icon: <InfoLogo />,
  },
];

export default function Header() {
  const [visibleDropdownMenu, setVisibleDropdownMenu] = useState(false)
  return (
    <div className="w-full h-16 bg-header px-40 flex sticky top-0 z-50">
      <div className="w-full flex justify-between items-center">
        <HeaderLogo className="w-36" />
        <div className="flex gap-10">
          {headerConfig.map((navItem: HeaderConfig) => (
            <div className="flex gap-2 justify-center items-center text-white" key={navItem.title}>
              {navItem.icon} {navItem.title}
            </div>
          ))}
          <span className="text-[32px] text-primary-400 cursor-pointer pl-5 relative">
          {visibleDropdownMenu && (
            <DropdownMenu onClose={() => setVisibleDropdownMenu(false)} />
          )}
          <MenuLogo className="cursor-pointer" onClick={() => setVisibleDropdownMenu(true)} />
        </span>
        </div>
      </div>
    </div>
  );
}

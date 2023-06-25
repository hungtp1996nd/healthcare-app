import React, { ReactNode } from "react";
import { ReactComponent as HeaderLogo } from "assets/header.svg";
import { ReactComponent as MemoLogo } from "assets/icon_memo.svg";
import { ReactComponent as InfoLogo } from "assets/icon_info.svg";
import { ReactComponent as ChallengeLogo } from "assets/icon_challenge.svg";
import { ReactComponent as MenuLogo } from "assets/icon_menu.svg";

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
  return (
    <div className="w-full h-16 bg-header px-40 flex sticky top-0 z-50">
      <div className="w-full flex justify-between items-center">
        <HeaderLogo className="w-36" />
        <div className="flex gap-10">
          {headerConfig.map((navItem: HeaderConfig) => (
            <div className="flex gap-2 justify-center items-center text-white">
              {navItem.icon} {navItem.title}
            </div>
          ))}
          <MenuLogo className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

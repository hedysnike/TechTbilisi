import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <NavigationMenu.Root className="z-10">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            <Icon icon="material-symbols:menu-rounded" color="black" width="28" height="30" />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <Link className="hover:border-b-2 hover:border-black hover:border-solid pb-1" to="/">
              მთავარი
            </Link>
            <br />
            <Link className="hover:border-b-2 hover:border-black hover:border-solid pb-1" to="/macbook">
              პროდუქცია
            </Link>
            <br />
            <Link className="hover:border-b-2 hover:border-black hover:border-solid pb-1" to="/contact">
              კონტაქტი
            </Link>
            <Link
              className="hover:border-b-2 border-b-2 border-transparent  pb-1  hover:border-black hover:border-solid"
              to="/else"
            > <br />
              ჩვენს შესახებ
            </Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="z-10">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="mt-3 w-full h-full bg-black text-white" />
      </div>
    </NavigationMenu.Root>
  );
}

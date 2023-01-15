import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function Navigation() {
  return (
    <div className="lg:w-9/12 lg:ml-auto lg:mr-auto lg:pt-3 lg:pb-3 relative lg:mb-10">
        <div className="lg:pl-2 lg:p-1 absolute">
          <img className="max-w-xs invisible xl:visible w-0 h-0 xl:w-auto xl:h-auto" src="https://i.imgur.com/b23nDJ1.png" />
      </div>
      <div className=" text-black">
        <div className="visible w-auto h-auto lg:invisible lg:w-0 lg:h-0 pt-9 lg:pt-0 justify-end lg:flex-none flex">
      <Icon icon="material-symbols:menu-rounded" color="black" width="28" height="30" />
      </div>
        <div className="flex gap-16 text-lg justify-end pt-9 invisible lg:visible w-0 h-0 lg:w-auto lg:h-auto">
          <Link className="hover:border-b-2 hover:border-black hover:border-solid pb-1" to="/">მთავარი</Link>
          <Link className="hover:border-b-2 hover:border-black hover:border-solid pb-1" to="/macbook">პროდუქცია</Link>
          <Link className="hover:border-b-2 hover:border-black hover:border-solid pb-1" to="/contact">კონტაქტი</Link>
          <Link className="hover:border-b-2 border-b-2 border-transparent  pb-1  hover:border-black hover:border-solid" to="/else">ჩვენს შესახებ</Link>
        </div>
      </div>
    </div>
  );
}

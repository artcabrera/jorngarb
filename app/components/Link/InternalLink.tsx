import { NavLink } from "@remix-run/react";
import { Fragment } from "react";

interface Link {
  href: string;
  label: string;
  className?: string;
  id?: string;
  cursorSize?: string;
}

export const InternalLink = ({
  href,
  className,
  label,
  id,
  cursorSize,
}: Link) => {
  return (
    <div
      data-cursor-size={cursorSize || "24px"}
      data-cursor-stick={`#${id}`}
      className={`${className} group`}
    >
      <NavLink
        id={id}
        to={href}
        className="relative h-fit w-fit py-4 uppercase"
      >
        {({ isActive }) => (
          <Fragment>
            &nbsp;{label}&nbsp;
            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
              <span
                className={`block h-[1px] transform bg-[#3C0000] transition-all duration-500 ease-in-out ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </div>
          </Fragment>
        )}
      </NavLink>
    </div>
  );
};

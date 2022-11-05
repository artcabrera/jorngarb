import { NavLink } from "@remix-run/react";
import { Fragment } from "react";

interface Link {
  href: string;
  label: string;
  className?: string;
  id?: string;
  cursorSize?: string;
}

export const ExternalLink = ({
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
      <a id={id} href={href} className="relative h-fit w-fit uppercase">
        <Fragment>
          &nbsp;{label}&nbsp;
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
            <span
              className={`block h-[1px] w-0 transform bg-[#3C0000] transition-all duration-500 ease-in-out group-hover:w-full`}
            />
          </div>
        </Fragment>
      </a>
    </div>
  );
};

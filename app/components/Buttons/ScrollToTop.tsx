import { useEffect, useState } from "react";

export const ScrollToTop = ({
  children,
}: {
  children?: JSX.Element | string;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  const renderButton = () => {
    if (!mounted) return null;

    return (
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        {children}
      </button>
    );
  };

  return <div data-cursor-size="24px">{renderButton()}</div>;
};

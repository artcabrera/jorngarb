import { Location, useLocation } from "@remix-run/react";

interface LocationState extends Location {
  state: { background: "000000" };
  search: string;
}

export const useAppLocation = (): LocationState =>
  useLocation() as LocationState;

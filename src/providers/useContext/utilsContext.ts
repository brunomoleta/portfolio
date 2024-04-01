import React from "react";
import { UtilsContext } from "@/providers/UtilsProvider";

const useUtilsContext = () => React.useContext(UtilsContext);

export { useUtilsContext };

// OnLoadWrapper.tsx
import { useOnLoad } from "@/components/hooks/useOnLoad";
import React from "react";

interface OnLoadWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode; // что показывать до загрузки
}

const OnLoad: React.FC<OnLoadWrapperProps> = ({
  children,
  fallback = null,
}) => {
  const onLoad = useOnLoad();

  return <>{onLoad ? children : fallback}</>;
};

export default OnLoad;

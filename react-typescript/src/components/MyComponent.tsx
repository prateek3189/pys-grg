import { useCallback, useEffect, useMemo, useState } from "react";
import largeFile from "../largefile.json";

const MyComponent = ({ count }: { count: number }) => {
  const operation = () => {
    return Object.entries(largeFile).length;
  };

  const onLoadEvent = useCallback(() => {
    console.log("Window load");
  }, []);

  const totalEntries = useMemo(() => operation(), []);

  useEffect(() => {
    window.addEventListener("load", onLoadEvent);
    return () => {
      window.removeEventListener("load", onLoadEvent);
    };
  }, []);

  return (
    <div>
      Counter: {count} <br /> Total Entries: {totalEntries}
    </div>
  );
};

export default MyComponent;

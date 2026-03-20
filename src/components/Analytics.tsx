"use client";

import { useEffect } from "react";

export function Analytics() {
  useEffect(() => {
    import("@/lib/firebase-client").then(({ analytics }) => {
      if (analytics) {
        console.log("[analytics] Firebase Analytics initialized");
      }
    });
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";
import { trackEvent } from "../lib/analytics";

type PageViewTrackerProps = {
  eventName: string;
  params?: Record<string, unknown>;
};

export default function PageViewTracker({ eventName, params }: PageViewTrackerProps) {
  useEffect(() => {
    trackEvent(eventName, params);
    // fire once on mount only, not on every params identity change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventName]);

  return null;
}

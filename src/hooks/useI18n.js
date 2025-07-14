import { useSyncExternalStore, useCallback } from "react";
import i18n from "../i18n";

export default function useI18n() {
  const getSnapshot = () => i18n.language;

  const subscribe = (cb) => {
    i18n.on("languageChanged", cb);
    return () => i18n.off("languageChanged", cb);
  };

  const locale = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const t      = useCallback(i18n.t.bind(i18n), [locale]);

  return { locale, t };
}

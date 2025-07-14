import { loadLocale } from "../../../i18n";     // ⬅️  usa la función global
import useI18n from "../../../hooks/useI18N";

export const ToggleLanguage = () => {
  const { locale } = useI18n();   
  
  const common =
  "w-8 h-8 transition drop-shadow flag-shadow hover:scale-105";// ← reactivo; se actualiza solo

  return (
    <div className="font-quantico">
      {/*  Muestra el botón del idioma contrario */}
      {locale === "es" ? (
        <div
          onClick={() => loadLocale("en")}
          className="rounded m-2 hover:drop-shadow-flag-blue cursor-pointer"
        >
          <img src="/uk_flag.png" alt="English" className={common + 'hover:drop-shadow-flag-blue'} />
        </div>
      ) : (
        <div
          onClick={() => loadLocale("es")}
          className="rounded m-2 hover:drop-shadow-flag-red cursor-pointer"
        >
          <img src="/spain_flag.png" alt="Spanish" className={common + 'hover:drop-shadow-flag-red'} />
        </div>
      )}
    </div>
  );
}

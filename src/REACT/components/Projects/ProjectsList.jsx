import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useI18n from "../../../hooks/useI18n";
import { initI18n } from "../../../i18n";
import { ProjectCard } from "./ProjectCard";

export const ProjectsList = ({ initialLocale, initialMessages }) => {
  const { t } = useI18n();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initI18n(initialLocale, initialMessages).then(() => setReady(true));
  }, [initialLocale, initialMessages]);

  /* 3️⃣  Hasta que esté listo, renderiza un placeholder ligero */
  if (!ready) {
    return <div style={{ height: "500px" }} />; // o un spinner
  }

  return (
    <motion.div
      className="
        margin-react py-12 mt-8
        flex flex-col  gap-8 
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-4xl md:text-6xl font-bold font-spaceGrotesk">
        {t("projectsTitle")}
      </h3>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 grid-flow-dense">
        {t("projects", { returnObjects: true }).map((project) => (
          <ProjectCard key={project.id} project={project} moreText={{ results: t('results'), seeLink: t('seeLink') }}/>
        ))}
      </section>
    </motion.div>
  );
};

import PageLayout from "@/components/PageLayout";
import ContentPage from "@/components/ContentPage";
import { sections } from "@/data/sections";

const s = sections.alumni;

const AlumniPage = () => (
  <PageLayout>
    <ContentPage title={s.title} subtitle={s.subtitle} icon={s.icon} items={s.items} accentText={s.accentText} gradient={s.gradient} basePath={s.basePath} />
  </PageLayout>
);

export default AlumniPage;

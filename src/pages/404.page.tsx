import { BasicLayout } from '#/layouts/BasicLayout';
import { useLocaleDictionary } from '#/hooks/useLocaleDictionary';

export default function Custom404() {
  const { t } = useLocaleDictionary();
  return (
    <BasicLayout pageTitle="Page Not Found">
      <h1 style={{ display: 'grid', placeItems: 'center', height: '100svh' }}>
        404 - {t.page_not_found}
      </h1>
    </BasicLayout>
  );
}
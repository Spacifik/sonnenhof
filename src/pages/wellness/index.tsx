import { EmptyPage } from "@sonnenhof/components/empty-page";
import { Layout } from "@sonnenhof/components/layout";

export default function Page(): JSX.Element {
  return (
    <Layout>
      <main>
        <EmptyPage />
      </main>
    </Layout>
  );
}

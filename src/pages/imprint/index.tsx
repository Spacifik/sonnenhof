import { Imprint } from "@sonnenhof/components/imprint";
import { Layout } from "@sonnenhof/components/layout";
import { imprint } from "@sonnenhof/data/imprint/imprint";

export default function ImprintPage() {
  return (
    <Layout>
      <main className="flex flex-col p-36">
        <Imprint {...imprint} />
      </main>
    </Layout>
  );
}

import { Layout } from "@sonnenhof/components/layout";
import { Text } from "@sonnenhof/components/text";
import { eula } from "@sonnenhof/data/eula/eula";

export default function EulaPage(): JSX.Element {
  return (
    <Layout>
      <main className="flex flex-col p-6 md:p-36">
        <Text variant="big-dark">AGB</Text>
        <ol className="list-decimal list-inside">
          {eula.paragraphs.map((paragraph, index) => (
            <li key={index} className="py-4">
              <Text variant="medium-dark">{paragraph}</Text>
            </li>
          ))}
        </ol>
      </main>
    </Layout>
  );
}

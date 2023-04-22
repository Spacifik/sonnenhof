import { Layout } from "@sonnenhof/components/layout";
import { Text } from "@sonnenhof/components/text";
import { eula } from "@sonnenhof/data/eula/eula";

export default function Eula(): JSX.Element {
  return (
    <Layout>
      <main className="flex flex-col p-36">
        <Text variant="big">AGB</Text>
        <ol className="list-decimal list-inside">
          {eula.paragraphs.map((paragraph, index) => (
            <li key={index} className="py-4">
              <Text variant="medium">{paragraph}</Text>
            </li>
          ))}
        </ol>
      </main>
    </Layout>
  );
}

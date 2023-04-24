import { Layout } from "@sonnenhof/components/layout";
import { Text } from "@sonnenhof/components/text";
import { imprint } from "@sonnenhof/data/imprint/imprint";


type Address = {
  name: string;
  street: string;
  zip: string;
};

type Contact = {
  phone: string;
  fax: string;
  email: string;
  website: string;
};

export interface ImprintProps {
  title: string;

  provider: Address;
  providerContact: Contact;

  editorial: Address;
}

export default function ImprintPage() {
  const {
    title,
    provider,
    providerContact,
    editorial,
  } = imprint;
 
  return (
    <Layout>
      <main className="flex flex-col p-6 md:p-36">
        <p>
          <Text variant="big-dark">{title}</Text>
        </p>
        <br />
        <p>
          <Text variant="medium-dark">Anbieter:</Text>
          <br />
          <Text variant="medium-dark">{provider.name}</Text>
          <Text variant="medium-dark">{provider.street}</Text>
          <Text variant="medium-dark">{provider.zip}</Text>
        </p>
        <br />
        <p>
          <Text variant="medium-dark">Kontakt:</Text>
          <br />
          <Text variant="medium-dark">{`Telefon: ${providerContact.phone}`}</Text>
          <Text variant="medium-dark">{`Telefax: ${providerContact.fax}`}</Text>
          <Text variant="medium-dark">{`E-Mail: ${providerContact.email}`}</Text>
          <Text variant="medium-dark">{`Website: ${providerContact.website}`}</Text>
        </p>
        <p />
        <br />
        <Text variant="medium-dark">Bei redaktionellen Inhalten:</Text>
        <br />
        <p>
          <Text variant="medium-dark">Verantwortlich nach § 55 Abs.2 RStV</Text>
          <br />
          <Text variant="medium-dark">{editorial.name}</Text>
          <Text variant="medium-dark">{editorial.street}</Text>
          <Text variant="medium-dark">{editorial.zip}</Text>
        </p>
      </main>
    </Layout>
  );
}

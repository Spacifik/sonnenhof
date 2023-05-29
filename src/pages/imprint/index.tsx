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
      <main className="flex flex-col p-6 md:p-36 bg-black">
        <p>
          <Text variant="big-primary">{title}</Text>
        </p>
        <br />
        <p>
          <Text variant="medium-primary">Anbieter:</Text>
          <br />
          <Text variant="medium-primary">{provider.name}</Text>
          <Text variant="medium-primary">{provider.street}</Text>
          <Text variant="medium-primary">{provider.zip}</Text>
        </p>
        <br />
        <p>
          <Text variant="medium-primary">Kontakt:</Text>
          <br />
          <Text variant="medium-primary">{`Telefon: ${providerContact.phone}`}</Text>
          <Text variant="medium-primary">{`Telefax: ${providerContact.fax}`}</Text>
          <Text variant="medium-primary">{`E-Mail: ${providerContact.email}`}</Text>
          <Text variant="medium-primary">{`Website: ${providerContact.website}`}</Text>
        </p>
        <p />
        <br />
        <Text variant="medium-primary">Bei redaktionellen Inhalten:</Text>
        <br />
        <p>
          <Text variant="medium-primary">Verantwortlich nach § 55 Abs.2 RStV</Text>
          <br />
          <Text variant="medium-primary">{editorial.name}</Text>
          <Text variant="medium-primary">{editorial.street}</Text>
          <Text variant="medium-primary">{editorial.zip}</Text>
        </p>
      </main>
    </Layout>
  );
}

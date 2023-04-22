import { Text } from "./text";

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

export function Imprint({
  title,
  provider,
  providerContact,
  editorial,
}: ImprintProps) {
  return (
    <>
      <p>
        <Text variant="big">{title}</Text>
      </p>
      <br />
      <p>
        <Text variant="medium">Anbieter:</Text>
        <br />
        <Text variant="medium">{provider.name}</Text>
        <Text variant="medium">{provider.street}</Text>
        <Text variant="medium">{provider.zip}</Text>
      </p>
      <br />
      <p>
        <Text variant="medium">Kontakt:</Text>
        <br />
        <Text variant="medium">{`Telefon: ${providerContact.phone}`}</Text>
        <Text variant="medium">{`Telefax: ${providerContact.fax}`}</Text>
        <Text variant="medium">{`E-Mail: ${providerContact.email}`}</Text>
        <Text variant="medium">{`Website: ${providerContact.website}`}</Text>
      </p>
      <p />
      <br />
      <Text variant="medium">Bei redaktionellen Inhalten:</Text>
      <br />
      <p>
        <Text variant="medium">Verantwortlich nach § 55 Abs.2 RStV</Text>
        <br />
        <Text variant="medium">{editorial.name}</Text>
        <Text variant="medium">{editorial.street}</Text>
        <Text variant="medium">{editorial.zip}</Text>
      </p>
    </>
  );
}

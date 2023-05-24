import { parseDateToIso } from "@sonnenhof/utils/parse-date-to-iso";
import { useDefaultBookingDates } from "@sonnenhof/utils/use-default-booking-dates";

export function MewsForm({
  children,
  className,
  addDefaultDates,
}: React.PropsWithChildren<{
  className?: string;
  addDefaultDates?: boolean;
}>): JSX.Element {
  const { from, to } = useDefaultBookingDates();
  return (
    <form
      className={className}
      method="GET"
      action="https://app.mews.com/distributor/9c4dca19-3942-46a3-8f37-affe006f4062"
      target="_blank"
    >
      <input
        className="hidden"
        name="mewsCityId"
        value="c4d8e6d4-da08-40f5-b95e-affe006ea0ef"
        readOnly
      />
      {addDefaultDates ? (
        <>
          <input
            className="hidden"
            name="mewsStart"
            value={from.toISOString().split("T")[0]}
            readOnly
          />
          <input
            className="hidden"
            name="mewsEnd"
            value={to.toISOString().split("T")[0]}
            readOnly
          />
        </>
      ) : null}
      {children}
    </form>
  );
}

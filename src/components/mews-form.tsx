


export function MewsForm({ children, className }: React.PropsWithChildren<{className: string}>): JSX.Element {

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
        {children}
      </form>
    );
}
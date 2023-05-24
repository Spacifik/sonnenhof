export function useDefaultBookingDates(): { from: Date; to: Date } {
  return {
    from: new Date(),
    to: (() => {
      const today = new Date();
      today.setDate(new Date().getDate() + 7);
      return today;
    })(),
  };
}

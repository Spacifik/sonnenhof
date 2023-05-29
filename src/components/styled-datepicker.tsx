import DatePicker, { ReactDatePickerProps } from "react-datepicker";

export function StyledDatepicker(props: ReactDatePickerProps): JSX.Element {
  return (
    <DatePicker {...props} calendarClassName="styled-datepicker-calendar" />
  );
}

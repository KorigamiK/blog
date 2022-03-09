import moment from "moment";

export default function convertDate(date_str: string) {
  const date = moment(date_str, "YYYY-MM-DD");
  return date.format("ddd MMMM Do, YYYY").toString();
}

import { parseISO, format } from 'date-fns';

export default function getCurrentMonth() {
  const date = new Date()
  
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = date.getFullYear();

  const today = parseISO(`${yyyy}-${mm}-${dd}`);

  const formattedDate = format(
    today,
    "MMMM dd'"
  );

  return formattedDate
}
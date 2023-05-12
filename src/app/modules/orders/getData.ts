import assignIds from './assignIds';
import parseOrders from './parseOrders';
import sortOrdersByDate from './sortOrdersByDate';

export default function getData() {
  const API_KEY = 'AIzaSyAM76kvRp9syivRBl4rbbF88IA9h4U4blU';

  const SPREADSHEET_ID = '1La-EJVOrNt3AwWHYvhuCQ5SRtFE9h_kYjgx0dau1HN4';

  // Discovery doc URL for APIs used by the quickstart
  const DATA_SHEET = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Orders?key=${API_KEY}`;

  return fetch(DATA_SHEET)
    .then((response) => response.json())
    .then((data) => assignIds(data.values))
    .then((data) => parseOrders(data.slice(1)))
    .then((data) => sortOrdersByDate(data));
}

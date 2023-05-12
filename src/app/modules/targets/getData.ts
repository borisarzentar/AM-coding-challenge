export default function getData() {
  const API_KEY = 'AIzaSyAM76kvRp9syivRBl4rbbF88IA9h4U4blU';

  const SPREADSHEET_ID = '1La-EJVOrNt3AwWHYvhuCQ5SRtFE9h_kYjgx0dau1HN4';

  // Discovery doc URL for APIs used by the quickstart
  const DATA_SHEET = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Targets?key=${API_KEY}`;

  return fetch(DATA_SHEET)
    .then((response) => response.json())
    .then((data) => data.values.slice(1))
    .then((data) =>
      data.reduce(
        (
          targets: { [key: string]: string },
          [month, target]: [string, string]
        ) => {
          const currencySign = target.replace(/[\d.,\s]*/g, '');
          const value = parseFloat(target.replace(/[^0-9,-]+/g, ''));

          return {
            ...targets,
            [month]: {
              value,
              currency: currencySign === '€' ? 'EUR' : '',
            },
          };
        },
        {}
      )
    );
}

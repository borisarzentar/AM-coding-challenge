import { v4 as uuidv4 } from 'uuid';

export default function assignIds(data: string[][]) {
  return data.map((dataRow: string[]) => {
    dataRow.unshift(uuidv4());

    return dataRow;
  });
}

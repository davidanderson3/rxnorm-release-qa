// js/tests/parserTest.js
import { parseRXNCONSO } from '../modules/parser.js';

export const name = 'Parser';
export async function run({ baseFile, compareFile, ui }) {
    // example: count rows, show in summary
    const baseCount = await parseRXNCONSO(baseFile);
    const compareCount = await parseRXNCONSO(compareFile);

    ui.appendSummary(`
    <tr>
      <td>Parser</td>
      <td>${baseCount} rows in base</td>
      <td>${compareCount} rows in compare</td>
    </tr>
  `);
}

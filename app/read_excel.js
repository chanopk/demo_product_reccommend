import { readFile } from 'fs/promises';
import * as XLSX from 'xlsx';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const filePath = process.argv[2];

if (!filePath) {
    console.error("Please provide a file path");
    process.exit(1);
}

try {
    const buffer = await readFile(filePath);
    const workbook = XLSX.read(buffer, { type: 'buffer' });

    console.log(`Workbook Sheets: ${workbook.SheetNames.join(', ')}`);

    workbook.SheetNames.forEach(sheetName => {
        const sheet = workbook.Sheets[sheetName];
        if (!sheet['!ref']) {
            console.log(`Sheet "${sheetName}" is empty.`);
            return;
        }
        const range = XLSX.utils.decode_range(sheet['!ref']);
        const rows = range.e.r - range.s.r + 1;
        const cols = range.e.c - range.s.c + 1;
        console.log(`\nSheet "${sheetName}": ${rows} rows, ${cols} columns`);

        // Get headers (first row)
        // Convert sheet to JSON array of arrays
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1, range: 0 }); // get all rows as array
        if (data.length > 0) {
            console.log(`  Headers (Row 1): ${JSON.stringify(data[0])}`);
            console.log(`  First 5 rows of data:`);
            data.slice(1, 6).forEach((row, index) => {
                console.log(`    Row ${index + 2}: ${JSON.stringify(row)}`);
            });
        }
    });

} catch (error) {
    console.error("Error reading file:", error);
    process.exit(1);
}

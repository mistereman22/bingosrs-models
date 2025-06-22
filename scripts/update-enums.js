import fetch from 'node-fetch';
import * as fs from "node:fs";
import * as path from "node:path";

async function writeEnum(filePath, enumName, dataUrl) {
    const response = await fetch(
        dataUrl,
        {
            headers: {
                'User-Agent': 'bingosrs-models - @mistereman22 on Discord'
            }
        }
    )
    const data = await response.json()
    let enumContent = `export enum ${enumName} {\n`;

    const nameCounts = {};

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const id = parseInt(key, 10);
            let name = data[key].name;

            // There are empty item names for some reason. Including them just in case they have any future use
            if (name.length === 0) {
                name = "UNKNOWN_" + id
            }

            let enumMemberName = name
                .toUpperCase()
                .replace(/ /g, '_')
                .replace(/[^a-zA-Z0-9_]/g, '')
                .replace(/^_|_$/g, '');

            // Prepend underscore if name starts with a number
            if (/^\d/.test(enumMemberName)) {
                enumMemberName = `_${enumMemberName}`;
            }

            if (nameCounts[enumMemberName]) {
                nameCounts[enumMemberName]++;
                // Double underscore to avoid conflict with items that already end in number (e.g. Ancient Page 2)
                enumMemberName = `${enumMemberName}__${nameCounts[enumMemberName]}`;
            } else {
                nameCounts[enumMemberName] = 1;
            }

            enumContent += `  ${enumMemberName} = ${id},\n`;
        }
    }

    enumContent += '}\n';

    const enumDir = path.dirname(filePath);
    if (!fs.existsSync(enumDir)) {
        fs.mkdirSync(enumDir, { recursive: true });
    }

    fs.writeFileSync(filePath, enumContent, 'utf8');
}

async function main() {
    await writeEnum('./src/enums/items.ts', 'EItem', 'https://raw.githubusercontent.com/DayV-git/osrsreboxed-db/data/docs/items-summary.json')
    await writeEnum('./src/enums/monsters.ts', 'EMonster', 'https://raw.githubusercontent.com/DayV-git/osrsreboxed-db/data/docs/monsters-complete.json')
}

await main()
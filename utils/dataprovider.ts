import fs, { Utf8Stream } from 'fs';
import {parse} from 'csv-parse/sync';
import * as XLSX from 'xlsx';

export class DataProvider
{
        static jsonreader (filepath:string)
        {
            let data:any = JSON.parse(fs.readFileSync(filepath,'utf8'));
            return data;
        }

        static csvreader(filepath:string)
        {
            let data:any = parse(fs.readFileSync(filepath),{columns:true, skip_empty_lines:true})
            return data;
        }

        static xlsxreader(filepath:string)
        {
            const excelpath = filepath;
            const workbook = XLSX.readFile(excelpath);
            const sheetNames = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetNames];

            let data = XLSX.utils.sheet_to_json(worksheet);
            return data;
        }
}
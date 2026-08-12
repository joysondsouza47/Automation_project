import fs from 'fs';
import {parse} from "csv-parse/sync";
import * as XLSX from 'xlsx';

export class dataprovider1
{
    static jsonreader(filepath:string)
    {
        let data = JSON.parse(fs.readFileSync(filepath,'utf8'));
        return data;
    }

    static csvreader(filepath:string)
    {
        let data = parse(fs.readFileSync(filepath),{columns:true,skip_empty_lines:true});
        return data;
    }
    static xlsxreader(filepath:string)
    {
        const excelfile = filepath;
        const workbook = XLSX.readFile(excelfile);
        const sheetNames = workbook.SheetNames[0];
        const worsheet = workbook.Sheets[sheetNames];

        let data = XLSX.utils.sheet_to_json(worsheet);
        return data;

    }


}
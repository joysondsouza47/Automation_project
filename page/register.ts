import {Page, Locator} from "@playwright/test"


export class RegistraionPage
{
    //private readonly page:Page;
    private readonly Username:Locator;
    private readonly Email:Locator;
    private readonly PhoneNo:Locator;
    private readonly Address:Locator;

    constructor (page:Page)
    {
        //this.page = page;
        this.Username = page.getByRole('textbox', { name: 'Enter Name' });
        this.Email = page.getByRole('textbox', { name: 'Enter EMail' });
        this.PhoneNo = page.getByRole('textbox', { name: 'Enter Phone' });
        this.Address = page.getByRole('textbox', { name: 'Address:' });
    }


    async getUsername(name:string)
    {
        await this.Username.fill(name);
    }
    async getEmailID(email:string)
    {
        await this.Email.fill(email);        
    }
    async getPhoneNumber(number:string)
    {
        await this.PhoneNo.fill(number);
    }
    async GetAddress(address:string)
    {
        await this.Address.fill(address)
    }
    async register(name:string,number:string,email:string,address:string)
    {
        await this.Username.fill(name);
        await this.Email.fill(email);   
        await this.PhoneNo.fill(number);
        await this.Address.fill(address)
    }
}
//done
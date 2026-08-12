import {Page,Locator} from "@playwright/test"


export class LoginPage
{
    private readonly page:Page;
    private readonly userName:Locator;
    private readonly password:Locator;
    private readonly login:Locator;
    private readonly itempage:Locator;
    private readonly errormsg:Locator
    
    
    constructor(page:Page)
    {
        this.page = page;
        this.userName = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByPlaceholder('Password');
        this.login = page.getByRole('button');
        this.itempage = page.getByText('Products', { exact: true })
        this.errormsg = page.locator('[data-test="error"]')
    }

    async getUserName(username:string)
    {
        await this.userName.fill(username);
    }

    async getPassword(password:string)
    {
        await this.password.fill(password);
    }
    async Loginbutton()
    {
        await this.login.click();
    }

    async itemPage():Promise<boolean>
    {
        return await this.itempage.isVisible();
    }

    async errorMessage():Promise<boolean>
    {
        return await this.errormsg.isVisible();
    }
}
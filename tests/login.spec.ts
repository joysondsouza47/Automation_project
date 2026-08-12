import {test, expect} from "@playwright/test"
import {TestConfig} from "../test.config";
import {LoginPage} from "../page/loginpage"
import {DataProvider} from "../utils/dataprovider";

let testconfig:TestConfig;
let loginpage:LoginPage;

test.beforeEach("Page URL",async({page})=>
{
     testconfig = new TestConfig();
     await page.goto(testconfig.appurl);

     loginpage = new LoginPage(page);
     //const dataprovider = new DataProvider();
})


for(const data of DataProvider.jsonreader("testdata/logindata.json"))
{
    test(`Testlogin json ${data.testName} `,async({page})=>
    {
        await loginpage.getUserName(data.email);
        await loginpage.getPassword(data.password);
        await loginpage.Loginbutton();
        if(data.expected==="success")
        {
            expect(await loginpage.itemPage()).toBeTruthy();
            console.log("login successful")
        }
        else
        {
            expect(await loginpage.errorMessage()).toBeTruthy();
            console.log("login unsuccessful")
        }

    })
}

for(const data of DataProvider.csvreader("testdata/logindata.csv"))
{
    test(`Testlogin csv ${data.testName} `,async({page})=>
    {
        await loginpage.getUserName(data.username);
        await loginpage.getPassword(data.password);
        await loginpage.Loginbutton();
        if(data.expected==="success")
        {
            expect(await loginpage.itemPage()).toBeTruthy();
            console.log("login successful")
        }
        else
        {
            expect(await loginpage.errorMessage()).toBeTruthy();
            console.log("login unsuccessful")
        }

    })
}


import{test,expect} from "@playwright/test"
import {RegistraionPage} from "../page/register"
import {TestConfig} from "../test.config"
import {RandomDataGenerator} from  "../utils/RandomValueGenerator"

let testconfig:TestConfig;
let registrationpage:RegistraionPage;
let randomdatagenerator:RandomDataGenerator;

 

test.beforeEach("Application URL Access", async({page})=>
{
     testconfig = new TestConfig();
     const appurl:string = testconfig.appurl;
     registrationpage = new RegistraionPage(page);
     randomdatagenerator = new RandomDataGenerator();
     await page.goto(appurl);
})

test("Registration",async({page})=>
{
    await registrationpage.getUsername(RandomDataGenerator.getRandomName());
    await registrationpage.getEmailID(RandomDataGenerator.getRandomEmail());
    await registrationpage.getPhoneNumber(RandomDataGenerator.getRandomNumber());
    await registrationpage.GetAddress(RandomDataGenerator.getAddress());
    await page.screenshot({ path: 'screenshots/Registration.png' , fullPage:true});
})



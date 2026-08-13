import {faker} from "@faker-js/faker";


export class RandomDataGenerator
{


    static getRandomName()
    {
        return faker.person.fullName();
    }

    static getRandomEmail()
    {
        return faker.internet.email();
    }
    static getRandomNumber()
    {
        return faker.phone.number({style:"mobile"});
    }
    static getAddress()
    {
        return faker.location.postalAddress();
    }


}
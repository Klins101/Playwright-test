import { Page } from '@playwright/test'
import {test, expect} from '@playwright/test'

export default class Form{
    page : Page;
    firstName = "#firstName";
    lastName = "#lastName";
    userEmail = "#userEmail";

    constructor(page : Page){
        this.page = page;

    }
    async navigate(url : string){
        await this.page.goto(url);
    }
    async enterFirstName(fName : string){
        await this.page.locator(this.firstName).type(fName);
    }
    async enterLastName(lName : string){
        await this.page.locator(this.lastName).type(lName);
    }
    async checkFirstName(fName:string){
        await expect(this.page.locator(this.firstName)).toContainText(fName);
    }
}
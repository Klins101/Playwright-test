import {test, expect} from '@playwright/test';
import Form from '../pages/formPage';

test('has title', async ({ page }) => {
    const form = new Form(page);
    const pageUrl = 'https://demoqa.com/automation-practice-form';
    await form.navigate(pageUrl);
    await form.enterFirstName("Klinsmann");
    await form.enterLastName("Agyei");

    expect(page.url()).toBe(pageUrl);
   // await form.checkFirstName("Klinsmann");

  
   
  });
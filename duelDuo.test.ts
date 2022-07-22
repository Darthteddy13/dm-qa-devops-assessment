
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test(`Clicking draw button displays card choices`, async () => 
{   
    await driver.findElement(By.id(`draw`)).click()

    expect(await driver.findElement(By.id(`choices`)).isDisplayed()).toBe(true);
})

test(`Clicking see all bots button displays all bots`, async () =>
{
    await driver.findElement(By.id(`see-all`)).click()

    expect(await driver.findElement(By.id(`all-bots`)).isDisplayed()).toBe(true);
})
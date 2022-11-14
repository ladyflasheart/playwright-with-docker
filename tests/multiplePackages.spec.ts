import endpoint from "./configTypes"
import { test, expect } from '@playwright/test'

test("Expect to have Basic and Premium packages for subscription", async ({ page }) => {

    // Go to the Droplets product page of DigitalOcean web page
    await page.goto(endpoint.DIGITAL_OCEAN_URL);

    // Wait for the page to load
    await page.waitForLoadState('networkidle');

    // Check Basic Package listed (Basic and Premium)
    await expect(page.locator('.CPUInfoStyles__StyledLeftCpuInfo-sc-ooo7a2-4')).toHaveText(/Basic.*/);
    await expect(page.locator('.CPUInfoStyles__StyledLeftCpuInfo-sc-ooo7a2-4')).toHaveText(/Premium/);

});

import { $$, browser } from '@wdio/globals'
import Page from './page.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get HellowWorld () {
        return $$('#finish')
    }

    //code correction as supplied in comment https://github.com/webdriverio/webdriverio/discussions/12001#discussioncomment-8125341
    async waitUntilArrayNotEmpty(webElementArray, timeout = 15000, timeoutMsg = '') {
        await browser.waitUntil(
            async () => (await $$(webElementArray.selector)).length >= 1,
            { timeout, timeoutMsg }
        )
    }

}

module.exports = new LoginPage()

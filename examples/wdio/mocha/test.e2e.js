import { browser } from '@wdio/globals'
// const LoginPage = require('../pageobjects/login.page')
import LoginPage from '../pageobjects/login.page.js'

describe('dynamic loading', () => {

    beforeEach('tests dynamic loading', async () => {
        await LoginPage.open('dynamic_loading')
        await browser.$('//*[@id="content"]/div/a[2]').click()
        await browser.$('//*[@id="start"]/button').click()
    })

    it('tests dynamic loading', async () => {

        await browser.waitUntil(
            async () => await LoginPage.HellowWorld[0].getText() === 'Hello World!',
            {
                timeout: 15000,
                timeoutMsg: 'expected text to appear'
            }
        )
    })
    it('tests dynamic loading length', async () => {
        await browser.waitUntil(
            async () => await LoginPage.HellowWorld.length >= 1,
            {
                timeout: 15000,
                timeoutMsg: 'expected text to appear'
            }
        )
    })

    it('tests dynamic loading length to function ', async () => {
        await LoginPage.waitUntilArrayNotEmpty(
            await LoginPage.HellowWorld,
            15000,
            'expected the array to have some records')
    })
})


/*var assert = require('chai').assert
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

var chaiExpect = require('chai').expect
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
*/
import { expect as chaiExpect } from 'chai';
import { assert } from 'chai';
import beautyUndGesundData from '../resources/beautyUndGesundData';
//import beautyUndGesundheit from '../pageobjects/beautyUndGesundheit.page';

const beautyUndGesundheit = require('../pageobjects/beautyUndGesundheit.page');

describe('beauty page', () => {
    before(() => {
        beautyUndGesundheit.open();
    });

    it('open the fashion link', () => {
        expect(browser).toHaveTitle(beautyUndGesundData.title);
    });

    it('verify that the banner is displayed', () => {
        expect(beautyUndGesundheit.bannerElement).toBeDisplayed();
    });

    it('should show the banner title', () => {
       expect(beautyUndGesundheit.titleElement).toHaveText(beautyUndGesundData.bannerText);
    });

    it('verify gutschein btn', () => {
        expect(beautyUndGesundheit.gutscheinBtn).toHaveLinkContaining(beautyUndGesundData.urlSalePart);
    });

    it('verify that GutscheinBtn is clickable', () => {
        expect(beautyUndGesundheit.gutscheinBtn).toBeClickable;

        const tagType = beautyUndGesundheit.gutscheinBtn.getTagName();
        chaiExpect(tagType).to.equal('a');
    });

    it('redirecting to the target url', () => {
        beautyUndGesundheit.gutscheinBtn.click();
        assert.equal(browser.getUrl(), 'https://www.ebay.de/b/Sale/bn_7109748158', "wrong url assertion");
        chaiExpect(browser.getUrl()).to.include(beautyUndGesundData.urlSalePart);
        assert.include(browser.getUrl(), beautyUndGesundData.urlSalePart, "link does not include Sale");
        expect(browser).toHaveUrl('https://www.ebay.de/b/Sale/bn_7109748158');
    });
});
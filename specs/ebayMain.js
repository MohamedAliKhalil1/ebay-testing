import { expect as chaiExpect , assert} from 'chai';
import ebayMainPage from '../pageobjects/ebayMain.page';

describe('open the Fashion link', () => {
    before ( () => {
        ebayMainPage.open();
    });
    it('Fashion link should open', () => {
        ebayMainPage.fashionElement.moveTo();
        ebayMainPage.beautyUndGesundeitAnchor.waitForDisplayed(1000);
        ebayMainPage.beautyUndGesundeitAnchor.click();
        chaiExpect(browser.getUrl()).to.include('Beauty-Gesundheit');
    });
});
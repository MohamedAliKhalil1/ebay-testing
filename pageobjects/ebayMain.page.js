const Page = require ('./page.js');

class mainPage extends Page {

    get fashionElement () { return $$ ('.hl-cat-nav__js-tab a[href*="Fashion/"]') [0]; }
    get beautyUndGesundeitAnchor () { return $ ('.hl-cat-nav__sub-cat-col a[href*="Beauty"]'); }
    get flyoutBanner () { return $$ ('.hl-cat-nav__flyout') [0]; }

    open () {
        return super.open('/');
    }
}

module.exports = new mainPage ();
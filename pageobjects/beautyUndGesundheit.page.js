const Page = require('./page');

class BeautyUndGesundheit extends Page {

    get bannerElement () { return $('section.b-promobanner'); }

    get titleElement () { return $('div.b-promobanner__info h2'); }

    get gutscheinBtn () { return $('.b-promobanner__info-btn'); }

    open() {
        return super.open('b/Beauty-Gesundheit/26395/bn_1845105');
    }
}

module.exports = new BeautyUndGesundheit();
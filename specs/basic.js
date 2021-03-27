describe('search about Laptop in ebay', () => {
    it('open ebay website', () => {
        browser.url('https://www.ebay.de/');
        expect(browser).toHaveTitleContaining('Elektronik, Autos, Mode, Sammlerstücke, Möbel und mehr Online-Shopping | eBay');
    });

    it('should search for the product and verify the text value', () => {
        const searchField = $('#gh-ac');
        const searchBtn = $('#gh-btn');

        searchField.setValue('laptop');
        searchBtn.click();

        expect(searchField).toHaveValue('laptop');
    });

    it('it should redirect to a new page and verify the page title', () => {
        expect(browser).toHaveTitle('laptop | eBay');
    });

    it('it should update the search category', () => {
        const dropMenu = $('#gh-cat :nth-child(1)');
        expect(dropMenu).toHaveText('PC Notebooks & Netbooks');
    });

});
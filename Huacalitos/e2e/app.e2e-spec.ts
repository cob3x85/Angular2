import { HuacalitosPage } from './app.po';

describe('huacalitos App', function() {
  let page: HuacalitosPage;

  beforeEach(() => {
    page = new HuacalitosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

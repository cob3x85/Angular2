import { JipsSitePage } from './app.po';

describe('jips-site App', () => {
  let page: JipsSitePage;

  beforeEach(() => {
    page = new JipsSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

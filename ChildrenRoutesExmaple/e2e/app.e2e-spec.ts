import { ChildrenRoutesExmaplePage } from './app.po';

describe('children-routes-exmaple App', () => {
  let page: ChildrenRoutesExmaplePage;

  beforeEach(() => {
    page = new ChildrenRoutesExmaplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

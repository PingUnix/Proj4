import { Proj4Page } from './app.po';

describe('proj4 App', function() {
  let page: Proj4Page;

  beforeEach(() => {
    page = new Proj4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { YangshaoboPage } from './app.po';

describe('yangshaobo App', () => {
  let page: YangshaoboPage;

  beforeEach(() => {
    page = new YangshaoboPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

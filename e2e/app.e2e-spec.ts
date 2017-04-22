import { Angular4typescriptSamplePage } from './app.po';

describe('angular4typescript-sample App', () => {
  let page: Angular4typescriptSamplePage;

  beforeEach(() => {
    page = new Angular4typescriptSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

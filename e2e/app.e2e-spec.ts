import { MehPage } from './app.po';

describe('meh App', () => {
  let page: MehPage;

  beforeEach(() => {
    page = new MehPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

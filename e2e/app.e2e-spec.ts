import { RockPaperPage } from './app.po';

describe('rock-paper App', () => {
  let page: RockPaperPage;

  beforeEach(() => {
    page = new RockPaperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

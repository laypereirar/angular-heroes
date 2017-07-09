import { Teste3Page } from './app.po';

describe('teste3 App', () => {
  let page: Teste3Page;

  beforeEach(() => {
    page = new Teste3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

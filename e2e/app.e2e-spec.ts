import { SimpleAppoloClientTablePage } from './app.po';

describe('simple-appolo-client-table App', () => {
  let page: SimpleAppoloClientTablePage;

  beforeEach(() => {
    page = new SimpleAppoloClientTablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

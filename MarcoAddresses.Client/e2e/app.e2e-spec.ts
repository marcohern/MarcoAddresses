import { MarcoAddresses.ClientPage } from './app.po';

describe('marco-addresses.client App', () => {
  let page: MarcoAddresses.ClientPage;

  beforeEach(() => {
    page = new MarcoAddresses.ClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

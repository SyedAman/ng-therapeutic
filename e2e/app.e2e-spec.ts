import { NgTherapeuticPage } from './app.po';

describe('ng-therapeutic App', function() {
  let page: NgTherapeuticPage;

  beforeEach(() => {
    page = new NgTherapeuticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import baseUrl from '../utils/helpers';

describe('Cypress', () => {
  beforeEach(() => {
    cy.visit('/zenn_article');
  });

  it('レンダリング内容が正しく表示されてること', () => {
    cy.contains('Zenn Article');
  });

  it('「Zenn」押下時、「Zenn」記事一覧画面へ遷移すること', () => {
    cy.get('[data-cy=backHomeLink]').click();
    cy.url().should('eq', `${baseUrl}/`);
  });
});

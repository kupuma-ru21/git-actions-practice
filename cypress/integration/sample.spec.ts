const baseUrl = Cypress.config().baseUrl as string;

describe('Cypress', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('レンダリング内容が正しく表示されてること', () => {
    cy.contains('GitHub');
    cy.contains('Zenn');
  });

  it('「Zenn」押下時、「Zenn」記事一覧画面へ遷移すること', () => {
    cy.get('[data-cy=zennArticleLink]').click();
    cy.url().should('eq', `${baseUrl}/zenn_article`);
  });
});

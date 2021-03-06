import { fireEvent, render, RenderResult } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from 'app/home';

type SutTypes = { sut: RenderResult; history: MemoryHistory };

const makeSut = (): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] });
  const sut = render(
    <Router history={history}>
      <App />
    </Router>
  );

  return { sut, history };
};

describe('ホーム', () => {
  test('レンダリング内容が正しく表示されてること', () => {
    const { sut } = makeSut();
    sut.getByText('GitHub');
    sut.getByText('Zenn');
  });

  test('「Zenn」押下時、「Zenn」記事一覧画面へ遷移すること', () => {
    const { sut, history } = makeSut();
    fireEvent.click(sut.getByText('Zenn'));
    expect(history.location.pathname).toBe('zenn_article');
  });
  test('「Zenn」押下時、「Zenn」記事一覧画面へ遷移すること', () => {
    const { sut, history } = makeSut();
    fireEvent.click(sut.getByText('Zenn'));
    expect(history.location.pathname).toBe('zenn_article');
  });
});

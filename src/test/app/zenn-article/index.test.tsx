import { render, RenderResult } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import ZennArticle from 'app/zenn-article';

type SutTypes = { sut: RenderResult; history: MemoryHistory };

const makeSut = (): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] });
  const sut = render(
    <Router history={history}>
      <ZennArticle />
    </Router>
  );

  return { sut, history };
};

describe('「Zenn」記事一覧画面', () => {
  test('レンダリング内容が正しく表示されてること', () => {
    const { sut } = makeSut();
    sut.getByText('Zenn Article');
  });
});

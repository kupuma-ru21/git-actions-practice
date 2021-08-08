import { render, RenderResult } from '@testing-library/react';
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
});

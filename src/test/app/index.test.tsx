import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from 'app/home';

const makeSut = () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });
  return render(
    <Router history={history}>
      <App />
    </Router>
  );
};

describe('ホーム', () => {
  test('レンダリング内容が正しく表示されてること', () => {
    const { getByText } = makeSut();
    getByText('GitHub');
    getByText('Zenn');
  });
});

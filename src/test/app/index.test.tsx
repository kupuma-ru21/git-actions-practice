import { render } from '@testing-library/react';
import App from 'app/home';

describe('ホーム', () => {
  test('レンダリング内容が正しく表示されてること', () => {
    const { getByText } = render(<App />);
    getByText('GitHub');
    getByText('Zenn');
  });
});

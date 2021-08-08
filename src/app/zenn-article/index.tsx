import { Link } from 'react-router-dom';

const ZennArticle = () => {
  return (
    <div>
      <h2>Zenn Article</h2>

      <Link to="/">
        <h4>Homeに戻る</h4>
      </Link>
    </div>
  );
};

export default ZennArticle;

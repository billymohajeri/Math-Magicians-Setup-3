import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navi from '../components/Navi';

it('renders correctly', () => {
  const navi = renderer
    .create(
      <Router>
        <Navi />
      </Router>,
    )
    .toJSON();
  expect(navi).toMatchSnapshot();
});

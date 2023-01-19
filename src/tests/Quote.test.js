import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

it('renders correctly', () => {
  const testQuote = renderer.create(<Quote />).toJSON();
  expect(testQuote).toMatchSnapshot();
});

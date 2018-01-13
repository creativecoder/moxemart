import {} from 'jest';
import { shallow } from 'enzyme';
import Link from 'next/link';
import Layout from './Layout';

describe('Layout component', () => {
  const Child = () => <div />;

  it('renders a meta title', () => {
    const title = 'my pretty page';
    const layout = shallow(
      <Layout title={title}>
        <Child />
      </Layout>,
    );
    expect(layout.find('title').text()).toBe(title);
  });

  it('links to other pages', () => {
    const layout = shallow(
      <Layout>
        <Child />
      </Layout>,
    );
    expect(layout.find(Link).length).toBeGreaterThan(0);
  });

  it('renders child components', () => {
    const layout = shallow(
      <Layout>
        <Child />
        <Child />
      </Layout>,
    );
    expect(layout.find(Child).length).toBe(2);
  });
});

import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock as props } from './mock';

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.cover);
    expect(screen.getByRole('heading', { name: `${props.id} ${props.title}` })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.childNodes).toMatchSnapshot();
  });
});

import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../utils';
import { BugReportBubble } from '../../components/BugReportBubble';

describe('BugReportBubble', () => {
  it('renders the floating bug button', () => {
    render(<BugReportBubble />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('opens contact panel when bubble is clicked', async () => {
    const user = userEvent.setup();

    render(<BugReportBubble />);
    await user.click(screen.getByRole('button'));

    expect(screen.getByText('联系微信：18561827151')).toBeInTheDocument();
    expect(screen.getByText('联系邮箱：sunbh23@mail2.sysu.edu.cn')).toBeInTheDocument();
  });

  it('closes panel when close button is clicked', async () => {
    const user = userEvent.setup();

    render(<BugReportBubble />);
    await user.click(screen.getByRole('button'));
    await user.click(screen.getByLabelText(/close/i));

    await waitFor(() => {
      expect(screen.queryByText('联系微信：18561827151')).not.toBeInTheDocument();
    });
  });
});

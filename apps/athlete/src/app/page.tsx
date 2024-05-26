'use client';

import { redirect } from 'next/navigation';
import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

export default function Index() {
  const handleClick = () => {redirect(`/home`);};
  return (
    <StyledPage>
      <form>
        <input type="text" placeholder="نام کاربری" />
        <input type="password" placeholder="رمز عبور" />
        <button type="button" onClick={handleClick()}>
          Login
        </button>
      </form>
    </StyledPage>
  );
}

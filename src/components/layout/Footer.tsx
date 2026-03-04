import React from 'react';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer
      className="neo-border border-b-0 border-x-0 bg-transparent"
      style={{
        marginTop: 0,
        borderTop: 'none',
      }}
    >
      <Container>
        <div className="py-8 flex justify-center items-center">
          <p className="font-black text-lg">
            © {new Date().getFullYear()} OLAEMPIRE.DEV ALL RIGHTS RESERVED.
          </p>
        </div>
      </Container>
    </footer>
  );
}
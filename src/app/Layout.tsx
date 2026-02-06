import '@/app/styles/globals.scss';
import { Footer, Menu } from '@/widgets';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='app'>
      <Menu />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

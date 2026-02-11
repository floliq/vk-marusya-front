import '@/app/styles/globals.scss';
import { Footer } from '@/widgets/footer';
import { Menu } from '@/widgets/menu';

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

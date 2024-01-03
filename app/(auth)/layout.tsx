import Header from './components/Header';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = async ({ children }) => {
  return (
    <>
      <Header />
      <div className="h-screen grid grid-cols-1 lg:grid-cols-3">
        <div className="hidden lg:block lg:col-span-1">
          <img
            className="h-screen object-cover object-left"
            src="/image/foodely-app.jpeg"
            alt="auth background image"
          />
        </div>
        <div className="lg:col-span-2 grid place-content-center">{children}</div>
      </div>
    </>
  );
};

export default AuthLayout;

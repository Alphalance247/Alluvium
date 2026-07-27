const Container = ({ children, className, ...props }) => {
  return (
    <div
      className={
        className + " max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-16 lg:py-24"
      }
    >
      {children}
    </div>
  );
};

export default Container;

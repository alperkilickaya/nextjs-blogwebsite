import MainNavigaiton from "./main-navigation";
const Layout = (props) => {
  return (
    <>
      <MainNavigaiton />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;

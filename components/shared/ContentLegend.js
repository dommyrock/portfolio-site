//redo with foward ref -so parent has acces to this components ref dirrectly
//https://reactjs.org/docs/forwarding-refs.html

//my sample from current portfolio app
//https://github.com/dommyrock/gh-deploy/blob/master/src/components/SyntaxHighlighter/tables/HoverableTableExample.jsx

const ContentLegend = React.forwardRef((props, ref) => {
  return (
    <nav ref={ref}>
      <li>One </li>
      <li>two </li>
      <li>three </li>
      <li>One </li>
    </nav>
  );
});
export default ContentLegend;

//usage
// You can now get a ref directly to the DOM button:
// const ref = React.createRef();
// <FancyButton ref={ref}>Click me!</FancyButton>;

//info https://stackoverflow.com/questions/58341787/intersectionobserver-with-react-hooks

//hook examples:
//https://dev.to/producthackers/intersection-observer-using-react-49ko
//https://github.com/onderonur/react-intersection-observer-hook

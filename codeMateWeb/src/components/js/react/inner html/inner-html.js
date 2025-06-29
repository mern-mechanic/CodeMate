/*

- How to use innerHTML in React?

  The dangerouslySetInnerHTML attribute is React's replacement for using innerHTML in the browser DOM. Just like innerHTML, it is risky to use this attribute considering cross-site scripting (XSS) attacks. You just need to pass a __html object as key and HTML text as value.

  In this example MyComponent uses dangerouslySetInnerHTML attribute for setting HTML markup:

  function createMarkup() {
    return {__html: '<style>p{color: red;}</style><p>First &middot; Second</p>'};
  }

  function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />
  }

*/
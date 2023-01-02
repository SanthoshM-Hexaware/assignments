import React from 'react';
import { render } from 'react-dom';

const Hello = ({ name }) => <h1>This is {name}!</h1>;


function simpleHOC(WrappedComponent) {
 
  return class extends React.Component{
    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }
}

const NewComponent = simpleHOC(Hello);

const App = () =>
  <div>
    <NewComponent name="Higherordercomponent" />
  </div>;

render(<App />, document.getElementById('root'));

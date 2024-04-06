import React from 'react';

const WithPropsProxy = (WrappedComponent) => {
	return function (props) {
		const newProps = {
			Name: 'High order component',
			Topic: 'ReactJs',
			Level: 'easy'
		};
		return <WrappedComponent {...props}
			{...newProps} />;
	};
};

// Define a simple functional component
const MyComponent = (props) => {
    return (
      <div>
        <p>Name: {props.Name}</p>
        <p>Topic: {props.Topic}</p>
        <p>Level: {props.Level}</p>
      </div>
    );
  };
  
  // Wrap MyComponent with the WithPropsProxy HOC
  const EnhancedComponent = WithPropsProxy(MyComponent);

export default EnhancedComponent;
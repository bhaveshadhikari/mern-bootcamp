import React from "react";

const Auth = () => {
  // logic -> token ?? navigate to dashboard
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    console.log("After Render ----  2");
    
    // mount vaye paxi ko logic
    return () => {
      console.log("After Unmount --- 4");
      //unmount huda ko logic
    };
  });

  React.useEffect(() => {
    //tyo value update //vayepaxi ko logic
    console.log("After Error Update --- 3");
    if (error) navigate("/error");
  }, [
    error,
    // kun value lai listen garera basne
  ]);

  // release such task that leaks memory or does heavy lifting processing
  return (
    <div>
      {console.log("Component Rendered --- 1")}
      {/* eventlistener, animation logic GPU load, setInterval <- */}
      <h1>Auth</h1>
    </div>
  );
};

export default Auth;

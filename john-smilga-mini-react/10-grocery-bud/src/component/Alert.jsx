import React , {useEffect }from 'react'

function Alert({ msg, color, removeAlert, list }) {
  console.log("alert");
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("from setTimeOut");
      removeAlert();
    }, 3000);
    // return () => clearTimeout(timeout);
  }, [list]);

  return <p className={`alert alert-${color}`}>{msg}</p>;
}

export default Alert
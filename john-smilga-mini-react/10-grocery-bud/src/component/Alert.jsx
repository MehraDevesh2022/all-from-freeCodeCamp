import React , {useEffect }from 'react'

function Alert({ msg, color, removeAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return <p className={`alert alert-${color}`}>{msg}</p>;
}

export default Alert
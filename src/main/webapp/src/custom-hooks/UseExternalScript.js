// // import { useEffect } from 'react';
// //
// // const UseExternalScript = url => {
// //     useEffect(() => {
// //         const script = document.createElement('script');
// //         script.src = url;
// //         script.async = true;
// //         document.body.appendChild(script);
// //         return () => {
// //             document.body.removeChild(script);
// //         };
// //     }, [url]);
// // };
// //
// // export default UseExternalScript;
//
// const LoadExternalScript = (url, callBack) => {
//     const script = document.createElement('script');
//     script.src = url;
//     script.async = true;
//     document.body.appendChild(script);
//
//     callBack();
//
// };
//
// export default LoadExternalScript;
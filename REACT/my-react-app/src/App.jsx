// import { useState } from 'react'

// function ParentComponent() {
//   const [name, setName] = useState('John')

//   return(
//     <>
//       <h1>Parent Component</h1>
//       <p>Name: {name}</p>
//       <button onClick={() => setName('Joe')}>Change Name</button>
//     </>
//   )
// }

// export default ParentComponent




// import { useState } from 'react';

// export default function App(){
//     const [name, setName] = useState('John');

//     return(
//         <div>
//             <h2>Parent Component</h2>

//             {/* Show current in parent */}
//             <p>Current name: {name}</p>
            

//             {/* Pass STATE and SETTER TO child */}
//             <ChildComponent name={name} setName={setName}/>
//         </div>
//     );
// }


// function ChildComponent(props){
//     return(
//         <>
//             <h3>child Component</h3>

//             {/* Read the passed state */}
//             <h1>Hello {props.name}</h1>

//             {/* Update parent's state from the child */}
//             <button onClick={ () => props.setName("Joe")}>
//                 Change Name
//             </button>

//         </>
//     );
// }


// export default function App({ user }) {
//   // If user is logged in, show Logout button
//   if (user) {
//     return <button>Logout</button>;
//   }

//   // If user is not logged in, show Login button
//   return <button>Login</button>;
// }


// import { useState } from 'react';

// export default function App() {
//     const [user, setUser] = useState(null);

//     if(user){
//         return (
//             <div>
//                 <h2>Welcome, {user}!</h2>
//                 <button onClick={() => setUser(null)}>Logout</button>
//             </div>
//         );
//     }

//     return (
//         <div>
//             <h2>Please log in</h2>
//             <button onclick={() => setUser("John")}>Login</button>
//         </div>
//     );
// }

// function App({ user }) {
//     let button = <button>Login</button>

//     if (user){
//         button = <button>Logout</button>
//     }

//     return(
//         <>
//             <h1>Hello there!</h1>

//             {/* only this part changes */}
//             {button}
//         </>
//     )
// }

// export default App;

// function App(){
//     const newEmails = 2;

//     return(
//         <> 
//             <h1>Hello React...!</h1>

//             {
//                 newEmails > 0 &&
//                 <h2>
//                     You have {newEmails} new emails in your inbox
//                 </h2>
//             }

//         </>
//     )
// }
// export default App;

// function App(props) {
//     const { user } = props;

//     return(
//         <> 
//             <h1>Hello React...</h1>

//             { user ? ( <button>Logout</button>) : ( <button>Login</button> )}
//         </>
//     );
// }

// export default App;

// function App() {

//         const handleClick = (num) => {
//             alert("Successfully submited...." + num)
//             // console.log("Button was clicked!");
//             // console.log(event)
//     };

//     return(
//         <button onClick={handleClick.bind(null, 42)}>
//             Click me
//        </button>
//     );
// }
// export default App;


// function App() {

//   const handleClick = (event) => {
//     console.log("Button was clicked!");
//     console.log(event); // This is the Synthetic Event object
//   };

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }

// export default App;



// import { useState } from 'react';

// // The function App is a React component that manages all the behind the scene activities of React.

// function App(){
//     const [isParagraphVisible, setIsParagraphVisible] = useState(true);

//     const toggleStatus = () => {
//         setIsParagraphVisible(!isParagraphVisible);
//     }

//     return(
//         <>
//             <h1>Change UI based on click</h1>

//             {/* Acts based on the directive given by the 'isParagraphVisible' state within the button */}
            
//             { isParagraphVisible && (
//                 <p>This paragraph will be shown/hidden on click</p>
//             )}
            

//             {/* Paragraph Switch innerHTML of button between "Hide" & "Show" and also switch the content of the paragraph */}

//             <button onClick={toggleStatus}>
//                 {isParagraphVisible ? 'Hide': 'Show'} paragraph
//             </button>    
//         </>
//     )
// }

// export default App;


// INLINE CSS EXAMPLE
// import React from "react";

// const pStyle = {
//     fontSize: "16px",
//     color: "blue",
// };

// export default function App(){
//     return (
//         <>
//             {/* Basic inline style */}
//             <h1 style={{color: "red"}}>Hello World</h1>

//             {/* Using the style object */}
//             <p style={pStyle}>This is a blue paragraph</p>

//             {/* Extendong styles with spread */}
//             <p style={{...pStyle, color: "green", textAlign:"center"}}>
//                 This paragraph overides some styles.
//             </p>
//         </>
//     )
// }

// CSS FILE EXAMPLE

// import './style.css';

// export default function App(){
//     return (
//         <p className="paragraph-text">
//             The weather is sunny today.
//         </p>
//     );
// }

// CSS MODULES EXAMPLE

// import styles from "./style.module.css";

// export default function App(){
//     return (
//         <>
//             <p className={styles.BlueParagraph}>
//                 The Weather is sunny today
//             </p>

//             <p className={styles.GreenParagraph}>
//                 Still, don't forget your umbrella!
//             </p>
//         </>
//     );
// }

 
// TAILWIND CSS

// import './style.css'; //Note that the line -- @import "tailwindcss" -- must have been added to your styles.css file;

// export default function App(){
//     return (
//         <>
//             <p className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
//                 The Weather is sunny today
//             </p>

//             <p className="bg-white shadow-xl p-6 rounded-2xl w-80 text-center">
//                 Still, don't forget your umbrella!
//             </p>
//         </>
//     );
// }


// Chapter 8: How to Build Forms in React


// import { useState } from 'react';

// function App() {
//   const [username, setUsername] = useState('');
//   const [usernameError, setUsernameError] = useState('');

//   const handleUsername = (e) => {
//     const value = e.target.value;
//     setUsername(value);

//     if (value.length <= 6) {
//       setUsernameError('Username must be more than 6 characters');
//     } else {
//       setUsernameError('');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (usernameError) {
//       alert('Fix errors before submitting');
//     } else {
//       alert(`Submitted username: ${username}`);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={username}
//         onChange={handleUsername}
//         placeholder="Enter username"
//       />
//       <p>{usernameError}</p>
//       <button>Submit</button>
//     </form>
//   );
// }

// export default App;

// import { useState } from 'react';

// function App(){
//     const [username, setUsername] = useState('');
//     const [usernameError, setUsernameError] = useState('');

//     const handleUsername = (e) =>{
//         const value = e.target.value;
//         setUsername(value);

//         if (value.length <= 6){
//             setUsernameError('Username must be more than 6 characters');
//         }else{
//             setUsernameError('');
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (usernameError){
//             alert('Fix error before submitting');
//         }else{
//             alert(`Submitted username: ${username}`);
//         }
//     };

//     return(
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={username}
//                 onChange={handleUsername}
//                 placeholder="Enter username"
//             />
//             <p>{usernameError}</p>
//             <button>Submit</button>
//         </form>
//     );
// }
// export default App;

// Chapter 9: Network Requests in React

import { useState, useEffect } from 'react';

function App() {
    const [title, setTitle] = useState('');

    useEffect(() => {getData();},[]);

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todo/1');
        const task = await response.json();
        setTitle(task.title);
    };

    return <h1>{title}</h1>;
}

export default App;
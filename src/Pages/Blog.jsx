import React from 'react';
import Pdf from "react-to-pdf";
import { FaCloudDownloadAlt } from "react-icons/fa";

const ref = React.createRef();

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <div className='flex justify-center'>
                    <h3 className='text-3xl font-semibold flex items-center '>Generate Pdf <span className='ms-3 cursor-pointer text-primary' onClick={toPdf}><FaCloudDownloadAlt className='text-3xl' /></span></h3>
                </div>}
            </Pdf>
            <div className='my-6 mx-auto p-4' ref={ref} style={{ width: '800px' }}>
                <div>
                    <h3 className='text-2xl font-semibold my-4'>1/ Tell us the differences between uncontrolled and controlled components.</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Uncontrolled components</th>
                                <th>Controlled components</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Uncontrolled components refer to variables or elements that are not actively managed or manipulated during the system or process</td>
                                <td>Controlled components, on the other hand, refer to variables or elements that are actively managed or manipulated to achieve a desired outcome.</td>
                            </tr>
                            <tr>
                                <td>Uncontrolled components can have a random or unpredictable effect on the system or process, since they are not actively managed.</td>
                                <td>Controlled components, on the other hand, are deliberately manipulated to achieve a specific outcome, and therefore their influence can be predicted and controlled.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold my-4'>2/ How to validate React props using PropTypes</h3>
                    <p>PropTypes is a library included with React that allows you to validate the props of a component. It provides a set of predefined types that you can use to specify the expected types of your props, such as strings, numbers, booleans, arrays, and objects. You can use PropTypes to catch errors early and make sure that your component is used correctly. To use PropTypes, you first import the prop-types library, then define the expected types of your props using the propTypes property of your component. When a prop is passed to the component that does not match its expected type, React will display a warning in the console.</p>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold my-4'>3/ Tell us the difference between nodejs and express js.</h3>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Node JS</th>
                                    <th>Express JS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Node.js is a runtime environment for running JavaScript on the server</td>
                                    <td>Express.js is a web application framework built on top of Node.js.</td>
                                </tr>
                                <tr>
                                    <td>Node.js provides low-level APIs for system access, file I/O, and networking</td>
                                    <td>Express.js provides higher-level abstractions for routing, middleware, templating, and other common web application features.</td>
                                </tr>
                                <tr>
                                    <td>Node.js can be used on its own or with other libraries and frameworks</td>
                                    <td>Express.js is designed to be used with Node.js and provides a streamlined way to build web applications.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold my-4'>4/ What is a custom hook, and why will you create a custom hook?</h3>
                    <p>A custom hook is a reusable JavaScript function that utilizes one or more built-in React hooks to provide a specific functionality that can be shared across multiple components. Custom hooks allow developers to encapsulate complex logic into a single function, making their code more modular, readable, and easier to maintain. Custom hooks can be used to abstract away common functionality, such as fetching data from APIs, handling form submissions, and managing state. They can also be published and shared across projects, making it easier for developers to collaborate and reuse code.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
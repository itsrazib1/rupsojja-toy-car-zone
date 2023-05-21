import { useEffect } from "react";


const Bloge = () => {
    useEffect(()=>{
        document.title = "RTCZ | Blogs"
    },[])
    return (
        <div className="grid grid-cols-1 justify-items-center mt-16 border-4 p-5 mb-5 rounded-xl py-10 ">
            <div>
                <h1 className="text-2xl font-serif font-semibold uppercase ">Click and see blog questions!!</h1>
            </div>
            <div className="mt-7">
                <label htmlFor="my-modal-5" className="btn btn-primary lowercase">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </label>


                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <p className="py-4">* Access Token: Since access tokens are short-lived and usually meant for immediate use, they are typically stored in memory or a short-lived storage mechanism (e.g., session storage or a cookie with an expiration time). Storing them in memory is generally safer since it reduces the risk of token theft in case of XSS (cross-site scripting) attacks.</p>
                        <p className="py-4">* Refresh Token: Refresh tokens have a longer lifespan and need to be securely stored to prevent unauthorized access. They should be stored in a secure storage mechanism such as an HTTP-only cookie or a secure storage solution like browser storage (e.g., localStorage or IndexedDB) with proper encryption and security measures in place.</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn bg-green-800">Okay!</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-7">
                <label htmlFor="my-modal-6" className="btn btn-accent lowercase">2. Compare SQL and NoSQL databases?
                </label>


                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <p className="py-4">* SQL databases define and manipulate data-based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice, especially for great complex queries. But from another side, it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it.</p>
                        <p className="py-4">* A NoSQL database has a dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based, or organized as a key-value store. This flexibility means that documents can be created without having a defined structure first. Also, each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. </p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn bg-green-800">Okay!</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-7">
                <label htmlFor="my-modal-7" className="btn btn-secondary lowercase">3. What is express js? What is Nest JS?
                </label>


                <input type="checkbox" id="my-modal-7" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <p className="py-4">* Express is a popular unopinionated web framework, written in JavaScript and hosted within the Node. js runtime environment. This module explains some of the key benefits of the framework, how to set up your development environment and how to perform common web development and deployment tasks</p>
                        <p className="py-4">* Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript. </p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-7" className="btn bg-green-800">Okay!</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-7">
                <label htmlFor="my-modal-8" className="btn btn-info lowercase">4. What is MongoDB aggregate and how does it work?
                </label>


                <input type="checkbox" id="my-modal-8" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <p className="py-4">*  Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-8" className="btn bg-green-800 ">Okay!</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Bloge;
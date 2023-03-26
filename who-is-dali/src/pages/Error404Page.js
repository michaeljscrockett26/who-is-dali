import {useEffect} from "react";

const Error404Page = () => {
    useEffect(() => {
        document.title = "Page Not Found";
    }, [])

    return (
        <>
            <h1>Oh no...</h1>
            <p>We couldn't find the page you're looking for</p>
        </>
    );
};

export default Error404Page;
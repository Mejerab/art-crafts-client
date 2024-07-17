import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    const handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            {
                error.status === 404 && <img className="w-96" src="https://cdn.freebiesupply.com/blog/23-11-2018/404-svg-animated-page-concept-for-e-store-zajno-w8.png" alt="" />
            }
            <div className="flex items-center">
            <h4 className="font-sans text-3xl font-bold italic pr-2">{error.status}</h4>
            <h4 className="text-2xl font-semibold">{error.statusText || error.message}</h4>
            </div>
            <button onClick={handleGoBack} className="btn mt-5 bg-[#95453590] text-white px-7">Go Back</button>
        </div>
    );
};

export default ErrorPage;
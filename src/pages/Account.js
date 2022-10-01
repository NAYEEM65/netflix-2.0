import React from 'react';

const Account = () => {
    return (
        <div className="w-full text-white">
            <img
                className="w-full h-full object-cover"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/044b9365-d6b8-4e45-98b0-3ace7d99ffd3/BD-en-20220926-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt=""
            />
            <div className="bg-black/50 fixed top-0 left-0 w-full h-[550px]">
                <div className="absolute top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
                </div>
            </div>
        </div>
    );
};

export default Account;

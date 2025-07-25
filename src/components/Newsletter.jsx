import React from "react";

const Newsletter= () => {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-2 my-32">
<h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Blog!</h1>
<p className="md:text-lg text-gray-500/70 pb-8">Subscibe to get the latest Blog, new Tech and Exclusive News.</p>
<form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12 ">

    <input type="email" placeholder="Enter your email" required className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rouned-r-none px-3 text-gray-500" />
    <button type="submit" className="bg-primary/80 text-white md:px-12 px-8 h-full rounded-md hover:bg-primary transition-all cursor-pointer rounded-l-none">Subscribe</button>
</form>
        </div> 

    )
}
export default Newsletter;
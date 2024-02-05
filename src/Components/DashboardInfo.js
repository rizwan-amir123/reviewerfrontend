import { Link } from "react-router-dom";

const DashboardInfo = () => {
    return (
      <section className="pb-10 bg-gradient-to-r from-[#581381] to-[#F5A1E8] min-h-screen text-white 
      ">
        <p className="py-10 px-10 text-3xl">Dashboard</p>
        <div className="flex flex-col px-10 space-y-3">
            <div className="flex space-x-3">
                <div className="rounded-lg py-3 px-4 w-full bg-sky-500">
                    <Link to="/search?overall=5"><p className="font-semibold text-xl pb-3 transition ease-in-out delay-150 hover:text-2xl">Products by Rating </p></Link>
                    <div className="mt-2 flex space-x-4">
                        <Link to="/search?overall=5"><div className="rounded-lg bg-sky-700 px-10 py-3 hover:opacity-80 hover:font-bold">5-star</div></Link>
                        <Link to="/search?overall=4"><div className="rounded-lg bg-sky-700 px-10 py-3 hover:opacity-80 hover:font-bold">4-star</div></Link>
                        <Link to="/search?overall=3"><div className="rounded-lg bg-sky-700 px-10 py-3 hover:opacity-80 hover:font-bold">3-star</div></Link>
                        <Link to="/search?overall=2"><div className="rounded-lg bg-sky-700 px-10 py-3 hover:opacity-80 hover:font-bold">2-star</div></Link>
                        <Link to="/search?overall=1"><div className="rounded-lg bg-sky-700 px-10 py-3 hover:opacity-80 hover:font-bold">1-star</div></Link>
                    </div>
                </div>
                <Link to="/search?asin=B000K2PJ4K">
                    <div className="h-full bg-rose-700 grid py-3 px-2 text-center rounded-lg justify-center">
                        <p className="place-self-center hover:text-2xl font-semibold hover:opacity-80"> Search By Product ID</p>
                    </div>
                </Link>
                <Link to="/data">
                    <div className="h-full bg-lime-500 grid py-3 px-2 text-center rounded-lg justify-center">
                        <p className="place-self-center hover:text-2xl font-semibold hover:opacity-80"> CRUD Operations</p>
                    </div>
                </Link>
            </div>
            <div className="w-full space-y-3 flex space-x-3">
                <div className="w-full space-y-3 flex-col">
                    <div className="rounded-lg py-3 px-4 bg-amber-500">
                        <Link to="/search?reviewerName=kristin"><p className="font-semibold text-xl pb-3 transition ease-in-out delay-150 hover:text-2xl">Reviewers </p></Link>
                        <div className="mt-2 flex space-x-4">
                            <Link to="/search?reviewerName=kristin"><div className="rounded-lg bg-amber-700 px-10 py-3 hover:opacity-80 hover:font-bold">Kristin</div></Link>
                            <Link to="/search?reviewerName=Van_G"><div className="rounded-lg bg-amber-700 px-10 py-3 hover:opacity-80 hover:font-bold">Van G</div></Link>
                            <Link to="/search?reviewerName=Brittany_C."><div className="rounded-lg bg-amber-700 px-10 py-3 hover:opacity-80 hover:font-bold">Brittany C.</div></Link>
                            <Link to="/search?reviewerName=keith_jones"><div className="rounded-lg bg-amber-700 px-10 py-3 hover:opacity-80 hover:font-bold">Keith Jones</div></Link>
                            <Link to="/search?reviewerName=Lee_Berrey"><div className="rounded-lg bg-amber-700 px-10 py-3 hover:opacity-80 hover:font-bold">Lee Berrey</div></Link>
                        </div>
                    </div>
                    <div className="rounded-lg py-3 px-4 bg-rose-500">
                    <Link to="/search?reviewTime=2009"><p className="font-semibold text-xl pb-3 transition ease-in-out delay-150 hover:text-2xl">Reviews By Year </p></Link>
                    <div className="mt-2 flex space-x-4">
                        <Link to="/search?reviewTime=2009"><div className="rounded-lg bg-rose-800 px-10 py-3 hover:opacity-80 hover:font-bold">2009</div></Link>
                        <Link to="/search?reviewTime=2010"><div className="rounded-lg bg-rose-800 px-10 py-3 hover:opacity-80 hover:font-bold">2010</div></Link>
                        <Link to="/search?reviewTime=2012"><div className="rounded-lg bg-rose-800 px-10 py-3 hover:opacity-80 hover:font-bold">2012</div></Link>
                        <Link to="/search?reviewTime=2015"><div className="rounded-lg bg-rose-800 px-10 py-3 hover:opacity-80 hover:font-bold">2015</div></Link>
                        <Link to="/search?reviewTime=2018"><div className="rounded-lg bg-rose-800 px-10 py-3 hover:opacity-80 hover:font-bold">2018</div></Link>
                    </div>
                    </div>
                    <div className="rounded-lg py-3 px-4 bg-violet-700">
                    <Link to="/search?verified=true"><p className="font-semibold text-xl pb-3 transition ease-in-out delay-150 hover:text-2xl">Verified Reviews</p></Link>
                        <div className="mt-2 flex space-x-4">
                            <Link to="/search?verified=true"><div className="rounded-lg bg-violet-500 px-10 py-3 hover:opacity-80 hover:font-bold">Verified</div></Link>
                            <Link to="/search?verified=false"><div className="rounded-lg bg-violet-500 px-10 py-3 hover:opacity-80 hover:font-bold">Non-verified</div></Link>
                        </div>
                    </div>
                </div>
                <div className="w-1/5">
                    <div className="flex flex-col h-full space-y-3">
                        <div className="bg-yellow-500 h-1/2 rounded-lg grid font-semibold group">
                            <div className="place-self-center">
                                <svg className="w-24 h-34 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 7h-.7a3.4 3.4 0 0 0-.7-4c-.6-.6-1.5-1-2.4-1-1.8 0-3.3 1.2-4.4 2.5C10.4 2.8 9 2 7.5 2a3.5 3.5 0 0 0-3.1 5H4a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a2 2 0 0 0-2-2ZM10 7H7.6a1.5 1.5 0 0 1 0-3c.9 0 2 .8 3 2.1l-.4.9Zm6.2 0h-3.8c1-1.4 2.4-3 3.8-3a1.5 1.5 0 0 1 0 3ZM13 14h-2v8h2v-8Zm-4 0H4v6a2 2 0 0 0 2 2h3v-8Zm6 0v8h3a2 2 0 0 0 2-2v-6h-5Z"/>
                                </svg>
                            </div>
                            <div className="place-self-center">
                                <Link to="/products">
                                    <p className="text-xl group-hover:text-2xl">All Products</p>
                                </Link>
                            </div>
                        </div>
                        <div className="container bg-lime-500 h-1/2 group rounded-lg grid font-semibold"> 
                            <div className="place-self-center">
                                <svg className="w-24 h-34 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4.5V19c0 .6.4 1 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.2M20 9v3.2"/>
                                </svg>
                            </div>
                            <div className="place-self-center">
                                <Link to="/graphs">
                                    <p className="text-xl group-hover:text-2xl">Graphs</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      </section>
    );
};

export default DashboardInfo;
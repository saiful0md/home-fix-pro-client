import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const MeetOurTeam = () => {
    return (
        <div className="py-6 ">
            <div className="container p-4 mx-auto space-y-16 sm:p-10">
                <div className="space-y-4  max-w-5xl mx-auto text-center">
                    <h3 className="text-2xl font-bold leading-none sm:text-5xl">Meet our team</h3>
                    <p className="max-w-2xl mx-auto dark:text-gray-600">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                </div>
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col space-x-6">
                        <img alt="" className="flex-1  object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://i.ibb.co/ZXTgjF2/smiling-young-male-engineer-wearing-uniform-holding-safety-helmet-looking-camera-showing-thumb-up-is.jpg" />
                        <div className="flex flex-col">
                            <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                            <p className="text-sm dark:text-gray-600">Electrical Repair</p>
                            <div className="flex mt-2 space-x-2">
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
                                    <FaFacebook className="text-2xl text-blue-700"></FaFacebook>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
                                    <FaTwitter className="text-2xl text-blue-400"></FaTwitter>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
                                    <FaLinkedin className="text-2xl text-blue-600"></FaLinkedin>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-x-6">
                        <img alt="" className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://i.ibb.co/S6PVB7F/young-builder-man-construction-uniform-red-cap-holding-paint-roller-brush-with-big-smile-face-isolat.jpg" />
                        <div className="flex flex-col">
                            <h4 className="text-xl font-semibold">Alomgir Hossain</h4>
                            <p className="text-sm dark:text-gray-600">Painting Service</p>
                            <div className="flex mt-2 space-x-2">
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
                                    <FaFacebook className="text-2xl text-blue-700"></FaFacebook>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
                                    <FaTwitter className="text-2xl text-blue-400"></FaTwitter>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
                                    <FaLinkedin className="text-2xl text-blue-600"></FaLinkedin>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-x-6">
                        <img alt="" className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://i.ibb.co/tD9QJDY/front-view-man-troubleshooting-computer-23-2148419157.jpg" />
                        <div className="flex flex-col">
                            <h4 className="text-xl font-semibold">Johir Uddin</h4>
                            <p className="text-sm dark:text-gray-600">Appliance Repair</p>
                            <div className="flex mt-2 space-x-2">
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
                                    <FaFacebook className="text-2xl text-blue-700"></FaFacebook>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
                                    <FaTwitter className="text-2xl text-blue-400"></FaTwitter>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
                                    <FaLinkedin className="text-2xl text-blue-600"></FaLinkedin>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-x-6">
                        <img alt="" className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://i.ibb.co/6Rv7ZC7/sanitary-technician-gesturing-thumb-up-23-2147772204.jpg" />
                        <div className="flex flex-col">
                            <h4 className="text-xl font-semibold">Akkas Ali</h4>
                            <p className="text-sm dark:text-gray-600">Plumbing Repair</p>
                            <div className="flex mt-2 space-x-2">
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
                                    <FaFacebook className="text-2xl text-blue-700"></FaFacebook>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-gray-600">
                                    <FaTwitter className="text-2xl text-blue-400"></FaTwitter>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-gray-600">
                                    <FaLinkedin className="text-2xl text-blue-600"></FaLinkedin>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default MeetOurTeam;
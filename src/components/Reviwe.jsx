import { CiStar } from "react-icons/ci";


const Reviwe = () => {
    return (     
         <div className="py-6 ">
            <div className="container p-4 mx-auto space-y-16 sm:p-10">
                <div className="space-y-4  max-w-5xl mx-auto text-center">
                    <h3 className="text-2xl font-bold leading-none sm:text-5xl">Customer Reviwe</h3>
                </div>
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:border">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://i.ibb.co/qkfXcXs/kirill-balobanov-2r-Is8-OH5ng0-unsplash.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Johra Barsir</h4>
                                    <span className="text-xs dark:text-gray-600">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <CiStar></CiStar>
                                <span className="text-xl font-bold">4.5</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                            <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                        </div>
                    </div>
                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:border">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://i.ibb.co/TRZ8rbb/luis-villasmil-hh3-Vi-D0r0-Rc-unsplash.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Julfiqar</h4>
                                    <span className="text-xs dark:text-gray-600">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <CiStar></CiStar>
                                <span className="text-xl font-bold">4.8</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                            <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                        </div>
                    </div>
                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:border">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://i.ibb.co/v1wGP2w/mubariz-mehdizadeh-t3zr-Em88ehc-unsplash.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Rakib hasan</h4>
                                    <span className="text-xs dark:text-gray-600">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <CiStar></CiStar>
                                <span className="text-xl font-bold">4.5</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                            <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                        </div>
                    </div>
                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:border">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://i.ibb.co/rvvcS6Y/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Aysa Siddika</h4>
                                    <span className="text-xs dark:text-gray-600">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <CiStar></CiStar>
                                <span className="text-xl font-bold">4.2</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                            <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Reviwe;
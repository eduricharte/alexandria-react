import React from "react";
import Reading from "../../assets/img/landing/reading.svg"
import Fast from "../../assets/img/landing/fast.svg"
import Trends from "../../assets/img/landing/trends.svg"
import Files from "../../assets/img/landing/files.svg"

function Landing(){
    return(
        /*Why Alexandria & Features*/
        <div>     
            <div className='space-y-6 flex flex-row h-auto px-20 py-12 text-white bg-blue-600'> 
                <div className='w-3/5'>
                    <div className='font-family: Muli, font-extrabold text-4xl'>
                        Why Alexandria?
                    </div>
                    <div className='text-xl font-bold space-y-3'>
                        ________
                    </div>
                    <br />
                    <div className='space-y-6 font-family:lato, w-2/3'>
                        <div>
                            <b>Based on the antique Great Alexandria library</b>, our platform focuses on being a worldwide knowledge hub for many interesting topics. 
                        </div>
                        <div>
                            We encourage everyone to share their knowledge so we can live better as a society. 
                        </div>
                        <div>
                            <i>#FreeKnowledge</i>
                        </div>
                    </div>
                </div>
                <div className='content-center -w-2/5'>
                    <img src={Reading} width="391.32px" height="464px"/>
                </div>
            </div>

            <div className='flex flex-col w-full font-family: Muli font-extrabold content-center text-4xl h-24 divide-y divide-black px-64'>
                <div className='text-center'>
                    Features
                </div>
                <div />    
            </div>

            <div className='flex flex-row'>
                <div className='flex flex-row bg-pink-200'>
                    <div className='content-center ml-16 self-center'>
                        <img src={Fast} width='320px' height='333px'/>
                    </div>
                    <div className='text-pink-600 space-y-6 mr-16 my-16 -w-1/2'>
                        <div className='font-family: Muli font-extrabold text-4xl'>
                            Blazingly Fast
                        </div>
                        <div className='font-family: Lato space-y-6'>
                            <b>Search speed,</b> our platform is made to perform advanced searches quickly so you can enjoy your content faster. 
                        </div>
                        <div>
                            Powered by <b>Alexandria Neutrino</b>.
                        </div>
                    </div>
                </div>
                <div className='bg-purple-900 flex flex-row'>
                    <div className='content-center ml-16 self-center w-1/2'>
                        <img src={Trends} width='297.62px' height='333px'/>
                    </div>
                    <div className='text-pink-300 space-y-6 mr-16 my-16 -w-1/2'>
                        <div className='font-family: Muli font-extrabold text-3xl'>
                            Trends
                        </div>
                        <div className='font-family: Lato space-y-6'>
                            <b>Get the latest topic</b>, our platform brings you the possibility to look at the newer things happening around you.
                        </div>
                        <div>
                            <i>#AlexandriaIsAwesome</i>
                        </div>
                    </div>
                </div>
            </div> 

            <div className='space-y-6 flex flex-row pl-20 py-12 text-white bg-teal-600'> 
                <div className='content-center'>
                    <img src={Files} width="340.14px" height="396.64px"/>
                </div>
                <div className='pl-32'>
                    <div className='font-family: Muli, font-extrabold text-4xl'>
                        Accessibility
                    </div>
                    <div className='text-xl font-bold space-y-3'>
                        ________
                    </div>
                    <br />
                    <div className='space-y-6 font-family:lato w-2/3'>
                        <div>
                            <b>Don’t get stuck</b>, our platform offers new ways to get inside the digital age. From paper to Alexandria. 
                        </div>
                        <div>
                            From paper to Alexandria
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landing;

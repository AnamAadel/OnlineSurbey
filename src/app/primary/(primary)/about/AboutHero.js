import Image from 'next/image'
import playImage from "../../../../Asset/play.gif"
function AboutHero() {
    return (
        <section className=" relative z-[1] bg-blue-50">
        <div className="w-full h-full absolute top-0 left-0 z-[-1] opacity-20" style={{backgroundImage: "url('https://i.pinimg.com/564x/e7/38/8b/e7388be6e75e602eb3dc5fef7a5dec71.jpg')"}} >
            
        </div>
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm xl:max-w-2xl lg:text-left">
                    <h1 className="text-3xl font-bold leadi sm:text-5xl">We combine data and technology for world- leading enterprise
                        solutions
                    </h1>
                    <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex-shrink-0 w-24 mb-6 h-24 sm:h-32 sm:w-32 sm:mb-0">
                            <Image src={playImage} width={200} height={200} alt="" className=" object-center w-full h-full rounded dark:bg-gray-500" />
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <div>
                                <h2 className="text-2xl font-semibold">Know more about us</h2>
                                <span className="text-sm dark:text-gray-400">Introduction by Programming Hero</span>
                            </div>
                        </div>
                    </div>

                </div>
                <Image src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='max-w-[1000px] object-cover' width={700} height={700} alt='survey image' />
            </div>
        </section>
    )
}

export default AboutHero
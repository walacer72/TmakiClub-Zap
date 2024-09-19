import { Skeleton } from "@/components/ui/skeleton"

export const SkeletonTab = () => {

    const ListSkeleton = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div>

            <Skeleton className="relative mx-auto max-w-xs h-8 z-20 rounded-full md:max-w-4xl" />

            <div className="mt-10 mx-4 grid gap-12 grid-cols-1 md:grid-cols-2">

                {ListSkeleton.map((index) => (
                    <div className="flex items-center gap-4" key={index}>
                        <div className="md:flex-1 w-40 md:w-full">
                            <Skeleton className="w-full h-36 md:h-52 rouded-xl" />
                        </div>
                        <div className="flex-1 flex flex-col w-40 h-full p-4 justify-between md:w-full md:p-0">
                            <div>
                                <Skeleton className="w-full h-7 mt-2 rounded-xl" />
                                <Skeleton className="w-36 md:w-48 h-14 mt-2 rounded-xl" />
                            </div>
                            <Skeleton className="w-16 h-7 rounded-xl self-end" />
                            <Skeleton className="w-full h-9 mt-2 rounded-xl" />
                        </div>

                    </div>
                ))}

            </div>
        </div>


    )
}
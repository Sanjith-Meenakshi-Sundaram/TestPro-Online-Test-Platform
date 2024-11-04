function Profile_test_card(){
    return(
        <div className="lg:w-[15rem] h-[9rem] border-2 rounded-lg p-2 flex flex-col justify-between transition">
            <div>
                <p className="text-lg font-semibold text-zinc-600">Fundamentals of java</p>
                <p className="text-sm text-zinc-400">Complited on : 19/08/2024</p>
                <p className="text-sm text-zinc-400">Score: 75%</p>
                <p className="text-sm text-zinc-400">Attempt: 1</p>
            </div>
            <div className="flex justify-between items-center">
                <button className="rounded border-2 border-[#09B0E0] text-zinc-600 px-2 py-[0.18rem]">Retake</button>
                <button className="rounded bg-[#09B0E0] text-white px-2 py-1">Review</button>
            </div>
        </div>
    )
}

export default Profile_test_card;
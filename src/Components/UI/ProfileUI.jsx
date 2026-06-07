const data = {
    "name": "Junaid Hunani",
    "role": "Ui Ux Developer",
    "bio": "I build simple and clean designs.",
    "followers": "2k",
    "following": "8",
    "posts": "90",
    "avatar": "https://i.ibb.co/8Dh8Fw7v/cropped-circle-image.png"
};

export default function ProfileUI() {

    return (
        <div className="min-h-screen  flex items-center justify-center bg-[#f7f7f7] p-6">
            <div className="bg-[#ffffff] relative text-black w-full max-w-sm rounded-2xl p-8 flex flex-col items-center  border-[1.5px] border-gray-200">

                <div className="w-28 h-28 rounded-full overflow-hidden border-3 border-gray-800/10 mb-4 p-1">
                    <img src={data.avatar} alt="avatar" className="w-full h-full object-cover" />
                </div>

                <h2 className="text-2xl font-semibold">{data.name}</h2>
                <p className="text-gray-800 text-center -mt-1 text-[16px] font-semibold">{data.role}</p>

                <p className="text-gray-800 text-center mt-2 text-[16px] font-semibold">
                    {data.bio}
                </p>

                <button className="mt-4 px-6 py-1.5 bg-white/10 hover:bg-white/20 transition rounded-full border border-black/15">
                    + Follow
                </button>

                <div className="flex justify-between w-full mt-6 text-center">
                    <div>
                        <p className="text-gray-900 font-semibold text-base">Followers</p>
                        <p className="text-base text-gray-900 ">{data.followers}</p>
                    </div>
                    <div className="border-l border-black/15"></div>
                    <div>
                        <p className="text-gray-900 font-semibold text-base">Following</p>
                        <p className="text-base text-gray-900 ">{data.following}</p>
                    </div>
                    <div className="border-l border-black/15"></div>
                    <div>
                        <p className="text-gray-900 font-semibold text-base w-[55px]">Posts</p>
                        <p className="text-base text-gray-900 ">{data.posts}</p>
                    </div>
                </div>

                <div className="w-full flex gap-3 mt-6 font-medium">
                    <button className="flex-1 bg-sky-500 transition text-white py-2 rounded-lg border border-sky-500">
                        Share Profile
                    </button>
                    <button className="flex-1 bg-sky-500 hover:bg-sky-600 transition text-white font-medium py-2 rounded-lg">
                        Message
                    </button>
                </div>

            </div>
        </div>
    );
}


import Image from "next/image";

const ProfileEditPage = () => {
    return (
        <main className="min-h-screen bg-linear-to-br from-blue-50 via-orange-50 to-amber-50 px-4 py-8 sm:px-6 sm:py-12">
            <div className="mt-10 mx-auto w-full max-w-4xl">
                <section className="overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 shadow-2xl shadow-orange-100 backdrop-blur sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>
                    <p className="mt-2 text-sm text-gray-600">Update your display name and profile photo.</p>

                    <form  className="mt-6 grid gap-6 sm:grid-cols-2">
                        <div className="sm:col-span-1 flex flex-col items-center gap-4">
                            {/* <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-amber-300 bg-white">
                                {preview ? (
                                    // <Image src={} alt="preview" fill className="object-cover" />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-gray-400">No photo</div>
                                )}
                            </div> */}

                            <label className="w-full text-center">
                                <input
                                    type="file"
                                    accept="image/*"
                                    
                                    className="hidden"
                                    id="profile-photo"
                                />
                                <button
                                    type="button"
                                    
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    Choose photo
                                </button>
                            </label>
                        </div>

                        <div className="sm:col-span-1 flex flex-col justify-between">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Display name</label>
                                <input
                                    
                                    
                                    placeholder="Your name"
                                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            <div className="mt-4 flex items-center justify-start gap-3">
                                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-orange-200 transition hover:from-orange-600 hover:to-amber-600">
                                    Update Information
                                </button>
                                <button type="button" className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 border border-gray-200">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
};

export default ProfileEditPage;

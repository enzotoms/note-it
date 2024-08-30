import { GiNotebook, GiStabbedNote } from "react-icons/gi";
import { AiFillDatabase } from "react-icons/ai";

const HomePageCards = () => {
  return (
    <div>
        <section>
            <div className="flex items-center justify-center mt-6 p-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

                <div className="bg-white p-6 rounded-lg shadow-lg h-52 flex flex-col items-center justify-center">
                    <GiNotebook className="h-12 w-12  mb-4" />
                    <h2 className="text-2xl font-bold text-center mb-2">Create Notes</h2>
                  <p className="text-center">Create notes and keep track of your tasks in hand.</p>
                </div>


                    <div className="bg-white p-6 rounded-lg shadow-lg h-52 flex flex-col items-center justify-center">
                         <GiStabbedNote className="h-12 w-12  mb-4"/>
                    <h2 className="text-2xl font-bold text-center">Edit Notes</h2>
                        <p className="text-center">Edit your notes and make changes whenever you want.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg h-52 flex flex-col items-center justify-center">
                         <AiFillDatabase className="h-12 w-12  mb-4" />
                     <h2 className="text-2xl font-bold text-center">Delete Notes</h2>
                        <p className="text-center">Delete notes that you no longer need.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HomePageCards;
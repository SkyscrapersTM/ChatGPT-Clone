import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-gray-100 min-h-screen px-4">
      <h1 className="text-4xl font-semibold mt-16 mb-10 text-center md:mt-0 md:mb-20">
        ChatGPT
      </h1>
      <div className="flex flex-col gap-5 space-x-2 text-center md:flex-row md:gap-0">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-6 w-6" />
            <h2 className="text-xl">Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              &quot;Explain quantum computing in simple terms&quot;
            </p>
            <p className="infoText">
              &quot;What is the difference between a dog and a cat?&quot;
            </p>
            <p className="infoText">
              &quot;Got any creative ideas for a 10 year old’s birthday?&quot;
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-6 w-6" />
            <h2 className="text-xl">Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT Model to use</p>
            <p className="infoText">
              Messages are store in Firebase&apos;s Firestore
            </p>
            <p className="infoText">
              Hot Toast notifications when ChatGPT is thinking!
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-6 w-6" />
            <h2 className="text-xl">Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

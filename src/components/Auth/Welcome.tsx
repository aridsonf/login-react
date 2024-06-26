
export default function WelcomeMessage() {
  return (
    <div className="flex flex-col gap-4 select-none py-6">
      <h1 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
        Boas-vindas!
      </h1>
      <p className="text-lg font-medium text-gray-600 dark:text-neutral-400">
        Entre utilizando uma das opções abaixo
      </p>
    </div>
  );
}
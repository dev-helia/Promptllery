import { useState } from "react";
import { Switch } from "@headlessui/react";
import { SparklesIcon, BoltIcon } from "@heroicons/react/24/solid"; // ✅ 替换进来了！

export default function ModelSelector({ model, setModel }) {
  const [enabled, setEnabled] = useState(model === "gpt-4o");

  const toggleModel = () => {
    const newModel = enabled ? "gpt-3.5-turbo" : "gpt-4o";
    setModel(newModel);
    setEnabled(!enabled);
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      <Switch
        checked={enabled}
        onChange={toggleModel}
        className={`${
          enabled ? "bg-purple-600" : "bg-gray-300"
        } relative inline-flex h-6 w-11 items-center rounded-full transition`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform bg-white rounded-full transition`}
        />
      </Switch>

      <span className="text-sm text-gray-700 flex items-center gap-1">
        {enabled ? (
          <>
            <SparklesIcon className="h-4 w-4 text-purple-600" />
            GPT-4o（强）
          </>
        ) : (
          <>
            <BoltIcon className="h-4 w-4 text-yellow-500" />
            GPT-3.5（快）
          </>
        )}
      </span>
    </div>
  );
}

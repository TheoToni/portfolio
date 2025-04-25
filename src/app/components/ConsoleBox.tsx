import React from "react";

type ConsoleBoxProps = {
  command: string;
  promptPath?: string;
  children: React.ReactNode;
};

export default function ConsoleBox({
  command,
  promptPath = "~",
  children,
}: ConsoleBoxProps) {
  return (
    <div className="bg-black border border-gray-700 rounded-lg p-4 font-mono text-sm text-green-400 shadow-lg shadow-green-900/30">
      <div className="flex items-center mb-2 border-b border-gray-700 pb-1">
        <span className="text-xs text-gray-400 ml-auto">bash</span>
      </div>

      <div className="whitespace-pre-wrap">
        <span className="text-blue-400">user@portfolio</span>
        <span className="text-gray-400">:</span>
        <span className="text-purple-400">{promptPath}</span>
        <span className="text-gray-400">$</span> {command}
        <br />
        <br />
        <span className="text-white">{children}</span>
        <br />
        <br />
        <span className="text-blue-400">user@portfolio</span>
        <span className="text-gray-400">:</span>
        <span className="text-purple-400">{promptPath}</span>
        <span className="text-gray-400">$</span>{" "}
        <span className="animate-pulse">▋</span>
      </div>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Menu() {
  return (
    <div className="flex flex-col h-full w-16 items-center bg-primary-100 py-5">
      <span className="flex w-4/5 h-auto items-center justify-center py-3 mb-6">
        <FontAwesomeIcon
          icon="church"
          size="lg"
          className="text-current text-gray-200"
        />
      </span>
      <div className="grid grid-cols-1 h-1/4 w-4/5 items-center justify-items-center gap-2">
        <FontAwesomeIcon
          icon="users"
          size="lg"
          className="text-current text-gray-300"
        />
        <FontAwesomeIcon
          icon="clipboard-list"
          size="lg"
          className="text-current text-gray-300"
        />
        <FontAwesomeIcon
          icon="calendar-alt"
          size="lg"
          className="text-current text-gray-300"
        />
        <FontAwesomeIcon
          icon="chart-pie"
          size="lg"
          className="text-current text-gray-300"
        />
      </div>
      <span className="flex flex-1 w-4/5 items-center justify-center py-3">
        <FontAwesomeIcon
          icon="question-circle"
          size="lg"
          className="text-current text-gray-300 self-end"
        />
      </span>
    </div>
  );
}

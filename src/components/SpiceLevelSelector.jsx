import { useState } from "react";
import { FiCheck, FiX } from "react-icons/fi";

const spiceLevels = [
  { id: "mild", name: "Mild", description: "No spice, kid-friendly", color: "bg-green-500", textColor: "text-green-400", borderColor: "border-green-500", bgColor: "bg-green-500/10" },
  { id: "medium", name: "Medium", description: "Balanced flavor", color: "bg-yellow-500", textColor: "text-yellow-400", borderColor: "border-yellow-500", bgColor: "bg-yellow-500/10" },
  { id: "hot", name: "Hot", description: "Spicy kick", color: "bg-orange-500", textColor: "text-orange-400", borderColor: "border-orange-500", bgColor: "bg-orange-500/10" },
  { id: "extra-hot", name: "Extra Hot", description: "Maximum heat", color: "bg-red-500", textColor: "text-red-400", borderColor: "border-red-500", bgColor: "bg-red-500/10" },
];

export default function SpiceLevelSelector({ itemName, onConfirm, onCancel }) {
  const [selectedLevel, setSelectedLevel] = useState("medium");

  const handleConfirm = () => {
    onConfirm(selectedLevel);
  };

  return (
    <div className="w-full mt-3 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-white font-semibold text-sm">Select Spice Level</p>
          <p className="text-yellow-500 text-xs">{itemName}</p>
        </div>
        <button
          onClick={onCancel}
          className="text-white/50 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-lg"
        >
          <FiX size={18} />
        </button>
      </div>

      {/* Spice Level Options - Horizontal */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
        {spiceLevels.map((level) => (
          <button
            key={level.id}
            onClick={() => setSelectedLevel(level.id)}
            className={`flex-shrink-0 flex items-center gap-2 p-2.5 rounded-xl border-2 transition-all duration-300 min-w-[100px] ${
              selectedLevel === level.id
                ? `${level.borderColor} ${level.bgColor}`
                : "border-white/10 hover:border-white/30 hover:bg-white/5"
            }`}
          >
            <div className={`w-3 h-3 rounded-full ${level.color} flex-shrink-0`} />
            <span className={`font-semibold text-xs ${selectedLevel === level.id ? level.textColor : 'text-white'}`}>
              {level.name}
            </span>
            {selectedLevel === level.id && (
              <FiCheck className={`${level.textColor}`} size={12} />
            )}
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-3">
        <button
          onClick={onCancel}
          className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
        >
          Cancel
        </button>
        <button
          onClick={handleConfirm}
          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
        >
          <FiCheck size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
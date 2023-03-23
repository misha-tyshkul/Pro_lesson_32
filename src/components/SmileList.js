import React, { useState } from "react";

const SmileList = () => {
  const [smileys, setSmileys] = useState([
    { id: 1, name: "😊", count: 0 },
    { id: 2, name: "😂", count: 0 },
    { id: 3, name: "😍", count: 0 },
    { id: 4, name: "🤔", count: 0 },
  ]);

  const handleVote = (id) => {
    setSmileys(smileys.map((smiley) => (smiley.id === id ? { ...smiley, count: smiley.count + 1 } : smiley)));
  };

  const handleShowResults = () => {
    const sortSmileys = smileys.sort((a, b) => b.count - a.count);
    alert(`The winner is : ${sortSmileys[0].name}`);
  };

  return (
    <div className="smileys-container">
      <h1>Vote for your favorite smiyles</h1>
      <ul className="smilyes-list">
        {smileys.map((smiley) => (
          <li className="smilyes-item" key={smiley.id}>
            <span>{smiley.name}</span>
            <button onClick={() => handleVote(smiley.id)}>Voit</button>
            <span>{smiley.count}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleShowResults}>Show results</button>
    </div>
  );
};

export default SmileList;

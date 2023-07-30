import React from "react";
import SingleNote from "./SingleNote";

const NotesList = (props) => {
  const searchMatches = props.notes.filter((note) => note.doesMatchSearch);

  return (
    <>
      <ul className="notes-list">
        {searchMatches.map((note) => (
          <SingleNote
            note={note}
            key={note.id}
            onType={props.onType}
            removeNote={props.removeNote}
          />
        ))}
      </ul>
    </>
  );
};

export default NotesList;

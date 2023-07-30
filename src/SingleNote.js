import React from "react";

const SingleNote = (props) => {
  const updateTitle = (e) => {
    props.onType(props.note.id, "title", e.target.value);
  };

  const updateDescription = (e) => {
    props.onType(props.note.id, "description", e.target.value);
  };

  const handleDelete = () => props.removeNote(props.note.id);

  return (
    <>
      <li className="note" key={props.id}>
        <input
          type="text"
          placeholder="Title"
          className="note__title"
          value={props.note.title}
          onChange={updateTitle}
        />
        <textarea
          placeholder="Description..."
          className="note__description"
          value={props.note.description}
          onChange={updateDescription}
        />
        <span className="note__delete" onClick={handleDelete}>
          X
        </span>
      </li>
    </>
  );
};

export default SingleNote;

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';
import { useState } from 'react';

export default function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredAuthor, setEnteredAuthor] = useState('Christian');
  const [enteredBody, setEnteredBody] = useState('The greatest on the mic');

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      ) : null}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author='Manuel' body='Check out the full course' />
      </ul>
    </>
  );
}

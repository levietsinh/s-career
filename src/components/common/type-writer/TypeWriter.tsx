import { useState, useEffect, useRef } from "react";
import styles from "./TypeWriter.module.scss";

const CONSTANTS = {
  DELETING_SPEED: 30,
  TYPING_SPEED: 150,
}
interface IProps { messages: string[], heading:string }
const TypeWriter = (props: IProps) => {
  const { messages, heading } = props;
  const timer:any = useRef();
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(CONSTANTS.TYPING_SPEED);

  useEffect(() => {
    const handleType = () => {
      setText(text
        ? message.substring(0, text.length - 1)
        : message.substring(0, text.length + 1));
      setTypingSpeed(isDeleting
        ? CONSTANTS.TYPING_SPEED
        : CONSTANTS.DELETING_SPEED);
      timer.current = setTimeout(handleType, typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer.current);
  }, [isDeleting]);

  useEffect(() => {
    console.log("loopNum", loopNum);
    if (!isDeleting && text === message) {
      setTimeout(() => {
        setIsDeleting(true);
      }, 500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      console.log("message", messages[Number(loopNum) % Number(messages.length)]);
      setMessage(messages[Number(loopNum) % Number(messages.length)])
    }
  }, [text, message, isDeleting, messages]);

  return (
    <h1>
      {heading}&nbsp;
        <span>{text}</span>
      <span className={styles["cursor"]} />
    </h1>
  );
}

export default TypeWriter;
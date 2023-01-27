import styles from "./TextField.module.scss";

interface FieldProp {
  id: string;
  type: string;
  text: string;
}

const TextField = (props: FieldProp) => {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={props.id}>
        {props.text}
      </label>
      <input
        className={styles.input}
        id={props.id}
        type={props.type}
        placeholder={props.text}
      />
    </div>
  );
};

export default TextField;

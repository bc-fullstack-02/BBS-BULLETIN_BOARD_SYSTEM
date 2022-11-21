import styles from './styles.module.css';
function Container(props) {
    return (
        <div className={`${styles.container}`}>
            {props.children}
        </div>
    );

}
export default Container;
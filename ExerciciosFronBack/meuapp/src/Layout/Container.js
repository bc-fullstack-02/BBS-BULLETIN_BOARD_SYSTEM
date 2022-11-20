import styles from './styles.module.css';
function Container(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}
export default Container;